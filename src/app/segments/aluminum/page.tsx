"use client";
import React from "react";
import { motion } from "framer-motion";
import { segmentData } from "@/utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowRight, Shield, Award, Ruler, Gauge, Wrench, MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const currentSegment = segmentData["aluminum"];

const AluminumPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* For aluminum segment, we show banner */}
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
                    backgroundImage: `url('/aluminum_card.png')`,
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
                      Discover our premium aluminum coils, sheets, and profiles.
                      Lightweight, durable, and corrosion-resistant materials
                      perfect for modern construction and industrial
                      applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Categories Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 mt-14"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of premium aluminum solutions
              designed for diverse industrial applications
            </p>
          </div>

          <div className="space-y-8">
            {currentSegment.categories?.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + categoryIndex * 0.1,
                }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Gallery Section */}
                  <div className="relative h-64 lg:h-full flex items-center justify-center">
                    <div className="h-full w-full">
                      <Swiper
                        modules={[Navigation, Pagination]}
                        navigation={category.images.length > 1}
                        pagination={{
                          clickable: true,
                          enabled: category.images.length > 1,
                        }}
                        loop={category.images.length > 1}
                        className="h-full w-full"
                      >
                        {category.images.map(
                          (image: string, imageIndex: number) => (
                            <SwiperSlide
                              key={imageIndex}
                              className="!h-full p-3 md:p-0"
                            >
                              <div className="relative w-full h-full flex items-center justify-center bg-white">
                                <div className="relative w-[80%] h-[80%] rounded-xl overflow-hidden bg-gray-50">
                                  <Image
                                    src={image}
                                    alt={`${category.title} - ${
                                      imageIndex + 1
                                    }`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                    priority={imageIndex === 0}
                                  />
                                </div>
                              </div>
                            </SwiperSlide>
                          )
                        )}
                      </Swiper>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 lg:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 mb-5 leading-relaxed text-sm lg:text-base">
                        {category.description}
                      </p>

                      {/* Key Specifications */}
                      <div className="mb-6">
                        <h4 className="text-base font-bold text-gray-900 mb-3">
                          Key Specifications
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {Object.entries(category.specs || {})
                            .slice(0, 4)
                            .map(([key, value]) => {
                              const getSpecIcon = (specKey: string) => {
                                if (
                                  specKey.toLowerCase().includes("grade") ||
                                  specKey.toLowerCase().includes("material") ||
                                  specKey.toLowerCase().includes("aluminum")
                                )
                                  return Award;
                                if (
                                  specKey.toLowerCase().includes("size") ||
                                  specKey.toLowerCase().includes("range") ||
                                  specKey.toLowerCase().includes("width") ||
                                  specKey.toLowerCase().includes("length")
                                )
                                  return Ruler;
                                if (
                                  specKey.toLowerCase().includes("thickness") ||
                                  specKey.toLowerCase().includes("wall")
                                )
                                  return Gauge;
                                if (specKey.toLowerCase().includes("pressure"))
                                  return Gauge;
                                if (
                                  specKey.toLowerCase().includes("finish") ||
                                  specKey.toLowerCase().includes("surface") ||
                                  specKey.toLowerCase().includes("coating")
                                )
                                  return Shield;
                                if (
                                  specKey.toLowerCase().includes("type") ||
                                  specKey.toLowerCase().includes("standard")
                                )
                                  return Award;
                                return Wrench;
                              };
                              const IconComponent = getSpecIcon(key);
                              return (
                                <div
                                  key={key}
                                  className="flex items-start space-x-2 p-2 bg-gray-50 rounded-lg"
                                >
                                  <IconComponent className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                  <div className="flex flex-col min-w-0">
                                    <span className="text-xs font-medium text-gray-500 truncate">
                                      {key}
                                    </span>
                                    <span className="text-sm text-gray-900 font-semibold">
                                      {String(value)}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      {category.products && category.products.length > 0 ? (
                        <Link
                          href={`/segments/aluminum/${category.key}`}
                          className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium group text-sm"
                        >
                          Explore {category.title}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                      ) : (
                        <div className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-400 text-gray-200 rounded-lg cursor-not-allowed font-medium text-sm">
                          Explore {category.title}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      )}
                      <Link
                        href={`/contact?s=aluminum&p=${category.title}`}
                        className="inline-flex items-center justify-center px-5 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200 font-medium text-sm"
                      >
                        <MailIcon className="w-4 h-4 mr-2" />
                        Enquire
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section - Only for aluminum segment */}
        {currentSegment.benefits && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16"
          >
            <div className="text-center mb-6 md:mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Benefits of Aluminum
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

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(59, 130, 246, 0.5);
          opacity: 1;
          width: 8px;
          height: 8px;
          margin: 0 4px;
        }

        .swiper-pagination-bullet-active {
          background: #3b82f6;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: #3b82f6;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          width: 32px;
          height: 32px;
          margin-top: -16px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: all 0.2s;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 1);
          transform: scale(1.1);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 14px;
          font-weight: bold;
        }

        .swiper-button-disabled {
          opacity: 0.3;
        }

        .swiper-pagination {
          bottom: 12px !important;
        }

        .swiper-slide {
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default AluminumPage;
