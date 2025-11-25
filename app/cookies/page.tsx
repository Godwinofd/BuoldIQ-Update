import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CookiePolicyPage() {
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
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Cookie Policy</h1>
                    <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">1. What Are Cookies?</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            We use cookies for the following purposes:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                            <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                            <li><strong>Marketing Cookies:</strong> Track your activity to deliver relevant advertisements</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">3. Types of Cookies We Use</h2>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-3">3.1 Strictly Necessary Cookies</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                These cookies are essential for the website to function and cannot be disabled. They include cookies that enable you to navigate the site and use its features.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-3">3.2 Performance Cookies</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                These cookies collect information about how visitors use our website, such as which pages are visited most often. This helps us improve the website's performance.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-3">3.3 Functionality Cookies</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                These cookies allow the website to remember choices you make (such as your language preference) and provide enhanced, personalized features.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">4. Third-Party Cookies</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            We may use third-party services that set cookies on your device. These include:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li>Google Analytics for website analytics</li>
                            <li>Social media platforms for sharing functionality</li>
                            <li>Marketing and advertising partners</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">5. Managing Cookies</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            You can control and manage cookies in several ways:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                            <li>Browser Settings: Most browsers allow you to refuse or accept cookies</li>
                            <li>Cookie Preferences: Use our cookie preference center (if available)</li>
                            <li>Third-Party Tools: Use browser extensions to manage cookies</li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed">
                            Please note that disabling certain cookies may affect the functionality of our website.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">6. Browser-Specific Instructions</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            To manage cookies in your browser:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                            <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                            <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                            <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">7. Updates to This Policy</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            If you have questions about our use of cookies, please contact us:
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
