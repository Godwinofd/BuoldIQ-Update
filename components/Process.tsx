"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Discovery",
        description:
            "We dive deep into your business goals, target audience, and competitive landscape.",
    },
    {
        number: "02",
        title: "Design",
        description:
            "We create high-fidelity wireframes and interactive prototypes to visualize the end product.",
    },
    {
        number: "03",
        title: "Build",
        description:
            "We develop your site using clean, semantic code and the latest web technologies.",
    },
    {
        number: "04",
        title: "Deploy",
        description:
            "We handle the launch process, ensuring optimal performance and SEO configuration.",
    },
    {
        number: "05",
        title: "Support",
        description:
            "We provide ongoing maintenance and updates to keep your site running smoothly.",
    },
];

export default function Process() {
    return (
        <section id="process" className="py-24 bg-secondary/10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Our Process
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A proven methodology that guarantees results. From concept to launch,
                        we handle every detail.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-background md:bg-transparent p-6 md:p-0 rounded-xl border md:border-none border-white/10"
                            >
                                <div className="w-12 h-12 rounded-full bg-background border-2 border-white/10 flex items-center justify-center text-lg font-bold font-heading mb-6 mx-auto group-hover:border-primary group-hover:text-primary transition-colors duration-300 relative z-10">
                                    {step.number}
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
