import { Reveal } from "@/components/ui/Reveal"
import { GlassCard } from "@/components/ui/GlassCard"

export function ConstructionSection() {
    return (
        <section className="py-24 px-6 md:px-12 xl:px-24 max-w-[1400px] mx-auto relative">
            <div className="mb-24 text-center">
                <Reveal>
                    <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-[#17191F] mb-4">
                        Overcoming the "Speed Limit" <br />
                        <span className="text-gray-400">of Construction</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Traditional builds take 60% longer than a decade ago. We address this through Advanced Construction Methodology.
                    </p>
                </Reveal>
            </div>

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-0 md:left-[50%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-emerald-400 via-blue-500 to-orange-500 hidden md:block opacity-30"></div>

                {/* Step 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-32 relative">
                    <Reveal className="relative pl-8 md:pl-0 md:text-right md:pr-12">
                        <span className="text-5xl font-medium text-emerald-500/20 absolute -top-12 left-8 md:right-12 md:left-auto">01</span>
                        <h3 className="text-2xl font-medium text-[#17191F] mb-3 tracking-tight">3D Printing & Prefabrication</h3>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            By moving construction elements off-site, we reduce weather delays and reliance on on-site labor availability. This allows us to deliver projects in 18 months, not 28.
                        </p>
                    </Reveal>
                    <Reveal delay={200} className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-100 to-teal-50 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                        <GlassCard className="relative h-64 flex items-center justify-center bg-white">
                            <img
                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop"
                                className="w-full h-full object-cover rounded-xl opacity-90"
                                alt="3D Printing Construction"
                            />
                        </GlassCard>
                    </Reveal>
                </div>

                {/* Step 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-32 relative">
                    <Reveal className="relative group order-2 md:order-1">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-indigo-50 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                        <GlassCard className="relative h-64 flex items-center justify-center bg-white">
                            <img
                                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop"
                                className="w-full h-full object-cover rounded-xl opacity-90"
                                alt="Tech Planning"
                            />
                        </GlassCard>
                    </Reveal>
                    <Reveal delay={200} className="relative pl-8 md:pl-12 order-1 md:order-2">
                        <span className="text-5xl font-medium text-blue-500/20 absolute -top-12 left-8 md:left-12">02</span>
                        <h3 className="text-2xl font-medium text-[#17191F] mb-3 tracking-tight">Tech-First Planning</h3>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            We utilize advanced digital twins and project management automation to navigate planning approvals and zoning complexities efficiently.
                        </p>
                    </Reveal>
                </div>

                {/* Step 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center relative">
                    <Reveal className="relative pl-8 md:pl-0 md:text-right md:pr-12">
                        <span className="text-5xl font-medium text-orange-500/20 absolute -top-12 left-8 md:right-12 md:left-auto">03</span>
                        <h3 className="text-2xl font-medium text-[#17191F] mb-3 tracking-tight">Supply Chain Resilience</h3>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            Leveraging Alleyroads' global procurement network, we mitigate the material cost blowouts that have caused insolvency for over 2,300 construction companies.
                        </p>
                    </Reveal>
                    <Reveal delay={200} className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-100 to-amber-50 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                        <GlassCard className="relative h-64 flex items-center justify-center bg-white">
                            <img
                                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
                                className="w-full h-full object-cover rounded-xl opacity-90"
                                alt="Supply Chain"
                            />
                        </GlassCard>
                    </Reveal>
                </div>

            </div>
        </section>
    )
}
