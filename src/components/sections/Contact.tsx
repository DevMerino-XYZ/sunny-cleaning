"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // Simulación envío (luego conectamos a email)
    await new Promise((r) => setTimeout(r, 1500));

    setLoading(false);
    setSent(true);
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Get Your Free Estimate"
          subtitle="Tell us about your cleaning needs and we will contact you shortly."
        />

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE - QUICK CONTACT */}
          <div className="space-y-8">

            <div className="bg-sky-50 p-8 rounded-2xl border">
              <h3 className="text-2xl font-bold text-gray-800">
                Need Immediate Help?
              </h3>

              <p className="mt-3 text-gray-600">
                Contact us directly for faster response.
              </p>

              <div className="mt-6 space-y-4">

                <a
                  href="tel:+16026900183"
                  className="block w-full text-center bg-sky-600 text-white py-4 rounded-xl font-semibold hover:bg-sky-700 transition"
                >
                   Call (602) 690-0183
                </a>

                <a
                  href="https://wa.me/16026900183?text=Hello%20I%20would%20like%20a%20cleaning%20estimate"
                  target="_blank"
                  className="block w-full text-center bg-green-500 text-white py-4 rounded-xl font-semibold hover:bg-green-600 transition"
                >
                   WhatsApp Message
                </a>

              </div>
            </div>

            <div className="text-sm text-gray-500">
              ✔ Free Estimates <br />
              ✔ Satisfaction Guaranteed <br />
              ✔ We Bring Our Own Equipment
            </div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border space-y-5"
          >
            <input
              required
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />

            <input
              required
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />

            <select
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            >
              <option value="">Type of Service</option>
              <option>General Cleaning</option>
              <option>Deep Cleaning</option>
              <option>Office Cleaning</option>
              <option>Move In / Move Out</option>
              <option>Windows</option>
            </select>

            <select
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <option value="">Frequency</option>
              <option>One Time</option>
              <option>Weekly</option>
              <option>Bi-Weekly</option>
              <option>Monthly</option>
            </select>

            <textarea
              rows={4}
              placeholder="Tell us about your property (beds, baths, pets, etc)"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />

            <Button className="w-full">
              {loading ? "Sending..." : sent ? "Request Sent ✓" : "Request Free Estimate"}
            </Button>

            {sent && (
              <p className="text-green-600 text-center font-medium">
                We will contact you shortly!
              </p>
            )}
          </motion.form>

        </div>
      </div>
    </section>
  );
}
