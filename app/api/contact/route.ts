import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { sendThankYouEmail, sendAdminNotification } from '@/lib/email';

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  businessName: z.string().min(2, 'Business name must be at least 2 characters'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = contactSchema.parse(body);

    // Save to database
    const submission = await prisma.contactSubmission.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        businessName: validatedData.businessName,
        budget: validatedData.budget,
        message: validatedData.message,
      },
    });

    // Send thank you email to customer
    const emailSent = await sendThankYouEmail(validatedData);

    // Send notification to admin
    await sendAdminNotification(validatedData);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your submission! We will get back to you within 48 hours.',
        submissionId: submission.id,
        emailSent,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation error',
          errors: error.issues,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your submission. Please try again.',
      },
      { status: 500 }
    );
  }
}
