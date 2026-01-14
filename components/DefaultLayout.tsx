"use client"

import { useState } from "react"
import { Header } from "@/components/landing/Header"
import { Footer } from "@/components/landing/Footer"
import { ContactModal } from "@/components/ui/ContactModal"
import { Toaster } from "sonner"

export function DefaultLayout({ children }: { children: React.ReactNode }) {
    const [isContactOpen, setIsContactOpen] = useState(false)

    return (
        <main className="flex min-h-screen flex-col bg-[#F6F7FA] overflow-x-hidden">
            <Header onOpenContact={() => setIsContactOpen(true)} />
            {/* Added top padding to account for fixed header */}
            <div className="pt-32">
                {children}
            </div>
            <Footer onOpenContact={() => setIsContactOpen(true)} />
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
            <Toaster />
        </main>
    )
}
