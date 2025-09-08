"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { segmentData, Product } from "@/utils/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function ProductsListPage() {
  const params = useParams();
  const segment = params.segment as string;
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");

  const currentSegment = segmentData[segment];

  if (!currentSegment) {
    return <div>Category not found</div>;
  }

  const filteredProducts =
    selectedSubcategory === "All"
      ? currentSegment.products
      : currentSegment.products?.filter(
          (product: Product) => product.subcategory === selectedSubcategory
        );

  const colorVariants = {
    blue: "bg-blue-600",
    red: "bg-red-600",
    green: "bg-green-600",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {currentSegment.title}
          </h1>
          <p className="text-xl text-gray-600">{currentSegment.description}</p>
        </motion.div>

        {/* For aluminum segment, we show banner */}
        {segment === "aluminum" && (
          <div className="w-full md:mb-8">
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
                      backgroundImage: `url('https://images.unsplash.com/photo-1714548856510-d32f054b8f3a?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent group-hover:from-black/80 group-hover:via-black/60 transition-all duration-500" />

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end px-4 md:px-12 py-8 z-10">
                    <div className="text-white max-w-2xl">
                      <h2 className="text-2xl md:text-4xl font-bold md:mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Top Quality Aluminum
                      </h2>
                      <p className="text-[10px] md:text-medium text-gray-200 md:mb-6 leading-relaxed">
                        Discover our premium aluminum coils, sheets, and
                        profiles. Lightweight, durable, and corrosion-resistant
                        materials perfect for modern construction and industrial
                        applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {currentSegment.subcategories?.map((subcategory: string) => (
            <button
              key={subcategory}
              onClick={() => setSelectedSubcategory(subcategory)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedSubcategory === subcategory
                  ? `${
                      colorVariants[
                        currentSegment.color as keyof typeof colorVariants
                      ]
                    } text-white`
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {subcategory}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {/* Heading for aluminum segment */}
          {segment === "aluminum" && (
            <div className="col-span-full md:mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
                Our Products
              </h2>
              <p className="text-lg text-gray-600 text-center mt-4 max-w-2xl mx-auto">
                Explore our premium aluminum products.
              </p>
            </div>
          )}
          {filteredProducts?.map((product: Product) => (
            <motion.div key={product.id} variants={item} className="group">
              {segment === "fire-safety" || segment === "aluminum" ? (
                <Link
                  href={{
                    pathname: `/segments/${segment}/${product.id}`,
                    query: {
                      name: product.name,
                      images: JSON.stringify(product.images),
                      subcategory: product.subcategory,
                      ...(product.specs && {
                        specs: JSON.stringify(product.specs),
                      }),
                      ...(product.advantages && {
                        advantages: JSON.stringify(product.advantages),
                      }),
                    },
                  }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Product Image */}
                    <div className="relative h-38 overflow-hidden">
                      <motion.img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                    </div>

                    {/* Product Info */}
                    <div className="p-3">
                      <h3 className="text-l font-semibold text-gray-900 mb-2">
                        {product.name}
                      </h3>
                      {product.specs && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {Object.entries(product.specs).map(([key, value]) => (
                            <span
                              key={key}
                              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                            >
                              {key}: {value}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Product Image */}
                  <div className="relative h-38 overflow-hidden">
                    <motion.img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  </div>

                  {/* Product Info */}
                  <div className="p-3">
                    <h3 className="text-l font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    {product.specs && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {Object.entries(product.specs).map(([key, value]) => (
                          <span
                            key={key}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                          >
                            {key}: {value}
                          </span>
                        ))}
                      </div>
                    )}
                    {product.advantages && product.advantages.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {product.advantages.map((advantage: string) => (
                          <span
                            key={advantage}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                          >
                            {advantage}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section - Only for aluminum segment */}
        {segment === "aluminum" && currentSegment.benefits && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16"
          >
            <div className="text-center mb-6 md:mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Benefits
              </h2>
              <p className="text-lg text-gray-600">
                Why choose our aluminum solutions for your projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentSegment.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
