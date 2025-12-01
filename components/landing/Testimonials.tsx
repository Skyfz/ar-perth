"use client"

import { useState } from "react"
import { Reveal } from "@/components/ui/Reveal"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
    {
        quote: "We felt very well taken care of from the start. Everything was perfect for us. The advice and, of course, the achieved selling price.",
        author: "Katharina P.",
        date: "June 2025",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100"
    },
    {
        quote: "Professional, fast and completely transparent. A real estate agency that delivers on its promises. Would gladly use them again anytime.",
        author: "Thomas K.",
        date: "May 2025",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100"
    },
    {
        quote: "Excellent market knowledge and very personal support. The sale of our villa went smoothly.",
        author: "Michael B.",
        date: "April 2025",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100"
    },
    {
        quote: "The team at AR Perth understood exactly what we needed. Their attention to detail is unmatched.",
        author: "Sarah L.",
        date: "July 2025",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=400",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100"
    }
]

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        if (currentIndex < testimonials.length - 1) {
            setCurrentIndex(prev => prev + 1)
        }
    }

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1)
        }
    }

    return (
        <section className="py-24 bg-[#F6F7FA] overflow-hidden select-none relative" id="testimonials">
            <div className="px-6 md:px-12 xl:px-24 max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <Reveal>
                        <h2 className="text-4xl md:text-[48px] leading-tight font-normal text-[#17191F] tracking-[-0.04em]">
                            Why we are the right <br />
                            <span className="text-gray-400">partner for you:</span>
                        </h2>
                    </Reveal>

                    <Reveal delay={100} className="flex gap-4">
                        <button
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            className="w-14 h-14 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-[#17191F] hover:text-white hover:border-[#17191F] transition-all duration-300 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            disabled={currentIndex === testimonials.length - 1}
                            className="w-14 h-14 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-[#17191F] hover:text-white hover:border-[#17191F] transition-all duration-300 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </Reveal>
                </div>

                <Reveal delay={200} className="overflow-visible">
                    <div
                        className="flex gap-8 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                        style={{ transform: `translateX(-${currentIndex * (100 + 32 / 16)}%)` }} // approximate calculation, better with fixed widths or refs
                    >
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="min-w-[90vw] md:min-w-[527px] flex flex-col group hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-shadow bg-white h-[345px] border-gray-200 border rounded-[24px] p-8 relative shadow-[0_4px_20px_rgba(0,0,0,0.02)] justify-between shrink-0"
                            >
                                <p className="text-[20px] leading-[1.3] text-[#17191F] tracking-[-0.01em] max-w-sm">
                                    "{item.quote}"
                                </p>

                                <div className="absolute bottom-[26px] right-[18px] w-[200px] h-[120px] md:w-[280px] md:h-[150px]">
                                    <img src={item.image} className="w-full h-full object-cover rounded-xl shadow-md" alt="Property" />
                                    <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur border border-white/50 rounded-full pl-2 pr-5 py-2 flex items-center gap-3 shadow-lg">
                                        <img src={item.avatar} className="w-10 h-10 rounded-full object-cover" alt={item.author} />
                                        <div className="flex flex-col">
                                            <span className="text-black text-sm font-medium">
                                                {item.author}
                                            </span>
                                            <span className="text-gray-400 text-xs">{item.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
