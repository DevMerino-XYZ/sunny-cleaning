"use client";

import { motion } from "framer-motion";
import { features } from "@/data/features";
import SectionHeading from "../ui/SectionHeading";

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-white to-sky-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Why Choose Sunny's Cleaning?"
          subtitle="Professional service you can trust."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                }}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 text-center border border-transparent hover:border-sky-200"
              >
                <div className="flex justify-center">
                  <div className="bg-sky-100 group-hover:bg-yellow-400 transition-colors duration-300 p-4 rounded-full">
                    <Icon
                      size={36}
                      className="text-sky-600 group-hover:text-white transition-colors"
                    />
                  </div>
                </div>

                <h3 className="font-bold mt-6 text-xl text-gray-800">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
