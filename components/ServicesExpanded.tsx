"use client";

import { motion } from "framer-motion";
import { Palette, Code, Bot, Rocket, Layout, Monitor } from "lucide-react";

const services = [
    {
        icon: <Layout className="w-8 h-8" />,
        title: "Web Design & Next.js Development",
        description:
            "High-performance websites built with modern UX, fast Next.js architecture, and SEO-ready foundations to help UK businesses grow online.",
        benefits: [
            "Custom Next.js Website Builds",
            "Full Web Design & Development",
            "SEO-Optimised Architecture",
        ],
    },
    {
        icon: <Palette className="w-8 h-8" />,
        title: "UI/UX Design for Modern Brands",
        description:
            "Conversion-focused interfaces crafted through research, strategy, and clean visual design to improve user experience and engagement.",
        benefits: [
            "UX Research & User Journey Mapping",
            "Wireframing & Interactive Prototyping",
            "Design Systems & Component Libraries",
        ],
    },
    {
        icon: <Rocket className="w-8 h-8" />,
        title: "Brand Design & Visual Identity",
        description:
            "Distinct, professional branding that helps businesses stand out with memorable visuals, strong identity systems, and premium presentation.",
        benefits: [
            "Logo & Visual Identity Design",
            "Brand Guidelines & Typography Systems",
            "Digital & Print Asset Creation",
        ],
    },
    {
        icon: <Bot className="w-8 h-8" />,
        title: "AI Automation & Business Systems",
        description:
            "Custom AI-powered automations, chatbots, and workflow integrations to streamline operations and scale your business efficiently.",
        benefits: [
            "Custom AI Chatbots & Assistants",
            "End-to-End Workflow Automation",
            "API & System Integrations",
        ],
    },
];


export default function ServicesExpanded() {
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
                            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="mb-6 text-primary bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                {service.description}
                            </p>
                            <ul className="space-y-2">
                                {service.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-center text-xs text-muted-foreground/80">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
