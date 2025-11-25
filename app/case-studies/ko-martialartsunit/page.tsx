import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyHero from "@/components/CaseStudyHero";
import ImageGallery from "@/components/ImageGallery";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function KOMartialArtsUnitPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar />

            <CaseStudyHero
                title="Redefining Digital Presence for KO MartialartsUnit"
                category="Website Design & Development"
                summary="How we redesigned a martial arts brand into a high-conversion digital experience using Next.js and premium UI."
            />

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                        <div>
                            <h2 className="text-3xl font-bold font-heading mb-6">The Challenge</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                KO MartialartsUnit had a dated website that didn't reflect the premium quality of their training. The user experience was clunky, mobile performance was poor, and the booking process was confusing, leading to lost leads. They needed a modern, fast, and high-converting digital platform to attract new students and streamline operations.
                            </p>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                            <h3 className="text-xl font-bold mb-4 text-primary">Key Issues</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-muted-foreground">
                                    <span className="text-red-500 mt-1">✕</span> Slow page load times affecting SEO
                                </li>
                                <li className="flex items-start gap-3 text-muted-foreground">
                                    <span className="text-red-500 mt-1">✕</span> Confusing navigation structure
                                </li>
                                <li className="flex items-start gap-3 text-muted-foreground">
                                    <span className="text-red-500 mt-1">✕</span> Lack of mobile responsiveness
                                </li>
                                <li className="flex items-start gap-3 text-muted-foreground">
                                    <span className="text-red-500 mt-1">✕</span> Low conversion on class bookings
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mb-24">
                        <h2 className="text-3xl font-bold font-heading mb-8">The Approach</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-6 bg-secondary/20 rounded-xl border border-white/5">
                                <h3 className="text-xl font-bold mb-3">UX Strategy</h3>
                                <p className="text-muted-foreground text-sm">
                                    We mapped out user journeys for different personas (parents, adult students, fighters) to ensure relevant information was easily accessible.
                                </p>
                            </div>
                            <div className="p-6 bg-secondary/20 rounded-xl border border-white/5">
                                <h3 className="text-xl font-bold mb-3">Modern Tech Stack</h3>
                                <p className="text-muted-foreground text-sm">
                                    Leveraging Next.js 14 for server-side rendering and speed, coupled with Tailwind CSS for a bespoke, responsive design system.
                                </p>
                            </div>
                            <div className="p-6 bg-secondary/20 rounded-xl border border-white/5">
                                <h3 className="text-xl font-bold mb-3">Conversion Focus</h3>
                                <p className="text-muted-foreground text-sm">
                                    Strategic placement of CTAs and a simplified booking flow to reduce friction and increase class sign-ups.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
                        <div className="order-2 lg:order-1">
                            <ImageGallery
                                images={[
                                    { src: "/images/ko-case-study.jpg", alt: "KO MartialartsUnit Homepage Redesign" },
                                    { src: "/images/ko-case-study-2.jpg", alt: "Mobile Responsive View" },
                                    { src: "/images/ko-case-study-3.jpg", alt: "Class Booking Interface" },
                                    { src: "/images/ko-case-study-4.jpg", alt: "Dark Mode Aesthetic" },
                                    { src: "/images/ko-case-study-5.jpg", alt: "Dark Mode Aesthetic" },
                                ]}
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl font-bold font-heading mb-6">The Solution</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                                We delivered a visually stunning, dark-mode aesthetic website that captures the energy and discipline of martial arts. The new site features smooth animations, clear class schedules, and an integrated booking system.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                The mobile-first design ensures that users can easily book classes on the go, while the optimized performance keeps bounce rates low.
                            </p>
                        </div>
                    </div>

                    <div className="bg-primary/10 rounded-3xl p-12 border border-primary/20 mb-24">
                        <h2 className="text-3xl font-bold font-heading mb-8 text-center">The Outcome</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">40%</div>
                                <p className="text-muted-foreground">Faster Load Times</p>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">25%</div>
                                <p className="text-muted-foreground">Increase in Bookings</p>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
                                <p className="text-muted-foreground">Mobile Optimized</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-24">
                        <h2 className="text-3xl font-bold font-heading mb-8">Project Highlights</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {["Next.js 14 App Router", "Framer Motion Animations", "Responsive Design", "SEO Optimization", "Custom Booking Flow", "Performance Tuning", "Dark Mode UI", "Content Strategy"].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 p-4 bg-white/5 rounded-lg border border-white/5">
                                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                    <span className="text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center bg-secondary/30 rounded-3xl p-12 border border-white/10">
                        <h2 className="text-3xl font-bold font-heading mb-6">Ready to transform your digital presence?</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                            Let's build something extraordinary together.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors"
                        >
                            Start a Project <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
