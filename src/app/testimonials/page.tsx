"use client";
import React from "react";
import { Star, Quote, MapPin, Phone, Mail, Globe } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Abdullah Al-Shammari",
    title: "Project Manager",
    image: "/avatar.svg",
    text: "RIMAC is our first choice for all our projects. The product quality and customer service are truly excellent.",
    rating: 5,
  },
  {
    name: "Sarah Al-Otaibi",
    title: "Architect",
    image: "/avatar.svg",
    text: "I've worked with RIMAC on several projects, and their commitment to quality and deadlines is always impressive.",
    rating: 5,
  },
  {
    name: "Faisal Al-Dosari",
    title: "Construction Contractor",
    image: "/avatar.svg",
    text: "RIMAC's products are durable and their prices are competitive. I recommend them to any company looking for a reliable supplier.",
    rating: 4,
  },
  {
    name: "Noura Al-Subaie",
    title: "Procurement Manager",
    image: "/avatar.svg",
    text: "RIMAC's customer service is fast and efficient. We're happy to work with them regularly.",
    rating: 5,
  },
  {
    name: "Mohammed Al-Qahtani",
    title: "Civil Engineer",
    image: "/avatar.svg",
    text: "RIMAC provides innovative solutions and high-quality building materials. Their team is extremely professional.",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero/Header Section (same as About Us) */}
      <section className="bg-cover bg-center bg-[url('/bg_new.jpg')] text-white py-16 px-4 relative min-h-[400px] md:min-h-[450px]">
        {/* Optional: Add a dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 h-full">
          <div className="flex-1 z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Testimonials
            </h1>
            <h2 className="text-2xl font-semibold mb-4">
              What Our Clients Say About RIMAC
            </h2>
            <p className="text-sm mb-6">
              We are proud of the trust our clients place in us across Saudi
              Arabia. Here are some testimonials from customers who have
              experienced our product quality and service.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Al Arid District, Riyadh, Saudi Arabia
              </span>
              <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Phone className="w-4 h-4" />
                0510800918
              </span>
              <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@rimac.co
              </span>
              <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Globe className="w-4 h-4" />
                www.rimac.co
              </span>
            </div>
          </div>
          {/* Right side blank for alignment */}
          <div className="flex-1" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Our Clients&apos; Feedback
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow relative"
            >
              <Quote className="absolute -top-4 -left-4 w-8 h-8 text-blue-100 opacity-30" />
              <div className="relative w-20 h-20 mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="rounded-full object-cover border-4 border-blue-100"
                  unoptimized
                />
              </div>
              <div className="flex gap-1 mb-2 justify-center">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 text-base mb-4">{t.text}</p>
              <div className="font-bold text-blue-900">{t.name}</div>
              <div className="text-sm text-gray-500 mb-1">{t.title}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
