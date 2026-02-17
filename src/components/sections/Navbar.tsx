"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

        {/* LOGO */}
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/img/logo.png"
            alt="Sunny's Cleaning Logo"
            width={200}
            height={50}
            className="object-contain"
            priority
          />
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#services" className="hover:text-sky-500 transition">
            Services
          </a>
          <a href="#contact" className="hover:text-sky-500 transition">
            Contact
          </a>

          <Button>Cotización Gratis</Button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-6 space-y-4">
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block"
          >
            Services
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block"
          >
            Contact
          </a>

          <Button className="w-full">
            Cotización Gratis
          </Button>
        </div>
      )}
    </nav>
  );
}
