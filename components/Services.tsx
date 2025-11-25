"use client";

import { motion } from "framer-motion";
import { Palette, Code, Bot, Rocket } from "lucide-react";

const services = [
    {
        icon: <Palette className="w-8 h-8" />,
        title: "Web Design",
        description:
            "Stunning, user-centric designs that align with your brand identity and drive engagement.",
    },
    {
        icon: <Code className="w-8 h-8" />,
        title: "Web Development",
        description:
            "High-performance Next.js applications built for speed, SEO, and scalability.",
    },
    {
        icon: <Bot className="w-8 h-8" />,
        title: "AI Automation",
        description:
            "Streamline operations with custom AI solutions, chatbots, and workflow automation.",
    },
    {
        icon: <Rocket className="w-8 h-8" />,
        title: "Branding & Strategy",
        description:
            "Comprehensive digital strategies to position your brand as a market leader.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Our Expertise
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We combine creativity with technical excellence to deliver digital
                        products that stand out.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300"
                        >
                            <div className="mb-6 text-primary bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
