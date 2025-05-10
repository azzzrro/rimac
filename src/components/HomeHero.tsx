"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1694018359679-49465b4c0d61?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "  RIYADH INFRASTRUCTURE MATERIALS AND CONTRACTING CO",
      subtitle: "Delivering excellence in Saudi Arabia",
    },
    {
      image:
        "https://images.unsplash.com/photo-1720036236694-d0a231c52563?q=80&w=3240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:
        "Leading Building & Construction Materials Company in Saudi Arabia",
      subtitle: "Your trusted partner in construction",
    },
    {
      image:
        "https://images.unsplash.com/photo-1586715065342-98d1f6016fd1?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "All Building & Construction Materials Under One Roof",
      subtitle: "Building the future of Saudi Arabia",
    },
  ];

  const handleSlideChange = () => {
    setIsAnimating(true);
    setIsAnimating(false);
  };

  return (
    <div className="relative h-[90vh] w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.activeIndex);
          handleSlideChange();
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute left-8 bottom-16 md:left-20 md:bottom-20 text-white">
              <AnimatePresence mode="wait">
                {!isAnimating && (
                  <>
                    <motion.h1
                      key={`title-${activeSlide}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 1 }}
                      className="text-4xl md:text-6xl font-bold max-w-5xl leading-tight"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      key={`subtitle-${activeSlide}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="mt-4 text-lg md:text-2xl max-w-xl"
                    >
                      {slide.subtitle}
                    </motion.p>
                  </>
                )}
              </AnimatePresence>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
