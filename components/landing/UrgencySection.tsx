import { Reveal } from "@/components/ui/Reveal"
import { GlassCard } from "@/components/ui/GlassCard"
import { AlertTriangle, Clock, TrendingUp } from "lucide-react"

export function UrgencySection() {
    return (
        <section className="py-24 px-6 md:px-12 xl:px-24 max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <div className="space-y-8">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-medium mb-4">
                            <AlertTriangle className="w-4 h-4" />
                            <span>Critical Housing Shortage</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-[#17191F] leading-[1.1]">
                            The Cost of Inaction <br />
                            <span className="text-gray-400">is Too High.</span>
                        </h2>
                    </Reveal>

                    <Reveal delay={200}>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Australia is facing its biggest societal policy challenge. Construction times have blown out by 50% in the last decade. To meet the National Housing Accord’s target, we need 240,000 new homes per year.
                        </p>
                    </Reveal>

                    <Reveal delay={300}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            <GlassCard className="bg-gray-50 border-gray-100">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-2 bg-white rounded-lg shadow-sm">
                                        <Clock className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <span className="text-xs font-medium text-red-500 bg-red-50 px-2 py-1 rounded">+50% Time</span>
                                </div>
                                <div className="text-3xl font-bold text-[#17191F] mb-1">28 Months</div>
                                <p className="text-sm text-gray-500">Avg. Apartment Build Time</p>
                            </GlassCard>

                            <div className="bg-[#17191F] text-white border border-gray-800 rounded-2xl p-6 shadow-sm">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-2 bg-white/10 rounded-lg">
                                        <TrendingUp className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">Target</span>
                                </div>
                                <div className="text-3xl font-bold text-white mb-1">18 Months</div>
                                <p className="text-sm text-gray-400">AR Perth Delivery Time</p>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={400} className="relative h-[500px] w-full bg-gray-100 rounded-3xl overflow-hidden shadow-xl">
                    {/* Abstract Chart Visualization */}
                    <div className="absolute inset-0 flex items-end justify-center p-12 gap-8">
                        {/* Traditional Bar */}
                        <div className="w-1/3 h-[80%] bg-gray-300 rounded-t-2xl relative group transition-all hover:bg-gray-400">
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-gray-600 font-medium">Traditional</div>
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl font-bold text-gray-700">28m</div>
                        </div>

                        {/* AR Perth Bar */}
                        <div className="w-1/3 h-[50%] bg-[#17191F] rounded-t-2xl relative group transition-all hover:bg-black shadow-2xl shadow-black/20">
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-bounce">
                                40% Faster
                            </div>
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/80 font-medium">AR Perth</div>
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl font-bold text-white">18m</div>
                        </div>
                    </div>

                    <div className="absolute top-8 left-8 right-8">
                        <h3 className="text-xl font-medium text-gray-800">Construction Velocity Comparison</h3>
                        <p className="text-sm text-gray-500">Time to completion for 100+ unit developments</p>
                    </div>
                </Reveal>

            </div>
        </section>
    )
}
