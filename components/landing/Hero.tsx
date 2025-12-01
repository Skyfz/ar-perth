import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/Reveal"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <header className="relative w-full h-screen min-h-[700px] flex flex-col justify-center items-center overflow-hidden bg-[#F6F7FA]">
            {/* Background Image */}
            <div className="absolute inset-0 top-0 left-0 right-0 bottom-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                    className="opacity-90 w-full h-full object-cover scale-105"
                    alt="Perth Skyline"
                />
                <div className="bg-gradient-to-b from-black/40 via-black/20 to-[#F6F7FA] absolute top-0 right-0 bottom-0 left-0"></div>
            </div>

            {/* Typography */}
            <div className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl px-6">
                <Reveal>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white mb-6 drop-shadow-lg">
                        Building the Future <br />
                        <span className="font-light italic">of Western Australia</span>
                    </h1>
                </Reveal>

                <Reveal delay={200}>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed drop-shadow-md">
                        Secure. Sustainable. Scalable. We combine institutional-grade Build-to-Rent models with advanced construction technologies.
                    </p>
                </Reveal>

                <Reveal delay={400}>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="rounded-full text-lg px-8 py-6 bg-white text-black hover:bg-gray-100 border-none">
                            Partner with Us
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full text-lg px-8 py-6 bg-transparent text-white border-white hover:bg-white/10 hover:text-white">
                            Explore Developments
                        </Button>
                    </div>
                </Reveal>
            </div>
        </header>
    )
}
