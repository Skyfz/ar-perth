"use client";

import { X, Search } from "lucide-react";
import { useState } from "react";

interface FilterBarProps {
    filters: {
        beds: number;
        maxBeds: number;
        baths: number;
        minArea: number;
        maxArea: number;
    };
    onFilterChange: (key: string, value: any) => void;
    resetFilters: () => void;
    areaRange: [number, number];
}

export function FilterBar({ filters, onFilterChange, resetFilters, areaRange }: FilterBarProps) {
    return (
        <div className="p-6 rounded-3xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-100/50 dark:shadow-none mb-12">
            <div className="flex flex-col lg:flex-row gap-8 items-center">

                {/* Bedrooms */}
                <div className="w-full lg:w-auto space-y-3">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Bedrooms</label>
                    <div className="flex gap-2">
                        {[2, 3, 4].map((bedCount) => (
                            <button
                                key={bedCount}
                                onClick={() => onFilterChange("beds", filters.beds === bedCount ? 0 : bedCount)}
                                className={`
                                    min-w-[3rem] h-10 flex items-center justify-center font-bold text-sm rounded-full transition-all duration-200 border
                                    ${filters.beds === bedCount
                                        ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200/50 dark:shadow-none"
                                        : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-blue-300 dark:hover:border-blue-700"}
                                `}
                            >
                                {bedCount}{bedCount === 4 ? "+" : ""}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="w-px h-12 bg-zinc-100 dark:bg-zinc-800 hidden lg:block" />

                {/* Bathrooms */}
                <div className="w-full lg:w-auto space-y-3">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Bathrooms</label>
                    <div className="flex gap-2">
                        {[1, 2, 2.5].map((bathCount) => (
                            <button
                                key={bathCount}
                                onClick={() => onFilterChange("baths", filters.baths === bathCount ? 0 : bathCount)}
                                className={`
                                    min-w-[3rem] h-10 flex items-center justify-center font-bold text-sm rounded-full transition-all duration-200 border
                                    ${filters.baths === bathCount
                                        ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200/50 dark:shadow-none"
                                        : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-blue-300 dark:hover:border-blue-700"}
                                `}
                            >
                                {bathCount}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="w-px h-12 bg-zinc-100 dark:bg-zinc-800 hidden lg:block" />

                {/* Area Slider */}
                <div className="flex-1 w-full space-y-4">
                    <div className="flex justify-between items-center">
                        <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Floor Area (m²)</label>
                        <span className="text-sm font-bold text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
                            {filters.minArea}m² - {areaRange[1]}m²
                        </span>
                    </div>
                    <div className="relative w-full h-6 flex items-center">
                        {/* Track Background */}
                        <div className="absolute w-full h-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg pointer-events-none" />

                        {/* Active Track (Filled) */}
                        <div
                            className="absolute h-1 bg-blue-600 rounded-l-lg pointer-events-none"
                            style={{
                                width: `${((Math.max(filters.minArea, areaRange[0]) - areaRange[0]) / (areaRange[1] - areaRange[0])) * 100}%`
                            }}
                        />

                        <input
                            type="range"
                            min={areaRange[0]}
                            max={areaRange[1]}
                            value={Math.max(filters.minArea, areaRange[0])}
                            onChange={(e) => onFilterChange("minArea", parseInt(e.target.value))}
                            className="absolute w-full h-1 bg-transparent appearance-none cursor-pointer accent-blue-600 z-10"
                        />
                    </div>
                </div>

                <div className="w-full lg:w-auto flex justify-end">
                    <button
                        onClick={resetFilters}
                        className="flex items-center text-sm font-medium text-zinc-400 hover:text-red-500 transition-colors px-4 py-2"
                    >
                        <X className="w-4 h-4 mr-1" /> Clear
                    </button>
                </div>
            </div>
        </div>
    );
}
