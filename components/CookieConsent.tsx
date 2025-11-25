"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Cookie } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            // Show banner after a short delay
            setTimeout(() => setShowBanner(true), 1000);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setShowBanner(false);
    };

    const denyCookies = () => {
        localStorage.setItem("cookieConsent", "denied");
        setShowBanner(false);
    };

    return (
        <AnimatePresence>
            {showBanner && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                >
                    <div className="container mx-auto max-w-6xl">
                        <div className="relative bg-background/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8">
                            {/* Close button */}
                            <button
                                onClick={denyCookies}
                                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                                {/* Icon */}
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Cookie className="w-6 h-6 text-primary" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-grow">
                                    <h3 className="text-lg font-bold mb-2">We Value Your Privacy</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
                                        By clicking "Accept", you consent to our use of cookies.
                                        {" "}
                                        <Link href="/cookies" className="text-primary hover:underline">
                                            Learn more
                                        </Link>
                                    </p>
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                                    <button
                                        onClick={denyCookies}
                                        className="px-6 py-3 rounded-full border border-white/10 text-muted-foreground hover:bg-white/5 transition-all font-medium text-sm whitespace-nowrap"
                                    >
                                        Decline
                                    </button>
                                    <button
                                        onClick={acceptCookies}
                                        className="px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-bold text-sm whitespace-nowrap"
                                    >
                                        Accept Cookies
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
