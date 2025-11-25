"use client";

import Link from "next/link";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold font-heading tracking-tighter mb-6 block">
                            BUILD<span className="text-primary">IQ</span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm mb-8">
                            We build modern, high-performance websites for brands that want to
                            scale. Blending architectural precision with digital innovation.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                            >
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                            >
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                            >
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                            >
                                <Github className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="#services"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#work"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Work
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#process"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Process
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#pricing"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} BuildIQ Agency. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Designed & Built by BuildIQ
                    </p>
                </div>
            </div>
        </footer>
    );
}
