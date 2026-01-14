"use client";

import { useState } from "react";
import { Check, X, MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming utils exists, if not I'll fix
// I'll assume basic button classes if shadcn button isn't immediately available or use standard tailwind

interface LandConfirmationProps {
    onConfirm: (hasLand: boolean) => void;
}

export function LandConfirmation({ onConfirm }: LandConfirmationProps) {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 text-center animate-in fade-in duration-700 slide-in-from-bottom-4">
            <div className="max-w-2xl mx-auto space-y-8">
                <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4">
                        <MapPin className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white font-heading">
                        Let's Start Your Journey
                    </h1>
                    <p className="text-xl text-zinc-500 dark:text-zinc-400">
                        To show you the most relevant packages, tell us a bit about your current situation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
                    <button
                        onClick={() => onConfirm(true)}
                        className="group relative flex flex-col items-center p-8 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-indigo-600 dark:hover:border-indigo-500 bg-white dark:bg-zinc-900 transition-all duration-300 hover:shadow-lg"
                    >
                        <div className="mb-4 p-3 rounded-full bg-indigo-50 dark:bg-indigo-900/20 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/40 transition-colors">
                            <Check className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">I Have Land</h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
                            I already own a block of land and need a home design.
                        </p>
                    </button>

                    <button
                        onClick={() => onConfirm(false)}
                        className="group relative flex flex-col items-center p-8 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-indigo-600 dark:hover:border-indigo-500 bg-white dark:bg-zinc-900 transition-all duration-300 hover:shadow-lg"
                    >
                        <div className="mb-4 p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 transition-colors">
                            <X className="w-6 h-6 text-zinc-600 dark:text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">No Land Yet</h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
                            I'm looking for a house and land package.
                        </p>
                    </button>
                </div>

                <p className="text-sm text-zinc-400">
                    Not sure? <button className="text-indigo-600 hover:underline" onClick={() => onConfirm(false)}>Skip for now</button>
                </p>
            </div>
        </div>
    );
}
