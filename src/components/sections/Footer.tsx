"use client";

import Image from "next/image";
import { Facebook, Instagram, Phone, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const hour = new Date().getHours();
  const isOpen = hour >= 8 && hour <= 18;

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="relative bg-gray-900 text-white pt-16 pb-10 overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-sky-500/20 via-transparent to-yellow-400/20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative">

        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-sky-300">
              Sunny's Cleaning Services LLC
            </h3>

            <p className="mt-4 text-gray-300 leading-relaxed">
              Professional residential and commercial cleaning services.
              We focus on quality, reliability and customer satisfaction.
            </p>

            <a
              href="tel:+16026900183"
              className="flex items-center gap-2 mt-5 text-sky-400 hover:text-sky-300 transition group"
            >
              <Phone size={18} className="group-hover:scale-110 transition" />
              (602) 690-0183
            </a>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-lg mb-4">
              Follow Us
            </h4>

            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61588000828371&ref=PROFILE_EDIT_xav_ig_profile_page_web#"
                target="_blank"
                className="bg-white/10 p-4 rounded-xl hover:bg-sky-500 hover:scale-110 transition duration-300"
              >
                <Facebook />
              </a>

              <a
                href="https://www.instagram.com/sunnyscleaningllc/"
                target="_blank"
                className="bg-white/10 p-4 rounded-xl hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-400 hover:scale-110 transition duration-300"
              >
                <Instagram />
              </a>
            </div>

            <p className="mt-4 text-sm text-gray-400">
              Follow us to see our latest cleanings and results 
            </p>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-lg mb-4">
              Trusted & Verified
            </h4>

            <div className="flex gap-8 items-center">
              <div className="relative group">
                <Image
                  src="/sello.png"
                  alt="Certified Cleaning"
                  width={95}
                  height={95}
                  className="object-contain transition group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full bg-sky-400/20 blur-xl opacity-0 group-hover:opacity-100 transition" />
              </div>

              <div className="relative group">
                <Image
                  src="/sello2.png"
                  alt="Satisfaction Guarantee"
                  width={95}
                  height={95}
                  className="object-contain transition group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl opacity-0 group-hover:opacity-100 transition" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-14 pt-6 text-center text-sm text-gray-400 relative">
          © {new Date().getFullYear()} Sunny's Cleaning Services. All rights reserved.

          {/* Scroll Top */}
          <button
            onClick={scrollTop}
            className="absolute right-0 -top-5 bg-sky-500 hover:bg-sky-600 p-3 rounded-full shadow-lg transition hover:scale-110"
          >
            <ArrowUp size={18} />
          </button>
        </div>

      </div>
    </footer>
  );
}
