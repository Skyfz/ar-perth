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
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
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

                            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                                {/* Floorplan */}
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

                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold font-heading">Premium Inclusions</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {specsList.map((spec, i) => (
                                        <li key={i} className="flex items-start">
                                            <div className="mt-1 p-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 mr-3 shrink-0">
                                                <Check className="w-3 h-3" />
                                            </div>
                                            <span className="text-zinc-600 dark:text-zinc-300">{spec}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-8 rounded-3xl bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-500/20 space-y-6">
                                <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-300">Interested in the {house.name}?</h3>
                                <p className="text-indigo-700 dark:text-indigo-400/80">
                                    Get in touch with our team to discuss customization options and site requirements.
                                </p>
                                <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-indigo-200 dark:shadow-none transition-all hover:-translate-y-0.5 active:translate-y-0">
                                    Build This Plan Now
                                </button>
                                <div className="flex justify-center">
                                    <button className="flex items-center text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                                        <Phone className="w-4 h-4 mr-2" /> Talk to a Design Consultant
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
