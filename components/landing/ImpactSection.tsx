import { Reveal } from "@/components/ui/Reveal"

export function ImpactSection() {
    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#F6F7FA]">
            {/* Background Image */}
            <div className="absolute inset-0 top-0 left-0 right-0 bottom-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                    className="opacity-90 w-full h-full object-cover"
                    alt="Impact Background"
                />
                <div className="bg-gradient-to-b from-transparent via-transparent to-[#F6F7FA] absolute top-0 right-0 bottom-0 left-0"></div>
            </div>

            {/* Typography */}
            <div className="relative z-10 flex flex-col items-center text-[#17191F] w-full max-w-[90vw] pointer-events-none select-none mix-blend-difference text-white">
                <h1 className="flex flex-col items-center leading-[0.8] tracking-[-0.04em]">
                    <Reveal>
                        <span className="text-[17vw] xl:text-[280px] font-normal block">
                            AR
                        </span>
                    </Reveal>
                    <Reveal delay={100}>
                        <span className="text-[7vw] xl:text-[110px] self-end -mt-[1vw] xl:-mt-4 mr-[10%] block">
                            Perth
                        </span>
                    </Reveal>
                </h1>
            </div>

            {/* Statistics Overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-20 px-6 md:px-12 xl:px-24 pb-12 md:pb-24">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-white/20 pt-8 md:pt-12">
                    <Reveal delay={200}>
                        <div className="flex flex-col text-[#17191F]">
                            <span className="text-4xl md:text-5xl font-medium tracking-tight mb-2">300+</span>
                            <span className="text-gray-500 text-lg">Real estate in the portfolio</span>
                        </div>
                    </Reveal>
                    <Reveal delay={300}>
                        <div className="flex flex-col text-[#17191F]">
                            <span className="text-4xl md:text-5xl font-medium tracking-tight mb-2">12+</span>
                            <span className="text-gray-500 text-lg">Years of experience</span>
                        </div>
                    </Reveal>
                    <Reveal delay={400}>
                        <div className="flex flex-col text-[#17191F]">
                            <span className="text-4xl md:text-5xl font-medium tracking-tight mb-2">24/7</span>
                            <span className="text-gray-500 text-lg">Available to you and your goals</span>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
