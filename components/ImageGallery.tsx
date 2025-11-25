"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import Image from "next/image";

interface ImageGalleryProps {
    images: { src: string; alt: string }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setIsLightboxOpen(true);
    };

    return (
        <>
            {/* Main Display */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                    >
                        {/* Fallback if src is empty/placeholder */}
                        {images[currentIndex].src ? (
                            <Image
                                src={images[currentIndex].src}
                                alt={images[currentIndex].alt}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-neutral-600">
                                {images[currentIndex].alt}
                            </div>
                        )}

                    </motion.div>
                </AnimatePresence>

                {/* Overlay Controls */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100">
                    <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="p-2 rounded-full bg-black/50 text-white hover:bg-primary hover:text-white transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={() => openLightbox(currentIndex)}
                        className="absolute inset-0 w-full h-full flex items-center justify-center cursor-zoom-in"
                        aria-label="Open Lightbox"
                    >
                        <div className="bg-black/50 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                            <ZoomIn className="w-6 h-6 text-white" />
                        </div>
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="p-2 rounded-full bg-black/50 text-white hover:bg-primary hover:text-white transition-colors z-10"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                            className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? "bg-primary w-4" : "bg-white/50 hover:bg-white"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <button
                            onClick={() => setIsLightboxOpen(false)}
                            className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors z-50"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-primary transition-colors z-50"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>

                        <div
                            className="relative w-full max-w-6xl aspect-video md:aspect-auto md:h-[80vh] rounded-lg overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {images[currentIndex].src ? (
                                <Image
                                    src={images[currentIndex].src}
                                    alt={images[currentIndex].alt}
                                    fill
                                    className="object-contain"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-neutral-500">
                                    {images[currentIndex].alt}
                                </div>
                            )}
                        </div>

                        <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-primary transition-colors z-50"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>

                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 font-medium">
                            {currentIndex + 1} / {images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
