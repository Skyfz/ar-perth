"use client"

import { useState, useEffect } from "react"
import { Reveal } from "@/components/ui/Reveal"
import { cn } from "@/lib/utils"

const services = [
    {
        text: "Build-to-Rent",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600"
    },
    {
        text: "Impact Housing",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600"
    },
    {
        text: "Sustainable Living",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600"
    }
]

export function DynamicServices() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const duration = 5000 // 5 seconds per slide
        const intervalTime = 50 // Update progress every 50ms
        const steps = duration / intervalTime

        let currentStep = 0

        const timer = setInterval(() => {
            currentStep++
            setProgress((currentStep / steps) * 100)

            if (currentStep >= steps) {
                currentStep = 0
                setProgress(0)
                setCurrentIndex((prev) => (prev + 1) % services.length)
            }
        }, intervalTime)

        return () => clearInterval(timer)
    }, [])

    return (
        <section className="max-w-[1400px] mx-auto px-4 md:px-12 xl:px-24 mb-32">
            <Reveal>
                <div className="relative h-[80vh] min-h-[600px] rounded-[40px] overflow-hidden shadow-2xl bg-gray-900">
                    {/* Background Images */}
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={cn(
                                "absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out",
                                index === currentIndex ? "opacity-100" : "opacity-0"
                            )}
                        >
                            <img
                                src={service.image}
                                className="w-full h-full object-cover opacity-80"
                                alt={service.text}
                            />
                        </div>
                    ))}

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
                        {/* Dynamic Text Container */}
                        <div className="relative h-[120px] md:h-[150px] w-full flex justify-center items-center overflow-hidden">
                            {services.map((service, index) => (
                                <h2
                                    key={index}
                                    className={cn(
                                        "absolute text-[8vw] md:text-[6rem] font-normal leading-none tracking-tighter mix-blend-overlay transition-all duration-1000 ease-in-out transform",
                                        index === currentIndex
                                            ? "opacity-100 translate-x-0"
                                            : index < currentIndex
                                                ? "opacity-0 -translate-x-10"
                                                : "opacity-0 translate-x-10"
                                    )}
                                >
                                    {service.text}
                                </h2>
                            ))}
                        </div>

                        {/* Progress Bar */}
                        <div className="absolute bottom-16 w-[240px] h-1 bg-white/20 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-white rounded-full transition-all duration-75 ease-linear"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    )
}
