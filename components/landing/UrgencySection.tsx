import { Reveal } from "@/components/ui/Reveal"
import { ShieldCheck, Award, Check } from "lucide-react"

export function UrgencySection() {
    return (
        <section className="py-24 px-6 md:px-12 xl:px-24 max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <div className="space-y-8">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1457a8] text-sm font-medium mb-4">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Industry Credibility</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-[#17191F] leading-[1.1]">
                            Verified Excellence. <br />
                            <span className="text-gray-400">Guaranteed Delivery.</span>
                        </h2>
                    </Reveal>

                    <Reveal delay={200}>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            AR Perth is a proud member of Master Builders Western Australia (MBAWA). This accreditation guarantees that we adhere to the highest standards of quality, safety, and ethics in the construction industry.
                        </p>
                    </Reveal>

                    <Reveal delay={300}>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-50 rounded-full text-[#1457a8]">
                                    <Award className="w-5 h-5" />
                                </div>
                                <span className="text-[#17191F] font-medium">Building a Better Industry</span>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={400} className="relative h-[400px] w-full bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex items-center justify-center p-12">
                    <img
                        src="/MBAWA/MBAWA%20Members%20Logo%20PNG.png"
                        alt="Master Builders Western Australia Member"
                        className="max-w-full max-h-full object-contain"
                    />
                </Reveal>

            </div>
        </section>
    )
}
