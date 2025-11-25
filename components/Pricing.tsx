"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Starter",
        price: "£499",
        description: "Perfect for small businesses and personal brands.",
        features: [
            "Custom 5-Page Website",
            "Mobile Responsive Design",
            "Basic SEO Optimization",
            "Contact Form Integration",
            "1 Month Support",
        ],
        popular: false,
    },
    {
        name: "Business",
        price: "£1,499",
        description: "For growing companies that need more power.",
        features: [
            "Up to 10 Pages",
            "CMS Integration (Sanity/Contentful)",
            "Advanced SEO & Analytics",
            "Blog / News Section",
            "Social Media Integration",
            "3 Months Support",
        ],
        popular: true,
    },
    {
        name: "Premium",
        price: "£3,000",
        description: "Full-scale digital transformation.",
        features: [
            "Unlimited Pages",
            "E-commerce Functionality",
            "Custom Web App Features",
            "AI Chatbot Integration",
            "Priority Support (24/7)",
            "6 Months Support",
        ],
        popular: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-background relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Transparent Pricing
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        No hidden fees. Choose the package that fits your goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "relative p-8 rounded-2xl border flex flex-col",
                                plan.popular
                                    ? "bg-white/5 border-primary/50 shadow-2xl shadow-primary/10"
                                    : "bg-transparent border-white/10"
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-sm text-muted-foreground">From</span>
                                    <span className="text-4xl font-bold font-heading">
                                        {plan.price}
                                    </span>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    {plan.description}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm">
                                        <Check className="w-5 h-5 text-primary shrink-0" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="#contact"
                                className={cn(
                                    "w-full py-4 rounded-lg font-bold text-center transition-all duration-300",
                                    plan.popular
                                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                        : "bg-white/5 text-foreground hover:bg-white/10 border border-white/10"
                                )}
                            >
                                Get Started
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
