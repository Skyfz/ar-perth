import { Reveal } from "@/components/ui/Reveal"
import { ArrowRight, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-white pt-24 pb-8 px-6 md:px-12 xl:px-24 rounded-t-[40px] shadow-[0_-10px_60px_rgba(0,0,0,0.03)] relative mt-24">
            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">

                    <div className="space-y-6">
                        <h4 className="text-lg font-medium text-gray-400">Partner With Us</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="text-2xl font-normal hover:text-gray-500 transition-colors tracking-tight block">
                                    Landowners
                                </a>
                                <span className="text-sm text-gray-400">Unlock your land's value</span>
                            </li>
                            <li>
                                <a href="#" className="text-2xl font-normal hover:text-gray-500 transition-colors tracking-tight block">
                                    Investors
                                </a>
                                <span className="text-sm text-gray-400">Request Investment Mandate</span>
                            </li>
                            <li>
                                <a href="#" className="text-2xl font-normal hover:text-gray-500 transition-colors tracking-tight block">
                                    Government
                                </a>
                                <span className="text-sm text-gray-400">Affordable Housing Liaison</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-lg font-medium text-gray-400">Company</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="text-2xl font-normal hover:text-gray-500 transition-colors tracking-tight">
                                    About AR Perth
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-2xl font-normal hover:text-gray-500 transition-colors tracking-tight">
                                    Our Projects
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-2xl font-normal hover:text-gray-500 transition-colors tracking-tight">
                                    News & Insights
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-lg font-medium text-gray-400">Locations</h4>
                        <ul className="space-y-4">
                            <li>
                                <span className="text-2xl font-normal tracking-tight block">
                                    Head Office
                                </span>
                                <span className="text-gray-500">Perth, Western Australia</span>
                            </li>
                            <li>
                                <span className="text-2xl font-normal tracking-tight block">
                                    Global HQ
                                </span>
                                <span className="text-gray-500">Alleyroads (South Africa)</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-lg font-medium text-gray-400">Get in Touch</h4>

                        <div className="space-y-2">
                            <span className="text-sm text-gray-400 block">Cell number</span>
                            <a href="tel:+61447898962" className="text-2xl font-normal hover:text-gray-500 transition-colors tracking-tight block">
                                +61 447 898 962
                            </a>
                        </div>

                        <button className="w-full bg-[#17191F] text-white py-4 rounded-xl hover:bg-gray-800 transition-colors font-medium text-left px-6 flex justify-between items-center group">
                            Contact Form
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </button>
                        <div className="relative">
                            <input type="email" placeholder="Subscribe to Newsletter" className="w-full bg-[#F6F7FA] py-4 pl-6 pr-14 rounded-xl outline-none focus:ring-1 focus:ring-black transition-all" />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-black/50 hover:text-black">
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                </div>

                <div className="h-px w-full bg-gray-100 mb-8"></div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 font-medium">
                    <p>© 2025 AR Perth. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-black decoration-1">Privacy Policy</a>
                        <a href="#" className="hover:text-black decoration-1">Terms of Service</a>
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 bg-[#F6F7FA] rounded-full flex items-center justify-center hover:bg-[#17191F] hover:text-white transition-all duration-300">
                            <Facebook className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-[#F6F7FA] rounded-full flex items-center justify-center hover:bg-[#17191F] hover:text-white transition-all duration-300">
                            <Instagram className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-[#F6F7FA] rounded-full flex items-center justify-center hover:bg-[#17191F] hover:text-white transition-all duration-300">
                            <Linkedin className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Logo */}
            <div className="w-full flex justify-center mt-12 pb-4 opacity-[0.04] pointer-events-none select-none">
                <h1 className="text-[15vw] font-bold leading-none tracking-tighter">
                    AR PERTH
                </h1>
            </div>
        </footer>
    )
}
