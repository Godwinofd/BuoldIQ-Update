"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-background relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                            Ready to Scale Your <br />
                            <span className="text-primary">Digital Presence?</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                            Let's discuss your project. Whether you need a complete redesign or a
                            new digital product, we're here to help.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email Us</p>
                                    <p className="text-lg font-bold">hello@buildiq.agency</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Call Us</p>
                                    <p className="text-lg font-bold">+44 (0) 20 1234 5678</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Visit Us</p>
                                    <p className="text-lg font-bold">London, United Kingdom</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 p-8 rounded-2xl border border-white/10"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">
                                    Business Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Your Company Ltd"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">
                                    Project Budget
                                </label>
                                <select defaultValue="" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground">
                                    <option value="" disabled>
                                        Select a range
                                    </option>
                                    <option value="small">£1k - £3k</option>
                                    <option value="medium">£3k - £10k</option>
                                    <option value="large">£10k+</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">
                                    Message
                                </label>
                                <textarea
                                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors min-h-[120px]"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                            >
                                Submit Project Request
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
