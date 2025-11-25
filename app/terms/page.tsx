import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <div className="container mx-auto px-6 py-32">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <article className="max-w-4xl mx-auto prose prose-invert">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Terms of Service</h1>
                    <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            By accessing or using BuildIQ's website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">2. Services</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            BuildIQ provides web design, development, UI/UX design, branding, and AI automation services. Our services include but are not limited to:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li>Website design and development</li>
                            <li>User interface and user experience design</li>
                            <li>Brand design and visual identity</li>
                            <li>AI automation and integrations</li>
                            <li>Consultation and strategy services</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">3. Project Engagement</h2>
                        <h3 className="text-xl font-semibold mb-3">3.1 Proposals and Contracts</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            All projects begin with a detailed proposal outlining scope, timeline, and costs. A formal contract will be provided before work commences.
                        </p>
                        <h3 className="text-xl font-semibold mb-3">3.2 Payment Terms</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Payment terms will be specified in your project contract. Typically, we require:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li>50% deposit before project commencement</li>
                            <li>Remaining balance upon project completion</li>
                            <li>Payment via bank transfer or agreed payment method</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
                        <h3 className="text-xl font-semibold mb-3">4.1 Client Ownership</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Upon full payment, you will own the final deliverables created specifically for your project, including designs, code, and content.
                        </p>
                        <h3 className="text-xl font-semibold mb-3">4.2 BuildIQ Rights</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            We retain the right to showcase completed projects in our portfolio and marketing materials unless otherwise agreed in writing.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">5. Client Responsibilities</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            To ensure successful project delivery, clients are responsible for:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li>Providing timely feedback and approvals</li>
                            <li>Supplying necessary content, assets, and information</li>
                            <li>Ensuring all provided materials are legally owned or licensed</li>
                            <li>Making payments according to agreed terms</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">6. Revisions and Changes</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The number of revision rounds will be specified in your project contract. Additional revisions or scope changes may incur extra charges and timeline adjustments.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">7. Warranties and Limitations</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            We warrant that our services will be performed professionally and competently. However:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li>We do not guarantee specific business results or outcomes</li>
                            <li>We are not liable for third-party service failures</li>
                            <li>Our liability is limited to the amount paid for services</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Either party may terminate a project with written notice. In case of termination, payment is due for all work completed up to the termination date.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            These Terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            For questions about these Terms of Service, please contact us:
                        </p>
                        <div className="mt-4 p-6 bg-white/5 rounded-xl border border-white/10">
                            <p className="text-foreground">BuildIQ</p>
                            <p className="text-muted-foreground">Oxford, United Kingdom</p>
                            <p className="text-muted-foreground">Email: <a href="mailto:enquiry@buildiq.org" className="text-primary hover:underline">enquiry@buildiq.org</a></p>
                            <p className="text-muted-foreground">Phone: +44 (0) 73 0834 3820</p>
                        </div>
                    </section>
                </article>
            </div>

            <Footer />
        </main>
    );
}
