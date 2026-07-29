"use client"

import { useState } from "react"
import { Header } from "@/components/landing/Header"
import { Hero } from "@/components/landing/Hero"
import { UrgencySection } from "@/components/landing/UrgencySection"
import { Features } from "@/components/landing/Features"
import { MembershipSection } from "@/components/landing/MembershipSection"
import { DevelopmentsSection } from "@/components/landing/DevelopmentsSection"
import { AboutSection } from "@/components/landing/AboutSection"
import { ModelSection } from "@/components/landing/ModelSection"
import { ConstructionSection } from "@/components/landing/ConstructionSection"
import { InvestmentSection } from "@/components/landing/InvestmentSection"
import { SustainabilitySection } from "@/components/landing/SustainabilitySection"
import { News } from "@/components/landing/News"
import { Footer } from "@/components/landing/Footer"
import { FAQ } from "@/components/landing/FAQ"
import { Testimonials } from "@/components/landing/Testimonials"
import { DynamicServices } from "@/components/landing/DynamicServices"
import { ImpactSection } from "@/components/landing/ImpactSection"
import { ContactModal } from "@/components/ui/ContactModal"
import { Toaster } from "sonner"

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const isDisabled = true

  if (isDisabled) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center font-sans p-6 selection:bg-white selection:text-black">
        <div className="max-w-md w-full space-y-8">
          <div className="flex items-center gap-4 pb-6 border-b border-[#333]">
            <svg height="22" viewBox="0 0 75 65" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37.5 0L75 65H0L37.5 0Z" fill="#FFFFFF" />
            </svg>
            <span className="h-5 w-[1px] bg-[#333]" />
            <span className="text-xs font-mono text-[#888] tracking-wide">402: DEPLOYMENT_DISABLED</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Deployment Disabled
            </h1>
            <p className="text-[#888] text-sm leading-relaxed">
              This deployment has been disabled. Please contact the administrator.
            </p>
          </div>

          <div className="p-4 rounded-md bg-[#0A0A0A] border border-[#222] text-xs font-mono text-[#888] space-y-2">
            <div className="flex justify-between">
              <span>ERROR CODE</span>
              <span className="text-white">DEPLOYMENT_DISABLED</span>
            </div>
            <div className="flex justify-between">
              <span>HOST</span>
              <span className="text-white">Vercel</span>
            </div>
          </div>

          <p className="text-[#666] text-xs leading-relaxed pt-2">
            If you believe this is an error or are the administrator of this deployment, please check your Vercel account dashboard or contact support.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#F6F7FA] overflow-x-hidden">
      <Header onOpenContact={() => setIsContactOpen(true)} />
      <div id="hero"><Hero onOpenContact={() => setIsContactOpen(true)} /></div>
      <div id="urgency"><UrgencySection /></div>
      <div id="features"><Features /></div>
      <div id="membership"><MembershipSection /></div>
      <div id="developments"><DevelopmentsSection /></div>
      <div id="impact"><ImpactSection /></div>
      <div id="about"><AboutSection /></div>
      <div id="model"><ModelSection /></div>
      <div id="construction"><ConstructionSection /></div>
      <div id="services"><DynamicServices /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="investment"><InvestmentSection /></div>
      <div id="sustainability"><SustainabilitySection /></div>
      <div id="faq"><FAQ /></div>
      <div id="news"><News /></div>
      <div id="contact"><Footer onOpenContact={() => setIsContactOpen(true)} /></div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <Toaster />
    </main>
  )
}
