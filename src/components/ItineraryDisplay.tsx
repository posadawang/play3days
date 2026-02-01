"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { itineraryData, ItineraryItem } from "../data/itinerary";
import { clsx } from "clsx";

export default function ItineraryDisplay() {
    const [selectedDayIndex, setSelectedDayIndex] = useState(0);
    const selectedDay = itineraryData[selectedDayIndex];

    return (
        <div className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-white/50">
            {/* Header / Tabs - Made Larger */}
            <div className="flex bg-rose-100/50 p-3 gap-3">
                {itineraryData.map((day, idx) => (
                    <button
                        key={day.day}
                        onClick={() => setSelectedDayIndex(idx)}
                        className={clsx(
                            "flex-1 py-4 rounded-2xl text-lg font-bold transition-all duration-300 relative",
                            selectedDayIndex === idx
                                ? "text-rose-600 bg-white shadow-md scale-105 z-10"
                                : "text-rose-400 hover:bg-white/50"
                        )}
                    >
                        <span className="relative z-10">{day.date}</span>
                        {selectedDayIndex === idx && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-white rounded-2xl shadow-sm"
                                initial={false}
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="p-6 min-h-[500px] bg-gradient-to-b from-white to-rose-50/30">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedDayIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center"
                    >
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-black text-rose-500 mb-2">
                                {selectedDay.title}
                            </h2>
                            <p className="text-rose-400 text-lg font-medium">
                                {selectedDay.day}
                            </p>
                        </div>

                        <div className="space-y-8 w-full">
                            {selectedDay.items.map((item, idx) => (
                                <TimelineItem key={idx} item={item} />
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

function TimelineItem({ item }: { item: ItineraryItem }) {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        item.locationQuery || item.title
    )}`;

    return (
        <div className="relative flex flex-col items-center text-center group w-full">
            {/* Removed the vertical line for purer centered look as requested, or keep it subtle? User said "全部自體置中" (All self-centered). I will make the cards centered blocks. */}

            <a
                href={item.locationQuery ? mapUrl : "#"}
                target={item.locationQuery ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="w-full transform transition-all duration-300 hover:scale-[1.02]"
            >
                <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-rose-100 group-hover:shadow-lg group-hover:border-rose-300 transition-all flex flex-col items-center">

                    <div className="inline-flex items-center text-sm font-bold text-rose-500 bg-rose-50 px-4 py-1.5 rounded-full mb-3">
                        <Clock size={16} className="mr-2" />
                        {item.time}
                    </div>

                    <h3 className="text-2xl font-black text-gray-800 mb-2 leading-tight group-hover:text-rose-600 transition-colors">
                        {item.title}
                    </h3>

                    {item.locationQuery && (
                        <div className="flex items-center text-rose-300 text-xs mb-3">
                            <MapPin size={14} className="mr-1" />
                            <span>點擊查看地圖</span>
                        </div>
                    )}

                    {item.note && (
                        <p className="text-base text-gray-600 bg-gray-50 px-4 py-2 rounded-xl mt-1 w-full text-center">
                            {item.note}
                        </p>
                    )}
                </div>
            </a>
        </div>
    );
}
