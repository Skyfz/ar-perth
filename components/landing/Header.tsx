"use client"

import { useState, useEffect } from "react"
import { Menu, ArrowRight, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface HeaderProps {
    onOpenContact?: () => void
}

export function Header({ onOpenContact }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false)

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [isOpen])

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <>
            {/* Main Navigation Bar */}
            {/* Main Navigation Bar */}
            <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
                <div className="pointer-events-auto glass-panel flex gap-3 rounded-full p-2 shadow-[0_8px_30px_rgba(0,0,0,0.04)] items-center justify-between min-w-[300px] md:min-w-fit md:px-3">
                    {/* Burger Trigger (Mobile Only) */}
                    <button
                        onClick={toggleMenu}
                        className="w-12 h-12 bg-white rounded-full flex md:hidden items-center justify-center hover:bg-gray-50 transition-colors group shadow-sm border border-gray-100"
                    >
                        <Menu className="w-5 h-5 text-black group-hover:scale-110 transition-transform" />
                    </button>

                    {/* Logo */}
                    <Link href="/" className="px-4 flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <img src="/logo.png" alt="AR Perth" className="h-12 w-auto" />
                        <span className="font-medium tracking-tight text-lg text-[#17191F]">AR Perth</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1 bg-white/50 rounded-full px-2 py-1 border border-white/50">
                        <a href="#about" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#17191F] hover:bg-white rounded-full transition-all">About</a>
                        <a href="#construction" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#17191F] hover:bg-white rounded-full transition-all">Projects</a>
                        <a href="#investment" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#17191F] hover:bg-white rounded-full transition-all">Investment</a>
                        <Link href="/venture-plans" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#17191F] hover:bg-white rounded-full transition-all">Designs</Link>
                        <a href="#news" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#17191F] hover:bg-white rounded-full transition-all">News</a>
                    </div>

                    {/* CTA with Casa Style Outline */}
                    <button
                        onClick={onOpenContact}
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] transition-transform duration-300 hover:scale-105 shadow-lg shadow-blue-900/20"
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e0f2fe_0%,#38bdf8_25%,#1457a8_50%,#1e3a8a_75%,#e0f2fe_100%)]"></span>
                        <span className="inline-flex h-full w-full items-center justify-center gap-2 rounded-full bg-[#17191F] px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition-all group-hover:bg-[#17191F]/90">
                            Contact Us
                            <ArrowRight className="w-4 h-4" />
                        </span>
                    </button>
                </div>
            </nav>

            {/* Full Screen Navigation Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-[#F6F7FA] z-[60] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                )}
            >
                <div className="absolute top-6 right-6 md:top-8 md:right-8">
                    <button
                        onClick={toggleMenu}
                        className="flex hover:scale-105 transition-transform bg-white w-14 h-14 rounded-full shadow-lg items-center justify-center border border-gray-100"
                    >
                        <X className="w-6 h-6 text-black" />
                    </button>
                </div>

                <div className="flex-1 flex items-center justify-center">
                    <div
                        className={cn(
                            "flex flex-col items-center gap-8 md:gap-10 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                            isOpen ? "translate-y-0" : "translate-y-20"
                        )}
                    >
                        <a href="#about" onClick={toggleMenu} className="text-4xl md:text-6xl font-medium tracking-tighter text-[#17191F] hover:text-gray-400 transition-colors">
                            About AR Perth
                        </a>
                        <a href="#construction" onClick={toggleMenu} className="text-4xl md:text-6xl font-medium tracking-tighter text-[#17191F] hover:text-gray-400 transition-colors">
                            Our Projects
                        </a>
                        <Link href="/venture-plans" onClick={toggleMenu} className="text-4xl md:text-6xl font-medium tracking-tighter text-[#17191F] hover:text-gray-400 transition-colors">
                            Designs Collection
                        </Link>
                        <a href="#investment" onClick={toggleMenu} className="text-4xl md:text-6xl font-medium tracking-tighter text-[#17191F] hover:text-gray-400 transition-colors">
                            Investment
                        </a>
                        <a href="#news" onClick={toggleMenu} className="text-4xl md:text-6xl font-medium tracking-tighter text-[#17191F] hover:text-gray-400 transition-colors">
                            News & Insights
                        </a>
                        <button
                            onClick={() => {
                                toggleMenu()
                                onOpenContact?.()
                            }}
                            className="text-4xl md:text-6xl font-medium tracking-tighter text-[#17191F] hover:text-gray-400 transition-colors"
                        >
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
