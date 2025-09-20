"use client";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  Users,
  Leaf,
  ChevronRight,
  Building2,
  Shield,
  Wrench,
  Cylinder,
} from "lucide-react"; // Using lucide-react icons
import Link from "next/link";

const services = [
  {
    title: "Building Materials",
    description:
      "High-quality construction materials for modern building projects",
    image:
      "https://images.unsplash.com/photo-1672541298906-4aeb3edd3520?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/segments/building-materials",
    icon: Building2,
  },
  {
    title: "Fire and Safety",
    description: "Comprehensive fire protection and safety solutions",
    image: "/fire-safety_home_card.jpeg",
    href: "/segments/fire-safety",
    icon: Shield,
  },
  {
    title: "Scaffolding",
    description: "Professional scaffolding systems for construction projects",
    image:
      "https://images.unsplash.com/photo-1626471671222-9d89fe4c2668?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/segments/scaffolding",
    icon: Wrench,
  },
  {
    title: "Carbon Steel Pipes",
    description: "Durable steel pipes for industrial and plumbing applications",
    image:
      "https://media.istockphoto.com/id/538025236/photo/heap-of-shiny-metal-steel-pipes-with-selective-focus-effect.jpg?s=612x612&w=0&k=20&c=NU2vEghQxU77iNNYFwXbt9Q9TRIJUq5TnsUeQjQVMdY=",
    href: "/segments/carbon-steel-pipes",
    icon: Cylinder,
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
                    backgroundImage: `url('/aluminum_card.png')`,
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
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <Link href={service.href}>
                <div className="group relative h-[400px] rounded-xl overflow-hidden shadow-lg cursor-pointer">
                  {/* Background Image */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
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
                      <service.icon className="w-8 h-8 text-white mb-4" />
                    </motion.div>
                    <motion.h3
                      className="text-2xl font-bold text-white mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p
                      className="text-white/90 text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      {service.description}
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
      </section>

      <section className="pb-16 px-6 max-w-7xl mx-auto cursor-pointer">
        {/* Heading */}
        <h2 className="text-3xl md:text-3xl font-bold mb-8">
          Why Choose RIMAC?
        </h2>

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
