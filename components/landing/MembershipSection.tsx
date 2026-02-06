import { Reveal } from "@/components/ui/Reveal"
import { ShieldCheck, Award } from "lucide-react"

export function MembershipSection() {
    return (
        <section className="py-24 px-6 md:px-12 xl:px-24 max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <div className="space-y-8">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1457a8] text-sm font-medium mb-4">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Professional Membership</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-[#17191F] leading-[1.1]">
                            Engineering Excellence. <br />
                            <span className="text-gray-400">Nationally Recognized.</span>
                        </h2>
                    </Reveal>

                    <Reveal delay={200}>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            AR Perth is a proud member of Engineers Australia. This membership demonstrates our commitment to the highest standards of engineering practice, ethics, and professional development.
                        </p>
                        <div className="mt-4">
                            <a
                                href="https://engineersaustralia.org.au"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#1457a8] font-medium hover:underline inline-flex items-center gap-2"
                            >
                                View Membership Confirmation
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
                            </a>
                        </div>
                    </Reveal>

                    <Reveal delay={300}>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-50 rounded-full text-[#1457a8]">
                                    <Award className="w-5 h-5" />
                                </div>
                                <span className="text-[#17191F] font-medium">Chartered Professional Engineers</span>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={400} className="relative h-[400px] w-full bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex items-center justify-center p-12">
                    <a
                        href="https://engineersaustralia.org.au"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-full flex items-center justify-center"
                    >
                        <img
                            src="/Primary.jpg"
                            alt="Engineers Australia Member Logo"
                            className="max-w-full max-h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                        />
                    </a>
                </Reveal>

            </div>
        </section>
    )
}
