"use client";

import { motion } from "framer-motion";
import { Zap, Layout, Clock, BrainCircuit } from "lucide-react";

const features = [
    {
        icon: <BrainCircuit className="w-6 h-6" />,
        title: "Next.js Performance & Modern Tech",
        description:
            "We build fast, future-proof websites using Next.js 14, React Server Components, and scalable infrastructure.",
    },
    {
        icon: <Layout className="w-6 h-6" />,
        title: "Premium UI & Visual Craftsmanship",
        description:
            "Pixel-perfect interfaces with clean layout, premium typography, and high-converting user experience.",
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Fast Turnaround & Smooth Delivery",
        description:
            "Our refined workflow allows us to launch high-quality projects in weeks while maintaining exceptional quality.",
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "AI Integrations & Automation",
        description:
            "We implement custom AI tools, chatbots, and automations that streamline operations and improve customer experience.",
    },
];


export default function WhyBuildIQ() {
    return (
        <section className="py-24 bg-background relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                            Why UK Businesses <br />
                            Choose <span className="text-primary">BuildIQ</span>

                            {/* Hidden SEO text */}
                            <span className="sr-only">
                                BuildIQ is a UK web design, development, branding and AI automation agency trusted by modern businesses for high-performance digital solutions.
                            </span>
                        </h2>

                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            We build high-performance digital experiences that help UK businesses grow.
                            From premium web design and Next.js development to branding and AI automation,
                            our work blends design excellence with technical innovation.
                        </p>


                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex flex-col gap-3">
                                    <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                                        {feature.icon}
                                    </div>
                                    <h3 className="font-bold text-lg">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] rounded-2xl overflow-hidden border border-white/10 bg-secondary/20"
                    >
                        {/* Abstract visual representation of code/design */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 mix-blend-overlay" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-64 h-64 bg-primary/30 rounded-full blur-[100px] animate-pulse" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background to-transparent">
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="space-y-2 font-mono text-xs text-muted-foreground">
                                    <p><span className="text-purple-400">const</span> <span className="text-blue-400">result</span> = <span className="text-yellow-400">await</span> buildIQ.transform(<span className="text-green-400">"your-brand"</span>);</p>
                                    <p><span className="text-purple-400">if</span> (result.success) {"{"}</p>
                                    <p className="pl-4">scaleRevenue(<span className="text-orange-400">10x</span>);</p>
                                    <p>{"}"}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
