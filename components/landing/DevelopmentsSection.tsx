import { Reveal } from "@/components/ui/Reveal"
import { GlassCard } from "@/components/ui/GlassCard"

const developments = [
    {
        title: "The inner-city precinct",
        location: "Perth CBD",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3d2b0b1d?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Coastal Residences",
        location: "Cottesloe",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Urban Village",
        location: "Subiaco",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
    }
]

export function DevelopmentsSection() {
    return (
        <section className="py-24 px-6 md:px-12 xl:px-24 max-w-[1400px] mx-auto" id="developments">
            <Reveal className="mb-16">
                <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-[#17191F] mb-6">
                    Featured Developments
                </h2>
                <p className="text-xl text-gray-500 font-light max-w-2xl">
                    Delivering high-quality residential communities across Western Australia's most sought-after locations.
                </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {developments.map((dev, index) => (
                    <Reveal key={index} delay={index * 100} className="group cursor-pointer">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6">
                            <img
                                src={dev.image}
                                alt={dev.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <span className="text-white text-lg font-medium">{dev.title}</span>
                                <span className="text-white/80 text-sm">{dev.location}</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-medium text-[#17191F] group-hover:text-gray-600 transition-colors">
                            {dev.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{dev.location}</p>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}
