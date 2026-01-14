import { ventureHouses } from "@/lib/venture-plans";
import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Square, Car, Check, ArrowLeft, Download, Phone, Armchair } from "lucide-react";
import { notFound } from "next/navigation";
import { DefaultLayout } from "@/components/DefaultLayout";

// Since it's a dynamic route using generateStaticParams for static generation in Next.js is good practice if data is static.
// But for now standard page component.

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return ventureHouses.map((house) => ({
        id: house.id,
    }));
}

export default async function HouseDetailsPage({ params }: PageProps) {
    const { id } = await params;
    const house = ventureHouses.find((h) => h.id === id);

    if (!house) {
        notFound();
    }

    // Spec list based on user request "full spec list (Benchtops, Appliances, Insulation)"
    // Since I don't have the specific spec data for each house in the JSON provided, I will use a generic high-quality spec list 
    // that applies to all "Venture Plans" as implied they are a collection.
    const specsList = [
        "20mm Essastone Benchtops to Kitchen",
        "900mm Stainless Steel Appliances",
        "Reverse Cycle Air Conditioning",
        "High Ceilings (31c) to Living Areas",
        "Double Glazing to all habitable rooms",
        "LED Downlights throughout",
        "Solar PV System Provision",
        "NBN Ready Package"
    ];

    return (
        <DefaultLayout>
            <div className="min-h-screen bg-white dark:bg-black">
                {/* Sticky Header - Adjusted top to account for Global Header */}
                <div className="sticky top-24 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-all">
                    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                        <Link href="/venture-plans" className="flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Collection
                        </Link>
                        <div className="flex-1" />
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                            Enquire Now
                        </button>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                        {/* Left Column: Visuals */}
                        <div className="space-y-8">
                            <div className="group relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
                                <Image
                                    src={house.imageUrl}
                                    alt={house.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    priority
                                />

                            </div>


                        </div>

                        {/* Right Column: details */}
                        <div className="space-y-12">
                            <div>
                                <div className="grid grid-cols-5 gap-4 py-6 border-y border-zinc-100 dark:border-zinc-800">
                                    <div className="text-center">
                                        <Bed className="w-6 h-6 mx-auto mb-2 text-zinc-400" />
                                        <p className="font-bold text-xl">{house.specs.beds}</p>
                                        <p className="text-xs text-zinc-500 uppercase tracking-wider">Beds</p>
                                    </div>
                                    <div className="text-center border-l border-zinc-100 dark:border-zinc-800">
                                        <Bath className="w-6 h-6 mx-auto mb-2 text-zinc-400" />
                                        <p className="font-bold text-xl">{house.specs.baths}</p>
                                        <p className="text-xs text-zinc-500 uppercase tracking-wider">Baths</p>
                                    </div>
                                    <div className="text-center border-l border-zinc-100 dark:border-zinc-800">
                                        <Armchair className="w-6 h-6 mx-auto mb-2 text-zinc-400" />
                                        <p className="font-bold text-xl">{house.specs.living}</p>
                                        <p className="text-xs text-zinc-500 uppercase tracking-wider">Living</p>
                                    </div>
                                    <div className="text-center border-l border-zinc-100 dark:border-zinc-800">
                                        <Car className="w-6 h-6 mx-auto mb-2 text-zinc-400" />
                                        <p className="font-bold text-xl">{house.specs.garages}</p>
                                        <p className="text-xs text-zinc-500 uppercase tracking-wider">Garage</p>
                                    </div>
                                    <div className="text-center border-l border-zinc-100 dark:border-zinc-800">
                                        <Square className="w-6 h-6 mx-auto mb-2 text-zinc-400" />
                                        <p className="font-bold text-xl">{house.floorArea}m²</p>
                                        <p className="text-xs text-zinc-500 uppercase tracking-wider">Total</p>
                                    </div>
                                </div>
                            </div>



                            <div className="p-8 rounded-3xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-500/20 space-y-6">
                                <div className="flex flex-col items-end pb-6 border-b border-blue-100 dark:border-blue-500/20">
                                    <span className="text-sm uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold mb-2">Starting From</span>
                                    <span className="text-5xl font-bold text-zinc-900 dark:text-white font-heading">
                                        ${house.startingPrice.toLocaleString()}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300">Interested in the {house.name}?</h3>
                                <p className="text-blue-700 dark:text-blue-400/80">
                                    Get in touch with our team to discuss customization options and site requirements.
                                </p>
                                <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 dark:shadow-none transition-all hover:-translate-y-0.5 active:translate-y-0">
                                    Build This Plan Now
                                </button>
                                <div className="flex justify-center">
                                    <button className="flex items-center text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline">
                                        <Phone className="w-4 h-4 mr-2" /> Talk to a Design Consultant
                                    </button>
                                </div>
                            </div>

                            {/* Mobile/Tablet Floor Plan Location */}
                            <div className="lg:hidden relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 mt-8">
                                <Image
                                    src={house.floorPlanUrl}
                                    alt={`${house.name} Floor Plan`}
                                    fill
                                    className="object-contain p-4"
                                />
                                <div className="absolute top-4 right-4 group cursor-pointer">
                                    <div className="bg-white dark:bg-black p-2 rounded-full shadow-md hover:scale-110 transition-transform">
                                        <Download className="w-5 h-5 text-zinc-600 dark:text-zinc-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Floor Plan Section */}
                    <div className="hidden lg:block mt-24">
                        <div className="max-w-5xl mx-auto">
                            <h3 className="text-3xl font-bold font-heading mb-8 text-center">Floor Plan</h3>
                            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                                <Image
                                    src={house.floorPlanUrl}
                                    alt={`${house.name} Floor Plan`}
                                    fill
                                    className="object-contain p-8"
                                />
                                <div className="absolute top-8 right-8 group cursor-pointer">
                                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition-all hover:-translate-y-1">
                                        <Download className="w-5 h-5" />
                                        <span className="font-semibold">Download Plan</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
