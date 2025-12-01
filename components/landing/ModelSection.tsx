import { Reveal } from "@/components/ui/Reveal"
import { CheckCircle2 } from "lucide-react"

export function ModelSection() {
    return (
        <section className="py-24 bg-[#17191F] text-white">
            <div className="px-6 md:px-12 xl:px-24 max-w-[1400px] mx-auto">
                <Reveal>
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">The Model</h2>
                        <p className="text-xl text-gray-400 font-light">
                            Unlike the traditional "build-to-sell" model, AR Perth retains ownership. This institutional model allows us to control quality, create community, and stabilize supply.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* BTR Column */}
                    <Reveal delay={100} className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-colors">
                        <h3 className="text-2xl font-medium mb-6">Build-to-Rent (BTR)</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                                <div>
                                    <strong className="block text-white">Control Quality</strong>
                                    <span className="text-gray-400 text-sm">We build durable assets because we maintain them long-term.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                                <div>
                                    <strong className="block text-white">Create Community</strong>
                                    <span className="text-gray-400 text-sm">Co-working spaces, communal gardens, and shared fleets.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                                <div>
                                    <strong className="block text-white">Stabilize Supply</strong>
                                    <span className="text-gray-400 text-sm">Delivering housing at scale (hundreds of units) vs drip-feeding.</span>
                                </div>
                            </li>
                        </ul>
                    </Reveal>

                    {/* Impact Column */}
                    <Reveal delay={200} className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-colors">
                        <h3 className="text-2xl font-medium mb-6">Impact Housing</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" />
                                <div>
                                    <strong className="block text-white">Key Worker Focus</strong>
                                    <span className="text-gray-400 text-sm">Housing for nurses, teachers, and emergency responders near work.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" />
                                <div>
                                    <strong className="block text-white">Social & Disability</strong>
                                    <span className="text-gray-400 text-sm">Partnerships for Specialist Disability Accommodation (SDA).</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" />
                                <div>
                                    <strong className="block text-white">Economic Necessity</strong>
                                    <span className="text-gray-400 text-sm">Affordable housing is mainstream economic infrastructure.</span>
                                </div>
                            </li>
                        </ul>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
