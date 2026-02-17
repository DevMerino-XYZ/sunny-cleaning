"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

const links = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#features" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links.map((l) =>
        document.querySelector(l.href)
      );

      const scrollPos = window.scrollY + 120;

      sections.forEach((section) => {
        if (!section) return;
        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollTo(id: string) {
    const el = document.querySelector(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setIsOpen(false);
  }

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
        <button
          onClick={() => scrollTo("#hero")}
          className="flex items-center gap-2"
        >
          <Image
            src="/logo2.png"
            alt="Sunny's Cleaning Logo"
            width={200}
            height={50}
            className="object-contain"
            priority
          />
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`transition ${
                active === link.href.replace("#", "")
                  ? "text-sky-600 font-semibold"
                  : "hover:text-sky-500"
              }`}
            >
              {link.name}
            </button>
          ))}

          <Button onClick={() => scrollTo("#contact")}>
            Free Estimate
          </Button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-6 space-y-4">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left py-2"
            >
              {link.name}
            </button>
          ))}

          <Button
            className="w-full"
            onClick={() => scrollTo("#contact")}
          >
            Free Estimate
          </Button>
        </div>
      )}
    </nav>
  );
}
