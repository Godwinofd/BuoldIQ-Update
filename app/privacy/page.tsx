import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
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
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Privacy Policy</h1>
                    <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            BuildIQ ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                        <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            We may collect personal information that you voluntarily provide to us when you:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                            <li>Fill out our contact form</li>
                            <li>Subscribe to our newsletter</li>
                            <li>Request a quote or consultation</li>
                            <li>Communicate with us via email or other channels</li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed">
                            This information may include your name, email address, business name, phone number, and any other details you choose to provide.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li>Respond to your inquiries and provide customer support</li>
                            <li>Send you information about our services</li>
                            <li>Improve our website and services</li>
                            <li>Comply with legal obligations</li>
                            <li>Prevent fraud and enhance security</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">4. Data Storage and Security</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely using industry-standard encryption and security protocols.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">5. Cookies and Tracking</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences. For more information, please see our Cookie Policy.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">6. Third-Party Services</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We may use third-party service providers to help us operate our website and deliver our services. These providers have access to your personal information only to perform specific tasks on our behalf and are obligated to protect your information.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Under GDPR and UK data protection laws, you have the right to:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li>Access your personal data</li>
                            <li>Correct inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Object to processing of your data</li>
                            <li>Request data portability</li>
                            <li>Withdraw consent at any time</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
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
