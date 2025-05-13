"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Users, Leaf } from "lucide-react"; // Using lucide-react icons
import Link from "next/link";

const services = [
  {
    title: "Building materials",
    image:
      "https://images.unsplash.com/photo-1672541298906-4aeb3edd3520?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/categories/building-materials",
  },
  {
    title: "Fire and Safety materials",
    image:
      "https://images.unsplash.com/photo-1743422855094-25954652f8ad?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/categories/fire-safety",
  },
  {
    title: "Scaffolding",
    image:
      "https://images.unsplash.com/photo-1626471671222-9d89fe4c2668?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/categories/scaffolding",
  },
];

const benefits = [
  {
    title: "Top-Quality Materials",
    description:
      "We use only the highest quality, durable materials for lasting results.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable Delivery",
    description:
      "On-time project completion with dependable logistics and planning.",
    icon: Truck,
  },
  {
    title: "Expert Support",
    description:
      "Our experienced team is ready to assist you every step of the way.",
    icon: Users,
  },
  {
    title: "Sustainability",
    description: "Eco-friendly practices that promote a greener future.",
    icon: Leaf,
  },
];

const HomeCards = () => {
  return (
    <>
      <section className="py-16 px-6 max-w-7xl mx-auto cursor-pointer">
        {/* Heading */}
        <h2 className="text-3xl md:text-3xl font-bold mb-8">Categories</h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              href={service.href}
              key={index}
              className="relative h-72 rounded-xl overflow-hidden shadow-lg group"
            >
              {/* Background Image (Animated Only) */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />

              {/* Text */}
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-2xl font-semibold">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="pb-16 px-6 max-w-7xl mx-auto cursor-pointer">
        {/* Heading */}
        <h2 className="text-3xl md:text-3xl font-bold mb-8">Why Choose RIMC</h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative h-72 rounded-2xl overflow-hidden bg-white/70 backdrop-blur-md shadow-lg group border border-gray-200"
            >
              {/* Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-center items-center p-8 space-y-4 z-10">
                {/* Icon with circular background */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-2 shadow-md">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 text-center">
                  {benefit.title}
                </h3>
                {/* Description */}
                <p className="text-sm text-gray-600 text-center">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomeCards;
