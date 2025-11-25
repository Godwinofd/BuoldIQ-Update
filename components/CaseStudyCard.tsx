"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CaseStudyCardProps {
    title: string;
    category: string;
    description: string;
    href?: string;
    isPlaceholder?: boolean;
    image?: string;
    delay?: number;
}

export default function CaseStudyCard({
    title,
    category,
    description,
    href,
    isPlaceholder = false,
    image,
    delay = 0,
}: CaseStudyCardProps) {
    const CardContent = () => (
        <div className="h-full flex flex-col">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-neutral-900 border border-white/10 mb-6 group-hover:border-primary/50 transition-colors">
                {isPlaceholder ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent">
                        <span className="text-muted-foreground/50 font-medium">Coming Soon</span>
                    </div>
                ) : image ? (
                    <>
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </>
                ) : (
                    <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-neutral-600">
                        <span className="text-sm">Project Image</span>
                    </div>
                )}
            </div>

            <div className="flex-grow">
                <div className="text-xs font-bold text-primary tracking-wider mb-2 uppercase">
                    {category}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                </p>
            </div>

            {!isPlaceholder && (
                <div className="mt-6 flex items-center text-sm font-bold text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    View Case Study <ArrowRight className="w-4 h-4 ml-2" />
                </div>
            )}
        </div>
    );

    const containerClasses = cn(
        "group block p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full",
        isPlaceholder && "opacity-75 hover:opacity-100 cursor-default"
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="h-full"
        >
            {href ? (
                <Link href={href} className={containerClasses}>
                    <CardContent />
                </Link>
            ) : (
                <div className={containerClasses}>
                    <CardContent />
                </div>
            )}
        </motion.div>
    );
}
