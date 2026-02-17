"use client";

import { services } from "@/data/services";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4">

        <SectionHeading
          title="Our Cleaning Services"
          subtitle="Professional solutions tailored to your needs"
        />

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="mt-14"
        >
          {services.map((service) => (
            <SwiperSlide key={service.title}>
              <ServiceCard service={service} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Scheduling */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold">
            Flexible Scheduling Options
          </h3>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {["Weekly", "Bi-Weekly", "Monthly", "One Time"].map((plan) => (
              <span
                key={plan}
                className="px-6 py-3 bg-white border rounded-full shadow-sm text-sm font-semibold hover:bg-sky-100 transition"
              >
                {plan}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
