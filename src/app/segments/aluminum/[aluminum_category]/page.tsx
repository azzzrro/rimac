"use client";

import { motion } from "framer-motion";
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

const AluminumCategoryPage = () => {
  const params = useParams();
  const aluminumCategory = params.aluminum_category as string;
  const currentSegment = segmentData["aluminum"]?.categories?.find(
    (category) => category.key === aluminumCategory
  );

  if (!currentSegment) {
    return <div>Category not found</div>;
  }

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

        {/* Products Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {currentSegment.products?.map((product: Product) => (
            <motion.div key={product.id} variants={item} className="group">
              <Link
                href={{
                  pathname: `/segments/aluminum/${aluminumCategory}/${product.id}`,
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
                        {Object.entries(product.specs)
                          .slice(0, 4)
                          .map(([key, value]) => (
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AluminumCategoryPage;
