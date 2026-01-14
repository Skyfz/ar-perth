"use client";

import Image from "next/image";
import Link from "next/link";
import { VentureHouse } from "@/lib/venture-plans";
import { Bed, Bath, Square, Car, ArrowRight } from "lucide-react";

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
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-flex items-center text-sm font-medium text-white">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                </div>
            </div>

            <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white font-heading">{house.name}</h3>
                    <div className="flex flex-col items-end">
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">From</span>
                        <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                            ${house.startingPrice.toLocaleString()}
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-2 py-4 border-t border-zinc-100 dark:border-zinc-800">
                    <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-zinc-50 dark:bg-zinc-800/50">
                        <Bed className="h-4 w-4 text-zinc-400 mb-1" />
                        <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">{house.specs.beds}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-zinc-50 dark:bg-zinc-800/50">
                        <Bath className="h-4 w-4 text-zinc-400 mb-1" />
                        <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">{house.specs.baths}</span>
                    </div>
                    {/* Living areas often don't have a standard icon, using Square or Armchair if available, falling back to basic layout */}
                    <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-zinc-50 dark:bg-zinc-800/50">
                        <Square className="h-4 w-4 text-zinc-400 mb-1" />
                        <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">{house.specs.living}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-zinc-50 dark:bg-zinc-800/50">
                        <Car className="h-4 w-4 text-zinc-400 mb-1" />
                        <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">{house.specs.garages}</span>
                    </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
                    <span>{house.floorArea}m² Total Area</span>
                </div>
            </div>
        </Link>
    );
}
