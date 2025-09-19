"use client";

import { motion } from "framer-motion";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

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
  const segment = params.segment as string;

  // Get product details from URL params
  const name = searchParams.get("name");
  const images = JSON.parse(searchParams.get("images") || "[]");
  const subcategory = searchParams.get("subcategory");
  const description = searchParams.get("description") || "";
  const specs = searchParams.get("specs")
    ? JSON.parse(searchParams.get("specs")!)
    : {};
  const advantages = searchParams.get("advantages")
    ? JSON.parse(searchParams.get("advantages")!)
    : [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  if (!name || !images?.length) {
    return <div>Product not found</div>;
  }

  return (
    <>
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
              href={`/segments/${segment}`}
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back to {segment.replace(/-/g, " ")}
            </Link>
          </motion.div>

          <div className="flex flex-col md:flex-row md:gap-10 gap-5">
            {/* Image Gallery */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="md:w-2/5 space-y-4"
            >
              {/* Main Swiper */}
              <motion.div
                variants={item}
                className="relative aspect-square rounded-xl overflow-hidden bg-white shadow-lg max-w-[500px] max-h-[500px]"
              >
                <Swiper
                  modules={[Navigation, Pagination, Thumbs]}
                  thumbs={{ swiper: thumbsSwiper }}
                  navigation
                  pagination={{ clickable: true }}
                  className="h-full w-full rounded-xl"
                >
                  {images.map((img: string, index: number) => (
                    <SwiperSlide key={index}>
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={img || ""}
                          alt={`${name} - ${index + 1}`}
                          fill
                          unoptimized
                          className="object-contain"
                          draggable={false}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>

              {/* Thumbnails Swiper */}
              {images.length > 1 && (
                <motion.div variants={item} className="max-w-[500px]">
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    watchSlidesProgress={true}
                    className="thumbs-swiper"
                  >
                    {images.map((img: string, index: number) => (
                      <SwiperSlide key={index}>
                        <div className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity">
                          <Image
                            src={img || ""}
                            alt={`${name} thumbnail - ${index + 1}`}
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </motion.div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-6"
            >
              <motion.div variants={item}>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {name}
                </h1>
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

              {advantages.length > 0 && (
                <motion.div variants={item}>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Advantages
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {advantages.map((advantage: string) => (
                      <div
                        key={advantage}
                        className="bg-white p-4 rounded-lg shadow-sm"
                      >
                        {advantage}
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

      <style jsx global>{`
        .thumbs-swiper .swiper-slide {
          opacity: 0.4;
          transition: opacity 0.3s;
        }

        .thumbs-swiper .swiper-slide-thumb-active {
          opacity: 1;
          border: 2px solid #3b82f6;
          border-radius: 0.5rem;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: #3b82f6;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          margin-top: -20px;
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
        }

        .swiper-pagination-bullet {
          background: #3b82f6;
        }
      `}</style>
    </>
  );
}
