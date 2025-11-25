"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CaseStudy() {
    return (
        <section id="work" className="py-24 bg-secondary/30 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                            {/* Placeholder for the actual image */}
                            <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-neutral-600">
                                <span className="text-lg">KO MartialartsUnit Case Study Image</span>
                            </div>
                            {/* 
              <Image
                src="/images/ko-case-study.jpg"
                alt="KO MartialartsUnit Website Redesign"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              */}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider mb-6">
                            FEATURED PROJECT
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                            Redefining Digital Presence for <br />
                            <span className="text-primary">KO MartialartsUnit</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            How we redesigned a martial arts brand into a high-conversion digital
                            experience using Next.js and premium UI. We improved load times by
                            40% and increased class bookings by 25% within the first month.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            {["Next.js 14", "Tailwind CSS", "Framer Motion", "Booking System"].map((tag) => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-muted-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <Link
                            href="#"
                            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300 group"
                        >
                            View Case Study
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
