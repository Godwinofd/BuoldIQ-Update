"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote:
            "BuildIQ transformed our online presence. The new site is faster, looks incredible, and our conversion rate has doubled since launch.",
        author: "Sarah Jenkins",
        role: "CEO, TechFlow",
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
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-secondary/10 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Client Success Stories
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-background border border-white/5 relative"
                        >
                            <Quote className="w-10 h-10 text-primary/20 mb-6" />
                            <p className="text-lg text-muted-foreground mb-8 italic">
                                "{testimonial.quote}"
                            </p>
                            <div>
                                <h4 className="font-bold text-foreground">
                                    {testimonial.author}
                                </h4>
                                <p className="text-sm text-primary">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
