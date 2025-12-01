import { Reveal } from "@/components/ui/Reveal"
import { GlassCard } from "@/components/ui/GlassCard"
import { ArrowUpRight } from "lucide-react"

export function InvestmentSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="px-6 md:px-12 xl:px-24 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <Reveal>
                        <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-[#17191F] mb-6">
                            Unlocking Capital <br />
                            <span className="text-gray-400">for Housing</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            We are the "innovative technological infrastructure" required to deploy capital effectively.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">1</div>
                                <div>
                                    <h4 className="text-lg font-medium text-black">Commercial Real Estate</h4>
                                    <p className="text-gray-500">Large-scale BTR precincts designed for long-term yield.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">2</div>
                                <div>
                                    <h4 className="text-lg font-medium text-black">Specialist Accommodation</h4>
                                    <p className="text-gray-500">Student housing and community housing projects.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">3</div>
                                <div>
                                    <h4 className="text-lg font-medium text-black">Sustainability</h4>
                                    <p className="text-gray-500">Green Star rated projects qualifying for Green Financing.</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <GlassCard className="h-full bg-white border-gray-200 shadow-xl p-8 md:p-12">
                            <h3 className="text-2xl font-medium text-black mb-8">The "Impact Investment" Opportunity</h3>

                            <div className="space-y-8">
                                <div className="group cursor-pointer">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="text-lg font-medium text-gray-800 group-hover:text-black transition-colors">Risk-Adjusted Returns</h4>
                                        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                                    </div>
                                    <p className="text-gray-500 text-sm">A stable yield model backed by rental income.</p>
                                    <div className="h-px w-full bg-gray-100 mt-4 group-hover:bg-black/10 transition-colors"></div>
                                </div>

                                <div className="group cursor-pointer">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="text-lg font-medium text-gray-800 group-hover:text-black transition-colors">Measurable Social Impact</h4>
                                        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                                    </div>
                                    <p className="text-gray-500 text-sm">Tracking metrics on housing affordability and tenant stability.</p>
                                    <div className="h-px w-full bg-gray-100 mt-4 group-hover:bg-black/10 transition-colors"></div>
                                </div>

                                <div className="group cursor-pointer">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="text-lg font-medium text-gray-800 group-hover:text-black transition-colors">The "Patient Capital" Partner</h4>
                                        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                                    </div>
                                    <p className="text-gray-500 text-sm">Long-term thinking for funds benefiting members' communities.</p>
                                    <div className="h-px w-full bg-gray-100 mt-4 group-hover:bg-black/10 transition-colors"></div>
                                </div>
                            </div>
                        </GlassCard>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
