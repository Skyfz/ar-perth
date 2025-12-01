import { Reveal } from "@/components/ui/Reveal"
import { ArrowRight } from "lucide-react"

const articles = [
    {
        category: "Analysis",
        title: "Understanding the $60bn Opportunity: How BTR Solves the Supply Crunch.",
        date: "Dec 12, 2025"
    },
    {
        category: "Market",
        title: "Why Renting in Perth is About to Change Forever.",
        date: "Nov 28, 2025"
    },
    {
        category: "Innovation",
        title: "Modular Construction: The Key to Halving Build Times.",
        date: "Nov 15, 2025"
    },
    {
        category: "Community",
        title: "The Missing Middle: How We Fund Affordable Housing for Key Workers.",
        date: "Oct 30, 2025"
    }
]

export function News() {
    return (
        <section className="py-24 px-6 md:px-12 xl:px-24 max-w-[1400px] mx-auto">
            <div className="flex justify-between items-end mb-16">
                <Reveal>
                    <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-[#17191F]">
                        News & Insights
                    </h2>
                </Reveal>
                <Reveal delay={100}>
                    <a href="#" className="hidden md:flex items-center gap-2 text-lg font-medium hover:text-gray-600 transition-colors">
                        View all articles <ArrowRight className="w-5 h-5" />
                    </a>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {articles.map((article, index) => (
                    <Reveal key={index} delay={index * 100} className="group cursor-pointer">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">{article.category}</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span className="text-xs text-gray-400">{article.date}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-medium leading-tight group-hover:text-gray-600 transition-colors mb-4">
                            {article.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                            Read Article <ArrowRight className="w-4 h-4" />
                        </div>
                        <div className="h-px w-full bg-gray-200 mt-8 group-hover:bg-black transition-colors"></div>
                    </Reveal>
                ))}
            </div>

            <div className="mt-12 md:hidden">
                <a href="#" className="flex items-center gap-2 text-lg font-medium hover:text-gray-600 transition-colors">
                    View all articles <ArrowRight className="w-5 h-5" />
                </a>
            </div>
        </section>
    )
}
