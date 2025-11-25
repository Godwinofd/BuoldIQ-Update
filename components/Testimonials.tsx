"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        quote:
            "BuildIQ transformed our online presence. The new site is faster, looks incredible, and our conversion rate has doubled since launch.",
        author: "Sarah Jenkins",
        role: "CEO, TechFlow",
    },
    {
        quote:
            "Working with BuildIQ was a game-changer for our martial arts academy. They delivered a stunning website that perfectly captures our brand's energy and has significantly increased our class bookings.",
        author: "Master Ken Okonkwo",
        role: "Owner, KO MartialartsUnit",
    },
    {
        quote:
            "Professional, efficient, and incredibly talented. They understood our vision immediately and delivered beyond our expectations.",
        author: "Michael Chang",
        role: "Founder, FitLife Gym",
    },
    {
        quote:
            "The best agency we've worked with. The attention to detail and the quality of the code is unmatched.",
        author: "Emma Thompson",
        role: "Marketing Director, ArtSpace",
    },
    {
        quote:
            "BuildIQ didn't just build us a website—they built us a digital experience that our customers love. Our online sales have tripled since the redesign.",
        author: "David Martinez",
        role: "Co-Founder, Urban Threads",
    },
    {
        quote:
            "From concept to launch, BuildIQ exceeded every expectation. Their expertise in both design and development is truly world-class.",
        author: "Lisa Chen",
        role: "Director of Digital, Wellness Co.",
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const paginate = (newDirection: number) => {
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = testimonials.length - 3;
            if (nextIndex > testimonials.length - 3) nextIndex = 0;
            return nextIndex;
        });
    };

    const paginateMobile = (newDirection: number) => {
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = testimonials.length - 1;
            if (nextIndex >= testimonials.length) nextIndex = 0;
            return nextIndex;
        });
    };

    return (
        <section className="py-24 bg-secondary/10 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Client Success Stories
                    </h2>
                </div>

                {/* Desktop: Show 3 cards */}
                <div className="hidden md:block">
                    <div className="relative min-h-[400px]">
                        <div className="grid grid-cols-3 gap-8">
                            {[0, 1, 2].map((offset) => {
                                const index = currentIndex + offset;
                                const testimonial = testimonials[index];

                                return (
                                    <motion.div
                                        key={`${currentIndex}-${offset}`}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: offset * 0.1
                                        }}
                                        className="p-8 rounded-2xl bg-background border border-white/5 relative flex flex-col"
                                    >
                                        <Quote className="w-10 h-10 text-primary/20 mb-6 flex-shrink-0" />
                                        <p className="text-lg text-muted-foreground mb-8 italic flex-grow">
                                            "{testimonial.quote}"
                                        </p>
                                        <div className="flex-shrink-0">
                                            <h4 className="font-bold text-foreground">
                                                {testimonial.author}
                                            </h4>
                                            <p className="text-sm text-primary">{testimonial.role}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Mobile: Show 1 card */}
                <div className="md:hidden">
                    <div className="relative min-h-[350px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="p-8 rounded-2xl bg-background border border-white/5 relative flex flex-col"
                            >
                                <Quote className="w-10 h-10 text-primary/20 mb-6 flex-shrink-0" />
                                <p className="text-lg text-muted-foreground mb-8 italic flex-grow">
                                    "{testimonials[currentIndex].quote}"
                                </p>
                                <div className="flex-shrink-0">
                                    <h4 className="font-bold text-foreground">
                                        {testimonials[currentIndex].author}
                                    </h4>
                                    <p className="text-sm text-primary">
                                        {testimonials[currentIndex].role}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-center gap-4 mt-12">
                    <button
                        onClick={() => {
                            if (window.innerWidth >= 768) {
                                paginate(-1);
                            } else {
                                paginateMobile(-1);
                            }
                        }}
                        className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 transition-all"
                        aria-label="Previous testimonials"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="flex gap-2">
                        {testimonials.map((_, idx) => {
                            const isActive = window.innerWidth >= 768
                                ? idx >= currentIndex && idx < currentIndex + 3
                                : idx === currentIndex;

                            return (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-2 rounded-full transition-all ${isActive
                                            ? "w-8 bg-primary"
                                            : "w-2 bg-white/20 hover:bg-white/40"
                                        }`}
                                    aria-label={`Go to testimonial ${idx + 1}`}
                                />
                            );
                        })}
                    </div>

                    <button
                        onClick={() => {
                            if (window.innerWidth >= 768) {
                                paginate(1);
                            } else {
                                paginateMobile(1);
                            }
                        }}
                        className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 transition-all"
                        aria-label="Next testimonials"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
