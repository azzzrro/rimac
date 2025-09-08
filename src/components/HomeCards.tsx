"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Users, Leaf, ChevronRight } from "lucide-react"; // Using lucide-react icons
import Link from "next/link";

const services = [
  {
    title: "Building materials",
    image:
      "https://images.unsplash.com/photo-1672541298906-4aeb3edd3520?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/segments/building-materials",
  },
  {
    title: "Fire and Safety materials",
    image:
      "https://images.unsplash.com/photo-1743422855094-25954652f8ad?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/segments/fire-safety",
  },
  {
    title: "Scaffolding",
    image:
      "https://images.unsplash.com/photo-1626471671222-9d89fe4c2668?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/segments/scaffolding",
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
      <section className="py-8 md:py-16 px-6 max-w-7xl mx-auto">
        {/* Aluminum Banner Section */}
        <div className="w-full mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="block">
              <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl group">
                {/* Background Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1714548870002-d25e8329039c?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent group-hover:from-black/80 group-hover:via-black/60 transition-all duration-500" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end px-4 md:px-12 py-8 z-10">
                  <div className="text-white max-w-2xl">
                    <h2 className="text-2xl md:text-4xl font-bold md:mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      Aluminum Solutions
                    </h2>
                    <p className="text-[10px] md:text-medium text-gray-200 mb-6 leading-relaxed">
                      Discover our premium aluminum coils, sheets, and profiles.
                      Lightweight, durable, and corrosion-resistant materials
                      perfect for modern construction and industrial
                      applications.
                    </p>
                    <motion.div
                      whileHover={{ x: 10 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <Link
                        href="/segments/aluminum"
                        className="flex items-center text-blue-400 font-semibold text-sm md:text-lg group-hover:text-blue-300 transition-colors cursor-pointer"
                      >
                        <span className="mr-2">Explore Aluminum Products</span>
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                          }}
                        >
                          <ChevronRight className="w-6 h-6" />
                        </motion.div>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-3xl font-bold mb-8">Other Segments</h2>

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
        <h2 className="text-3xl md:text-3xl font-bold mb-8">Why Choose RIMAC?</h2>

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
