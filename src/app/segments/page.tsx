"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  FireExtinguisher,
  Construction,
  ChevronRight,
} from "lucide-react";

const categories = [
  {
    title: "Building Materials",
    description:
      "Premium quality materials for your construction needs. From foundation to finish, we've got you covered.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1672541298906-4aeb3edd3520?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/segments/building-materials",
  },
  {
    title: "Fire and Safety Materials",
    description:
      "Protect what matters most with our comprehensive range of fire safety equipment and materials.",
    icon: FireExtinguisher,
    image:
      "https://images.unsplash.com/photo-1743422855094-25954652f8ad?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/segments/fire-safety",
  },
  {
    title: "Scaffolding",
    description:
      "Safe, reliable, and efficient scaffolding solutions for all your construction projects.",
    icon: Construction,
    image:
      "https://images.unsplash.com/photo-1626471671222-9d89fe4c2668?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/segments/scaffolding",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.5,
    },
  },
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-center mb-4"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-center max-w-2xl"
          >
            Discover our comprehensive range of high-quality construction
            materials and solutions
          </motion.p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 md:py-16 py-8">
        {/* Aluminum Banner Section */}
        <div className="w-full md:mb-16 mb-8">
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
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div key={category.title} variants={item}>
              <Link href={category.href}>
                <div className="group relative h-[400px] rounded-xl overflow-hidden shadow-lg cursor-pointer">
                  {/* Background Image */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${category.image})` }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />

                  {/* Content */}
                  <motion.div
                    className="absolute inset-0 flex flex-col justify-end p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <category.icon className="w-12 h-12 text-white mb-4" />
                    </motion.div>
                    <motion.h3
                      className="text-2xl font-bold text-white mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {category.title}
                    </motion.h3>
                    <motion.p
                      className="text-white/90 text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      {category.description}
                    </motion.p>

                    {/* Hover Arrow */}
                    <motion.div
                      className="absolute bottom-6 right-6 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 0, x: 20 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </motion.div>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
