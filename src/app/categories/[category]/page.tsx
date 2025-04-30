"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { categoryData, Product } from "@/utils/constants";

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
  const category = params.category as string;
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");

  const currentCategory = categoryData[category];

  if (!currentCategory) {
    return <div>Category not found</div>;
  }

  const filteredProducts =
    selectedSubcategory === "All"
      ? currentCategory.products
      : currentCategory.products.filter(
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
            {currentCategory.title}
          </h1>
          <p className="text-xl text-gray-600">{currentCategory.description}</p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {currentCategory.subcategories.map((subcategory: string) => (
            <button
              key={subcategory}
              onClick={() => setSelectedSubcategory(subcategory)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedSubcategory === subcategory
                  ? `${
                      colorVariants[
                        currentCategory.color as keyof typeof colorVariants
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
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {filteredProducts.map((product: Product) => (
            <motion.div key={product.id} variants={item} className="group">
              {category === "fire-safety" ? (
                <Link
                  href={{
                    pathname: `/categories/${category}/${product.id}`,
                    query: {
                      name: product.name,
                      images: JSON.stringify(product.images),
                      subcategory: product.subcategory,
                      ...(product.specs && {
                        specs: JSON.stringify(product.specs),
                      }),
                    },
                  }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Product Image */}
                    <div className="relative h-64 overflow-hidden">
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
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
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
                  <div className="relative h-64 overflow-hidden">
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
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
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
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
