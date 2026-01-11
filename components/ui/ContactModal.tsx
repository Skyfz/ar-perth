"use client"

import { X } from "lucide-react"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ContactModalProps {
    isOpen: boolean
    onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    if (!mounted || !isOpen) return null

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl w-full max-w-md p-8 relative shadow-2xl animate-in zoom-in-95 duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                    <X className="w-5 h-5 text-gray-500" />
                </button>

                <div className="mb-6">
                    <h3 className="text-2xl font-medium text-[#17191F] mb-2">Contact Us</h3>
                    <p className="text-gray-500 text-sm">Fill in your details and we'll be in touch shortly.</p>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Name</label>
                        <Input placeholder="John Doe" className="rounded-xl border-gray-200 bg-gray-50" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <Input type="email" placeholder="john@example.com" className="rounded-xl border-gray-200 bg-gray-50" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Phone</label>
                        <Input type="tel" placeholder="+61 400 000 000" className="rounded-xl border-gray-200 bg-gray-50" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            className="w-full min-h-[100px] rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
                            placeholder="How can we help you?"
                        ></textarea>
                    </div>

                    <Button type="submit" className="w-full bg-[#17191F] hover:bg-black/90 text-white rounded-xl h-12 mt-2">
                        Send Message
                    </Button>
                </form>
            </div>
        </div>,
        document.body
    )
}
