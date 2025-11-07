"use client";
import React from "react";
import {
  CheckCircle,
  Leaf,
  Users,
  TrendingUp,
  Building2,
  HardHat,
  Landmark,
  Wrench,
  MapPin,
  Phone,
  Mail,
  Globe,
  Building,
  Flame,
  Construction,
} from "lucide-react";

const values = [
  {
    icon: CheckCircle,
    title: "Quality",
    description: "Delivering products that meet the highest standards.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Embracing new technologies and processes.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Building long-term relationships with clients.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Reducing environmental impact through eco-friendly practices.",
  },
];

const products = [
  { icon: Building, label: "Building Materials" },
  { icon: Flame, label: "Fire and Safety Materials" },
  { icon: Construction, label: "Scaffolding" },
  { icon: Building2, label: "And more..." },
];

const audience = [
  { icon: Building2, label: "Construction Companies" },
  { icon: Wrench, label: "Contractors & Builders" },
  { icon: HardHat, label: "Architects & Engineers" },
  { icon: Landmark, label: "Government Agencies" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero Section */}
      <section className="bg-cover bg-center bg-[url('/bg_new.jpg')] text-white py-16 px-4 relative min-h-[400px] md:min-h-[450px]">
        {/* Optional: Add a dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 h-full">
          <div className="flex-1 z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <h2 className="text-2xl font-semibold mb-4">
              RIYADH BUILDING MATERIALS AND CONTRACTING CO. (RIMAC)
            </h2>
            <p className="text-sm mb-6">
              RIMAC is a leading supplier of high-quality building materials in
              Saudi Arabia. With a strong commitment to innovation, quality, and
              customer satisfaction, RIMAC has established itself as a trusted
              partner for construction projects across the region.
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

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
        <p className="text-lg text-gray-700">
          To provide top-notch building materials that meet the evolving needs
          of the construction industry, while prioritizing sustainability,
          customer satisfaction, and community engagement.
        </p>
      </section>

      {/* Values Section */}
      <section className="max-w-5xl mx-auto px-4 pb-12">
        <h3 className="text-2xl font-bold text-blue-900 mb-8">Our Values</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((val) => (
            <div
              key={val.title}
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <val.icon className="h-10 w-10 text-blue-700 mb-3" />
              <h4 className="font-semibold text-lg mb-2">{val.title}</h4>
              <p className="text-gray-600 text-sm">{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-5xl mx-auto px-4 pb-12">
        <h3 className="text-2xl font-bold text-blue-900 mb-8">Our Products</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((prod) => (
            <li
              key={prod.label}
              className="bg-white rounded-lg shadow p-4 text-gray-800 font-medium flex items-center gap-3"
            >
              <prod.icon className="w-5 h-5 text-blue-600" /> {prod.label}
            </li>
          ))}
        </ul>
      </section>

      {/* Target Audience Section */}
      <section className="max-w-5xl mx-auto px-4 pb-6">
        <h3 className="text-2xl font-bold text-blue-900 mb-8">Who We Serve</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {audience.map((aud) => (
            <div
              key={aud.label}
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <aud.icon className="h-10 w-10 text-blue-700 mb-3" />
              <h4 className="font-semibold text-lg mb-2">{aud.label}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
