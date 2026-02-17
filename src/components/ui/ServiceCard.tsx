"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Service } from "@/types/service";

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-2xl overflow-hidden shadow-lg"
    >
      {/* IMAGE */}
      <div className="relative h-[300px]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="absolute bottom-0 p-6 text-white">
        <h3 className="text-xl font-bold">
          {service.title}
        </h3>

        <p className="text-sm mt-2 opacity-90">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}
