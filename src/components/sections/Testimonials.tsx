"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "../ui/SectionHeading";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const itemsPerView = 3; // Desktop

  // Auto slide
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) =>
        prev + itemsPerView >= testimonials.length
          ? 0
          : prev + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [paused]);

  const visibleItems = testimonials.slice(
    index,
    index + itemsPerView
  );

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-sky-50 to-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading title="What Our Clients Say" />

        <div
          className="relative mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="grid md:grid-cols-3 gap-10">
            <AnimatePresence mode="wait">
              {visibleItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-sky-200"
                >
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="font-bold text-lg text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex mt-4 text-yellow-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  {/* Text */}
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    "{item.text}"
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
