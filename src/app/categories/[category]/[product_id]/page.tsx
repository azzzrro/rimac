"use client";

import { motion } from "framer-motion";
import { useParams, useSearchParams } from "next/navigation";
import { useState, useRef } from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

export default function ProductPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const category = params.category as string;

  // Get product details from URL params
  const name = searchParams.get("name");
  const images = JSON.parse(searchParams.get("images") || "[]");
  const subcategory = searchParams.get("subcategory");
  const description = searchParams.get("description") || "";
  const specs = searchParams.get("specs")
    ? JSON.parse(searchParams.get("specs")!)
    : {};

  const [selectedImage, setSelectedImage] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const imgContainerRef = useRef<HTMLDivElement>(null);

  if (!name || !images?.length) {
    return <div>Product not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-12"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Link
            href={`/categories/${category}`}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to {category.replace(/-/g, " ")}
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            <motion.div
              variants={item}
              className="relative aspect-square rounded-xl overflow-hidden bg-white shadow-lg"
            >
              <div
                ref={imgContainerRef}
                className="w-full h-full relative"
                onMouseEnter={() => setZoom(true)}
                onMouseLeave={() => setZoom(false)}
                onMouseMove={(e) => {
                  const rect = imgContainerRef.current?.getBoundingClientRect();
                  if (!rect) return;
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  setZoomPos({ x, y });
                }}
                style={{ cursor: zoom ? "zoom-out" : "zoom-in" }}
              >
                <Image
                  src={images[selectedImage] || ""}
                  alt={name}
                  fill
                  unoptimized
                  className="object-contain select-none pointer-events-none"
                  draggable={false}
                />
                {zoom && (
                  <div
                    className="hidden md:block absolute inset-0 pointer-events-none z-20 rounded-xl border-2 border-blue-400"
                    style={{
                      backgroundImage: `url(${images[selectedImage]})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                      backgroundSize: "125% 125%",
                      opacity: 1,
                    }}
                  />
                )}
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className={`grid p-1 grid-cols-4 gap-4 ${
                images.length > 4 ? "overflow-x-scroll" : ""
              }`}
            >
              {images.map((img: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                    selectedImage === index
                      ? "ring-2 ring-blue-500"
                      : "hover:ring-2 hover:ring-gray-300"
                  }`}
                >
                  <Image
                    src={img || ""}
                    alt={`${name} - ${index + 1}`}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </button>
              ))}
            </motion.div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <motion.div variants={item}>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{name}</h1>
              <p className="text-lg text-gray-600">{subcategory}</p>
            </motion.div>

            {description && (
              <motion.div variants={item} className="prose max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Product Description
                </h2>
                <p className="text-gray-600">{description}</p>
              </motion.div>
            )}

            {Object.keys(specs).length > 0 && (
              <motion.div variants={item}>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Specifications
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(specs).map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <h3 className="text-sm font-medium text-gray-500">
                        {key}
                      </h3>
                      <p className="text-lg font-semibold text-gray-900">
                        {value as string}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Contact Sales
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
