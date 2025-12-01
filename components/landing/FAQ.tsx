"use client"

import { useState } from "react"
import { Reveal } from "@/components/ui/Reveal"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
    {
        question: "How does the Build-to-Rent model benefit tenants?",
        answer: "Our BTR model offers long-term tenure security, professional on-site management, and community-focused amenities. Unlike private rentals, you deal with a professional entity committed to maintaining the property."
    },
    {
        question: "What makes AR Perth's construction methods faster?",
        answer: "We utilize modular construction and prefabrication, moving up to 80% of the build process off-site. This reduces weather delays and allows for parallel site preparation and manufacturing, cutting delivery times by 40%."
    },
    {
        question: "Are these developments sustainable?",
        answer: "Yes. All our projects target 5-Star Green Star ratings. We integrate solar PV arrays, smart metering, and passive design principles to minimize carbon footprint and reduce utility costs for residents."
    },
    {
        question: "How can institutional investors partner with AR Perth?",
        answer: "We offer various partnership models, from joint ventures to forward-funding arrangements. Our focus is on creating stable, long-term yield through large-scale residential assets."
    }
]

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="py-24 px-6 md:px-12 xl:px-24 max-w-[1400px] mx-auto mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
                <Reveal>
                    <h2 className="text-4xl md:text-[48px] font-normal tracking-[-0.04em] leading-[1.1] text-[#17191F]">
                        Questions that you're not <br />
                        <span className="text-gray-400">the only one asking</span>
                    </h2>
                </Reveal>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <Reveal key={index} delay={index * 100}>
                            <div
                                className={cn(
                                    "bg-white rounded-[24px] border border-transparent transition-all duration-300 overflow-hidden",
                                    openIndex === index ? "shadow-[0_8px_30px_rgba(0,0,0,0.04)]" : ""
                                )}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex justify-between items-start text-left p-8 gap-4"
                                >
                                    <span className="text-xl font-medium tracking-tight text-[#17191F]">
                                        {faq.question}
                                    </span>
                                    <div
                                        className={cn(
                                            "p-3 rounded-full shrink-0 transition-colors duration-300",
                                            openIndex === index ? "bg-[#17191F] text-white" : "bg-[#F6F7FA] text-black"
                                        )}
                                    >
                                        <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", openIndex === index ? "rotate-180" : "")} />
                                    </div>
                                </button>
                                <div
                                    className={cn(
                                        "px-8 transition-all duration-300 ease-in-out overflow-hidden",
                                        openIndex === index ? "max-h-[200px] opacity-100 pb-8" : "max-h-0 opacity-0"
                                    )}
                                >
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
