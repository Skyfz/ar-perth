import { Reveal } from "@/components/ui/Reveal"
import { GlassCard } from "@/components/ui/GlassCard"
import { Building2, ShoppingBag, Leaf } from "lucide-react"

const pillars = [
    {
        title: "Integrated Residential",
        description: "From master-planned estates to high-density Build-to-Rent (BTR) apartments.",
        icon: Building2,
        image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Neighborhood Retail",
        description: "Developing high-traffic hubs that anchor local communities and provide essential services.",
        icon: ShoppingBag,
        image: "/neighborhood-retail.webp"
    },
    {
        title: "Sustainable Commercial",
        description: "6-star Green Star rated precincts designed for the future workspace and student accommodation.",
        icon: Leaf,
        image: "/commercial.jpg"
    }
]

export function Features() {
    return (
        <section className="py-24 px-6 md:px-12 xl:px-24 max-w-[1400px] mx-auto bg-white rounded-[40px] my-12">
            <div className="mb-16">
                <Reveal>
                    <h2 className="text-4xl md:text-[48px] leading-[1.1] font-normal tracking-[-0.04em] text-[#17191F]">
                        Our Sectors <br />
                        <span className="text-gray-400">Integrated Communities</span>
                    </h2>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pillars.map((pillar, index) => (
                    <Reveal key={index} delay={index * 100}>
                        <div className="group relative aspect-[3/4] rounded-[24px] overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500">
                            <img
                                src={pillar.image}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt={pillar.title}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full">
                                <div className="mt-auto">
                                    <div className="bg-white/90 backdrop-blur-md self-start px-4 py-2 rounded-full mb-4 inline-flex items-center gap-2 w-fit">
                                        <pillar.icon className="w-4 h-4 text-black" />
                                        <span className="text-sm font-medium text-black">{pillar.title}</span>
                                    </div>

                                    <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 ease-out opacity-0 group-hover:opacity-100">
                                        <p className="text-white text-sm leading-relaxed font-medium drop-shadow-md pb-2">
                                            {pillar.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}
