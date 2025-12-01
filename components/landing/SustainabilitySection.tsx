import { Reveal } from "@/components/ui/Reveal"
import { Sun, Battery, Zap, Wind } from "lucide-react"

export function SustainabilitySection() {
    return (
        <section className="py-24 px-6 md:px-12 xl:px-24 max-w-[1400px] mx-auto">
            <Reveal className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-[#17191F] mb-4">
                    Energy Efficient Living
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Affordability isn't just about rent; it's about utilities. Drawing on the expertise of our sister division, <strong className="text-black">AR Solar</strong>.
                </p>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <Reveal delay={0} className="bg-orange-50 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-orange-100 transition-colors">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-600">
                        <Sun className="w-8 h-8" />
                    </div>
                    <h3 className="font-medium text-black mb-2">Solar PV Arrays</h3>
                    <p className="text-sm text-gray-500">Embedded networks generating clean power.</p>
                </Reveal>

                <Reveal delay={100} className="bg-blue-50 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-blue-100 transition-colors">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                        <Zap className="w-8 h-8" />
                    </div>
                    <h3 className="font-medium text-black mb-2">Smart Metering</h3>
                    <p className="text-sm text-gray-500">Real-time data to reduce tenant energy costs.</p>
                </Reveal>

                <Reveal delay={200} className="bg-green-50 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-green-100 transition-colors">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                        <Battery className="w-8 h-8" />
                    </div>
                    <h3 className="font-medium text-black mb-2">EV Infrastructure</h3>
                    <p className="text-sm text-gray-500">Charging stations installed as a standard.</p>
                </Reveal>

                <Reveal delay={300} className="bg-teal-50 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-teal-100 transition-colors">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6 text-teal-600">
                        <Wind className="w-8 h-8" />
                    </div>
                    <h3 className="font-medium text-black mb-2">Passive Design</h3>
                    <p className="text-sm text-gray-500">Optimized for the Western Australian climate.</p>
                </Reveal>
            </div>
        </section>
    )
}
