"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface CaseStudyHeroProps {
    title: string;
    category: string;
    summary: string;
}

export default function CaseStudyHero({ title, category, summary }: CaseStudyHeroProps) {
    return (
        <section className="pt-32 pb-16 bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 -z-10" />
            <div className="container mx-auto px-6">
                <Link
                    href="/case-studies"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Case Studies
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider mb-6 uppercase">
                        {category}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight">
                        {title}
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                        {summary}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
