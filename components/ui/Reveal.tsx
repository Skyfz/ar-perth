"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface RevealProps {
    children: React.ReactNode
    className?: string
    delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add("visible")
                        }, delay)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [delay])

    return (
        <div ref={ref} className={cn("reveal-element", className)}>
            {children}
        </div>
    )
}
