import { Header } from "@/components/landing/Header"
import { Footer } from "@/components/landing/Footer"
import { getPostBySlug } from "@/lib/news"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default async function NewsPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = getPostBySlug(params.slug)

    // Simple Markdown Renderer
    // Simple Markdown Renderer
    const renderContent = (content: string) => {
        // Normalize line endings
        let normalized = content.replace(/\r\n/g, '\n')

        // Ensure headers are surrounded by blank lines to become proper blocks
        normalized = normalized.replace(/^(#{1,6}\s+.+)$/gm, '\n\n$1\n\n')

        // Split by double newlines to isolate blocks
        return normalized.split(/\n{2,}/).map((block, index) => {
            const cleanBlock = block.trim()
            if (!cleanBlock) return null

            if (cleanBlock.startsWith('### ')) {
                return <h3 key={index} className="text-2xl font-semibold text-[#17191F] mt-8 mb-4">{cleanBlock.replace('### ', '')}</h3>
            }
            if (cleanBlock.startsWith('## ')) {
                return <h2 key={index} className="text-3xl font-medium text-[#17191F] mt-12 mb-6">{cleanBlock.replace('## ', '')}</h2>
            }
            if (cleanBlock.startsWith('* ')) {
                const items = cleanBlock.split('\n').filter(Boolean).map(item => item.replace(/^\* /, '').trim())
                return (
                    <ul key={index} className="list-disc pl-6 space-y-2 mb-6 text-gray-600 leading-relaxed">
                        {items.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />)}
                    </ul>
                )
            }
            if (cleanBlock.match(/^\d\./)) {
                // Split by newline but ensure we keep the parsing robust
                const items = cleanBlock.split('\n').filter(Boolean).map(item => item.replace(/^\d\.\s/, '').trim())
                return (
                    <ol key={index} className="list-decimal pl-6 space-y-2 mb-6 text-gray-600 leading-relaxed">
                        {items.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />)}
                    </ol>
                )
            }
            // Paragraph with bold support
            return (
                <p
                    key={index}
                    className="text-lg text-gray-600 leading-relaxed mb-6"
                    dangerouslySetInnerHTML={{ __html: cleanBlock.replace(/\*\*(.*?)\*\*/g, '<strong class="text-black font-medium">$1</strong>').replace(/\n/g, '<br />') }}
                />
            )
        })
    }

    return (
        <main className="min-h-screen bg-[#F6F7FA]">
            {/* Reusing main header but we need to ensure it works on this page. 
                Using specific client component wrapper might be safer but direct usage is fine 
                if Header doesn't rely on being in a specific context. 
            */}
            <div className="fixed top-0 left-0 right-0 z-50">
                <Header />
            </div>

            {/* Hero Image */}
            {/* Hero Image */}
            <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-gray-900">
                {post.image && (
                    <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-80"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 xl:p-24 max-w-[1400px] mx-auto">
                    <Link href="/#news" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to News
                    </Link>

                    <div className="flex items-center gap-4 mb-6 text-white/80 text-sm font-medium">
                        <span className="uppercase tracking-wider text-emerald-400">{post.category}</span>
                        <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                        <span>{post.date}</span>
                        <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                        <span>By {post.author}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white max-w-4xl leading-[1.1]">
                        {post.title}
                    </h1>
                </div>
            </div>

            {/* Content */}
            <article className="max-w-3xl mx-auto px-6 py-24">
                {renderContent(post.content)}

                <hr className="my-12 border-gray-200" />

                <div className="flex justify-between items-center">
                    <p className="text-gray-500 italic">
                        Share this article
                    </p>
                    <div className="flex gap-4">
                        {/* Social placeholders */}
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 cursor-pointer transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            Lik
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 cursor-pointer transition-colors">
                            <span className="sr-only">Twitter</span>
                            X
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    )
}
