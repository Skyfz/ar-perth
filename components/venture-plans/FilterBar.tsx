"use client";

import { X } from "lucide-react";

interface FilterBarProps {
    filters: {
        minBeds: number;
        maxBeds: number;
        minArea: number;
        maxArea: number;
    };
    onFilterChange: (key: string, value: any) => void;
    resetFilters: () => void;
    areaRange: [number, number]; // [min, max] available in data
}

export function FilterBar({ filters, onFilterChange, resetFilters, areaRange }: FilterBarProps) {
    return (
        <div className="flex flex-col lg:flex-row gap-6 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm mb-8">
            <div className="flex-1 space-y-4">
                <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Bedrooms</label>
                    <span className="text-xs text-zinc-500">
                        {filters.minBeds === 0 ? "Any" : `${filters.minBeds}+ Beds`}
                    </span>
                </div>
                <div className="flex gap-2">
                    {[3, 4, 5].map((bedCount) => (
                        <button
                            key={bedCount}
                            onClick={() => onFilterChange("minBeds", filters.minBeds === bedCount ? 0 : bedCount)}
                            className={`
                 font-medium text-sm px-4 py-2 rounded-lg transition-all
                 ${filters.minBeds === bedCount
                                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-none"
                                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"}
               `}
                        >
                            {bedCount}{bedCount === 5 ? "+" : ""}
                        </button>
                    ))}
                </div>
            </div>

            <div className="w-px bg-zinc-200 dark:bg-zinc-800 hidden lg:block" />

            <div className="flex-1 space-y-4">
                <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Floor Area (m²)</label>
                    <span className="text-xs text-zinc-500">
                        {filters.minArea}m² - {filters.maxArea}m²
                    </span>
                </div>

                {/* Simple Range Inputs for now if Slider component isn't guaranteed to be fully compatible blindly */}
                <div className="flex items-center gap-4">
                    <input
                        type="range"
                        min={areaRange[0]}
                        max={areaRange[1]}
                        value={filters.minArea}
                        onChange={(e) => onFilterChange("minArea", parseInt(e.target.value))}
                        className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer dark:bg-zinc-700 accent-indigo-600"
                    />
                </div>
            </div>

            <div className="flex items-end">
                <button
                    onClick={resetFilters}
                    className="flex items-center text-sm text-zinc-500 hover:text-red-500 transition-colors px-4 py-2"
                >
                    <X className="w-4 h-4 mr-1" /> Clear Filters
                </button>
            </div>
        </div>
    );
}
