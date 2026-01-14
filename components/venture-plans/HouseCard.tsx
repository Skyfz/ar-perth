"use client";

import Image from "next/image";
import Link from "next/link";
import { VentureHouse } from "@/lib/venture-plans";
import { Bed, Bath, Square, Car, ArrowRight, Armchair } from "lucide-react";

interface HouseCardProps {
    house: VentureHouse;
}

export function HouseCard({ house }: HouseCardProps) {
    return (
        <Link
            href={`/house/${house.id}`}
            className="group relative block overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
            <div className="relative aspect-video overflow-hidden">
                <Image
                    src={house.imageUrl}
                    alt={house.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white font-heading">{house.name}</h3>
                        <p className="text-sm font-medium text-zinc-500 mt-1">{house.floorArea}m² Total Area</p>
                    </div>
                    <div className="text-right">
                        <span className="block text-xs uppercase tracking-wider text-zinc-500 font-bold mb-1">From</span>
                        <span className="block text-xl font-bold text-blue-600 dark:text-blue-400">
                            ${house.startingPrice.toLocaleString()}
                        </span>
                    </div>
                </div>

                <div className="flex items-center justify-between py-4 border-t border-zinc-100 dark:border-zinc-800 px-1">
                    <div className="flex flex-col items-center space-y-1 text-zinc-600 dark:text-zinc-400">
                        <Bed className="w-4 h-4" />
                        <span className="font-semibold text-sm">{house.specs.beds}</span>
                    </div>
                    <div className="w-px h-8 bg-zinc-100 dark:bg-zinc-800" />
                    <div className="flex flex-col items-center space-y-1 text-zinc-600 dark:text-zinc-400">
                        <Bath className="w-4 h-4" />
                        <span className="font-semibold text-sm">{house.specs.baths}</span>
                    </div>
                    <div className="w-px h-8 bg-zinc-100 dark:bg-zinc-800" />
                    <div className="flex flex-col items-center space-y-1 text-zinc-600 dark:text-zinc-400">
                        <Armchair className="w-4 h-4" />
                        <span className="font-semibold text-sm">{house.specs.living}</span>
                    </div>
                    <div className="w-px h-8 bg-zinc-100 dark:bg-zinc-800" />
                    <div className="flex flex-col items-center space-y-1 text-zinc-600 dark:text-zinc-400">
                        <Car className="w-4 h-4" />
                        <span className="font-semibold text-sm">{house.specs.garages}</span>
                    </div>
                    {/* <div className="w-px h-8 bg-zinc-100 dark:bg-zinc-800" />
                    <div className="flex flex-col items-center space-y-1 text-zinc-600 dark:text-zinc-400">
                        <Square className="w-4 h-4" />
                        <span className="font-semibold text-sm">{house.floorArea}m²</span>
                    </div> */}
                </div>
            </div>
        </Link>
    );
}
