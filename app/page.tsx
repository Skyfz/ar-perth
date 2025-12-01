import { Header } from "@/components/landing/Header"
import { Hero } from "@/components/landing/Hero"
import { UrgencySection } from "@/components/landing/UrgencySection"
import { Features } from "@/components/landing/Features"
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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F6F7FA] overflow-x-hidden">
      <Header />
      <div id="hero"><Hero /></div>
      <div id="urgency"><UrgencySection /></div>
      <div id="features"><Features /></div>
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
      <div id="contact"><Footer /></div>
    </main>
  )
}
