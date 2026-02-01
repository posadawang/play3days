"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { itineraryData, ItineraryItem } from "../data/itinerary";
import { clsx } from "clsx";

const CARD_COLORS = [
    "bg-[#FFDEA6]", // Soft Yellow/Orange
    "bg-[#C1EFFF]", // Soft Blue
    "bg-[#D0F4CA]", // Soft Green
    "bg-[#FDCFE8]", // Soft Pink
];

export default function ItineraryDisplay() {
    const [selectedDayIndex, setSelectedDayIndex] = useState(0);
    const selectedDay = itineraryData[selectedDayIndex];

    return (
        <div className="w-full max-w-lg mx-auto">
            {/* Header / Tabs - EXTRA LARGE & COLORFUL */}
            <div className="flex justify-center gap-4 mb-8">
                {itineraryData.map((day, idx) => (
                    <button
                        key={day.day}
                        onClick={() => setSelectedDayIndex(idx)}
                        className={clsx(
                            "flex-1 py-6 rounded-3xl text-2xl font-black transition-all duration-300 relative transform shadow-lg",
                            selectedDayIndex === idx
                                ? "text-white bg-[#FF9F9F] scale-110 -translate-y-2 z-10 rotate-1"
                                : "text-gray-400 bg-white hover:bg-gray-50 hover:-translate-y-1 hover:rotate-[-1deg]"
                        )}
                    >
                        <span className="relative z-10 drop-shadow-sm">{day.date}</span>
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="p-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedDayIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col items-center"
                    >
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-black text-[#5C5C5C] mb-2 tracking-wide">
                                {selectedDay.title}
                            </h2>
                        </div>

                        <div className="space-y-6 w-full">
                            {selectedDay.items.map((item, idx) => (
                                <TimelineItem key={idx} item={item} index={idx} />
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

function TimelineItem({ item, index }: { item: ItineraryItem; index: number }) {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        item.locationQuery || item.title
    )}`;

    const bgColor = CARD_COLORS[index % CARD_COLORS.length];

    return (
        <div className="w-full">
            <a
                href={item.locationQuery ? mapUrl : "#"}
                target={item.locationQuery ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="block w-full transform transition-all duration-300 hover:scale-[1.03] active:scale-95"
            >
                <div className={clsx(
                    "p-8 rounded-[2rem] shadow-sm flex flex-col items-center text-center relative overflow-hidden",
                    bgColor
                )}>
                    {/* Decorative circle */}
                    <div className="absolute top-0 left-0 w-24 h-24 bg-white/20 rounded-full -translate-x-12 -translate-y-12"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/20 rounded-full translate-x-10 translate-y-10"></div>

                    <div className="inline-flex items-center text-lg font-black text-white bg-black/10 px-6 py-2 rounded-full mb-4 backdrop-blur-sm">
                        <Clock size={18} className="mr-2" />
                        {item.time}
                    </div>

                    <h3 className="text-3xl font-black text-[#4A4A4A] mb-3 leading-tight drop-shadow-sm">
                        {item.title}
                    </h3>

                    {item.locationQuery && (
                        <div className="flex items-center text-gray-600/70 text-sm mb-4 font-bold">
                            <MapPin size={16} className="mr-1" />
                            <span>MAP</span>
                        </div>
                    )}

                    {item.note && (
                        <p className="text-xl text-[#5a5a5a] font-bold bg-white/40 px-6 py-3 rounded-2xl w-full text-center">
                            {item.note}
                        </p>
                    )}
                </div>
            </a>
        </div>
    );
}
