import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section   id="hero" className="pt-28 pb-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE TEXT */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            Professional Cleaning Services in Arizona
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            Reliable, detailed and affordable residential cleaning.
            We make your home shine — so you can relax.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button>Get Free Estimate</Button>

            <a
              href="tel:+16026900183"
              className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
            >
              Call Now: (602) 690-0183
            </a>
          </div>

          <div className="mt-6 flex flex-wrap justify-left gap-x-4 gap-y-2 text-sm font-medium text-gray-600">
            <span className="flex items-center gap-1">
              <span className="text-green-500">✔</span> Satisfaction Guaranteed
            </span>
            <span className="hidden sm:block text-gray-300">|</span>
            <span className="flex items-center gap-1">
              <span className="text-green-500">✔</span> Free Estimates
            </span>
            <span className="hidden sm:block text-gray-300">|</span>
            <span className="flex items-center gap-1">
              <span className="text-green-500">✔</span> Fully Equipped Team
            </span>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE COMPOSITION */}
        <div className="relative h-[520px] hidden lg:block">

          {/* Main Image */}
          <div className="absolute right-0 top-0 w-[75%] h-[75%] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/img/Sun/c1.jpg"
              alt="Clean living room"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Top small */}
          <div className="absolute left-0 top-6 w-[45%] h-[40%] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/img/Sun/6.jpg"
              alt="Kitchen cleaning"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom small */}
          <div className="absolute left-10 bottom-0 w-[50%] h-[42%] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/img/Sun/h3.jpg"
              alt="Bathroom cleaning"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
