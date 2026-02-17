"use client";

import { Phone } from "lucide-react";

export default function FloatingCall() {
  return (
    <a
      href="tel:+16026900183"
      className="fixed bottom-6 right-6 bg-yellow-400 hover:bg-yellow-500 p-4 rounded-full shadow-lg animate-bounce"
    >
      <Phone className="text-white" />
    </a>
  );
}
