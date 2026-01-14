"use client";

import { useState, useMemo } from "react";
import { HouseCard } from "@/components/venture-plans/HouseCard";
import { FilterBar } from "@/components/venture-plans/FilterBar";
import { ventureHouses } from "@/lib/venture-plans";
import { DefaultLayout } from "@/components/DefaultLayout";

export default function VenturePlansPage() {
    const [filters, setFilters] = useState({
        minBeds: 0,
        minArea: 0,
        maxArea: 300,
    });

    const filteredHouses = useMemo(() => {
        return ventureHouses.filter((house) => {
            if (house.specs.beds < filters.minBeds) return false;
            if (house.floorArea && (house.floorArea < filters.minArea || house.floorArea > filters.maxArea)) return false;
            return true;
        });
    }, [filters]);

    const handleFilterChange = (key: string, value: any) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    const resetFilters = () => {
        setFilters({ minBeds: 0, minArea: 0, maxArea: 300 });
    };

    return (
        <DefaultLayout>
            <div className="min-h-screen p-6 md:p-12 animate-in fade-in duration-700">
                <div className="max-w-7xl mx-auto space-y-12">

                    {/* Header Section */}
                    <div className="space-y-4 max-w-3xl mt-12">
                        <h1 className="text-4xl md:text-5xl font-normal tracking-tight text-[#17191F] font-heading">
                            Search Designs
                        </h1>
                        <p className="text-xl text-gray-500 font-light max-w-2xl">
                            Explore our exclusive range of architectural designs and house & land packages.
                        </p>
                    </div>

                    <FilterBar
                        filters={{ ...filters, maxBeds: 5 }}
                        onFilterChange={handleFilterChange}
                        resetFilters={resetFilters}
                        areaRange={[100, 300]}
                    />

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredHouses.map((house) => (
                            <HouseCard key={house.id} house={house} />
                        ))}
                    </div>

                    {filteredHouses.length === 0 && (
                        <div className="text-center py-20">
                            <h3 className="text-xl text-zinc-400">No houses found matching your criteria.</h3>
                            <button onClick={resetFilters} className="mt-4 text-indigo-600 hover:underline">Clear Filters</button>
                        </div>
                    )}
                </div>
            </div>
        </DefaultLayout>
    );
}
