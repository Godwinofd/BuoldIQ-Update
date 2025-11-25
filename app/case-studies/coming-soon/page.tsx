import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ComingSoonPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
            <Navbar />

            <section className="flex-grow flex items-center justify-center py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10" />
                <div className="container mx-auto px-6 text-center">
                    <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-muted-foreground text-sm font-medium mb-8">
                        Work in Progress
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                        Case Study <span className="text-primary">Coming Soon</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                        We are currently preparing the detailed case study for this project.
                        Check back soon to see how we delivered exceptional results.
                    </p>

                    <Link
                        href="/case-studies"
                        className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        View Other Case Studies
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
