"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
                >
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">
                        Premium Web Design & Development
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tight mb-6 leading-[1.1] px-4 sm:px-0"
                >
                    Websites Built to <br />
                    <span className="text-gradient-gold">Convert.</span> Designed to{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                        Impress.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 px-4 sm:px-0"
                >
                    We build modern, high-performance websites for brands that want to scale.
                    Blending architectural precision with digital innovation.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0"
                >
                    <Link
                        href="#work"
                        className="w-full sm:w-auto px-8 py-4 sm:py-4 min-h-[48px] bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
                    >
                        View Our Work
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="#contact"
                        className="w-full sm:w-auto px-8 py-4 sm:py-4 min-h-[48px] bg-white/5 text-foreground font-bold rounded-lg hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center gap-2"
                    >
                        Start a Project
                        <Code2 className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
