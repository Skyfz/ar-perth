import { Reveal } from "@/components/ui/Reveal"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
    return (
        <section className="py-24 px-6 md:px-12 xl:px-24 max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <Reveal className="order-2 lg:order-1">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop"
                            className="w-full h-full object-cover"
                            alt="Perth Architecture"
                        />
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                </Reveal>

                <div className="order-1 lg:order-2 space-y-8">
                    <Reveal>
                        <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-[#17191F] mb-6">
                            Who We Are
                        </h2>
                        <p className="text-xl font-light text-gray-600 leading-relaxed mb-6">
                            <strong className="text-black font-medium">AR Perth</strong> is the Australian expansion of <strong className="text-black font-medium">Alleyroads</strong>, a diversified property and infrastructure specialist.
                        </p>
                        <p className="text-lg text-gray-500 leading-relaxed">
                            We bring decades of project management expertise and a fresh perspective to the Western Australian market. We are not just developers; we are long-term asset holders and community builders.
                        </p>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-lg font-semibold text-black mb-2">Our Philosophy: Fixing a Broken System</h3>
                            <p className="text-gray-600 mb-4">
                                The traditional rental market is broken. We believe renting shouldn't be a second-rate option. Our "Build-to-Rent" model ensures professional on-site management, rapid maintenance, and genuine security of tenure.
                            </p>
                            <Button variant="link" className="p-0 h-auto text-black font-medium hover:text-gray-600">
                                Learn more about our philosophy <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
