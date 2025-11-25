"use client";

import CaseStudyCard from "@/components/CaseStudyCard";

interface CaseStudiesGridProps {
    title: string;
    items: {
        title: string;
        category: string;
        description: string;
        href?: string;
        isPlaceholder?: boolean;
        image?: string;
    }[];
}

export default function CaseStudiesGrid({ title, items }: CaseStudiesGridProps) {
    return (
        <section className="py-12">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-bold font-heading mb-8 border-l-4 border-primary pl-4">
                    {title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <CaseStudyCard
                            key={index}
                            {...item}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
