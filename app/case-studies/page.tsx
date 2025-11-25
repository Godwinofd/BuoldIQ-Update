import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";
import { motion } from "framer-motion";

export default function CaseStudiesPage() {
    const websiteProjects = [
        {
            title: "KO MartialartsUnit",
            category: "Website Design & Development",
            description: "A high-conversion digital experience for a martial arts brand.",
            href: "/case-studies/ko-martialartsunit",
            image: "/images/ko-case-study.jpg",
        },
        {
            title: "Project Coming Soon",
            category: "Website Design & Development",
            description: "This case study is currently being prepared.",
            href: "/case-studies/coming-soon",
            isPlaceholder: true,
        },
        {
            title: "Project Coming Soon",
            category: "Website Design & Development",
            description: "This case study is currently being prepared.",
            href: "/case-studies/coming-soon",
            isPlaceholder: true,
        },
    ];

    const uiUxProjects = [
        {
            title: "Project Coming Soon",
            category: "UI/UX Design",
            description: "This case study is currently being prepared.",
            href: "/case-studies/coming-soon",
            isPlaceholder: true,
        },
        {
            title: "Project Coming Soon",
            category: "UI/UX Design",
            description: "This case study is currently being prepared.",
            href: "/case-studies/coming-soon",
            isPlaceholder: true,
        },
    ];

    const brandProjects = [
        {
            title: "Project Coming Soon",
            category: "Brand Design",
            description: "This case study is currently being prepared.",
            href: "/case-studies/coming-soon",
            isPlaceholder: true,
        },
        {
            title: "Project Coming Soon",
            category: "Brand Design",
            description: "This case study is currently being prepared.",
            href: "/case-studies/coming-soon",
            isPlaceholder: true,
        },
    ];

    const aiProjects = [
        {
            title: "Project Coming Soon",
            category: "AI Automation",
            description: "This case study is currently being prepared.",
            href: "/case-studies/coming-soon",
            isPlaceholder: true,
        },
        {
            title: "Project Coming Soon",
            category: "AI Automation",
            description: "This case study is currently being prepared.",
            href: "/case-studies/coming-soon",
            isPlaceholder: true,
        },
    ];

    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar />

            {/* Intro Section */}
            <section className="pt-32 pb-16 bg-background relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10" />
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                        Case Studies
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Explore our work across Websites, UI/UX, Branding, and AI Automations.
                    </p>
                </div>
            </section>

            <CaseStudiesGrid title="Websites" items={websiteProjects} />
            <CaseStudiesGrid title="UI/UX Design" items={uiUxProjects} />
            <CaseStudiesGrid title="Brand Design" items={brandProjects} />
            <CaseStudiesGrid title="AI Automation" items={aiProjects} />

            <Footer />
        </main>
    );
}
