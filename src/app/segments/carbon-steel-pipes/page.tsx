"use client";

import { motion } from "framer-motion";
import { segmentData } from "@/utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Award,
  Ruler,
  Gauge,
  Wrench,
  CheckCircle,
  Info,
  MailIcon,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductsListPage() {
  const currentSegment = segmentData["carbon-steel-pipes"];

  if (!currentSegment) {
    return <div>Category not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
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
                    backgroundImage: `url('https://images.unsplash.com/photo-1707596830261-9c6138a6dd3b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent group-hover:from-black/80 group-hover:via-black/60 transition-all duration-500" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end px-4 md:px-12 py-8 z-10">
                  <div className="text-white max-w-2xl">
                    <h2 className="text-2xl md:text-4xl font-bold md:mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      Carbon Steel Pipes
                    </h2>
                    <p className="text-[10px] md:text-medium text-gray-200 md:mb-6 leading-relaxed">
                      Discover our high-quality carbon steel pipes and fittings.
                      Strong, reliable, and cost-effective solutions perfect for
                      plumbing, structural, and industrial applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 mt-14"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Top Quality Carbon Steel Pipes
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              {currentSegment.description}
            </p>
          </div>

          <div className="space-y-8">
            {currentSegment.products?.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.1,
                }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Gallery Section */}
                  <div className="relative h-64 lg:h-full flex items-center justify-center">
                    <div className="h-full w-full">
                      <Swiper
                        modules={[Navigation, Pagination]}
                        navigation={product.images?.length > 1}
                        pagination={{
                          clickable: true,
                          enabled: product.images?.length > 1,
                        }}
                        loop={product.images?.length > 1}
                        className="h-full w-full"
                      >
                        {product.images?.map(
                          (image: string, imageIndex: number) => {
                            console.log(image, "image");
                            return (
                              <SwiperSlide
                                key={imageIndex}
                                className="!h-full p-3 md:p-0"
                              >
                                <div className="relative w-full h-full flex items-center justify-center bg-white">
                                  <div className="relative w-[80%] h-[80%] rounded-xl overflow-hidden bg-gray-50">
                                    <Image
                                      src={image}
                                      alt={`${product.name} - ${
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
                            );
                          }
                        )}
                      </Swiper>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 lg:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-5 leading-relaxed text-sm lg:text-base">
                        {product.description}
                      </p>

                      {/* Key Specifications */}
                      <div className="mb-6">
                        <h4 className="text-base font-bold text-gray-900 mb-3">
                          Key Specifications
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {Object.entries(product.specs || {}).map(
                            ([key, value]) => {
                              const getSpecIcon = (specKey: string) => {
                                if (
                                  specKey.toLowerCase().includes("grade") ||
                                  specKey.toLowerCase().includes("material")
                                )
                                  return Award;
                                if (
                                  specKey.toLowerCase().includes("size") ||
                                  specKey.toLowerCase().includes("range")
                                )
                                  return Ruler;
                                if (
                                  specKey.toLowerCase().includes("thickness") ||
                                  specKey.toLowerCase().includes("wall")
                                )
                                  return Gauge;
                                if (specKey.toLowerCase().includes("pressure"))
                                  return Gauge;
                                if (specKey.toLowerCase().includes("length"))
                                  return Ruler;
                                if (
                                  specKey.toLowerCase().includes("finish") ||
                                  specKey.toLowerCase().includes("surface")
                                )
                                  return Shield;
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
                            }
                          )}
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={`/contact?s=carbon-steel-pipes&p=${product.name}`}
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium group text-sm"
                      >
                        <MailIcon className="w-4 h-4 mr-2" />
                        Enquire {product.name}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specifications Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-8 mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              UL Listed Black Plain Ended Steel Pipes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conforming/Tested to ASTM A53 Grade B SCH40 - Complete
              specifications for all standard sizes
            </p>
          </div>

          <div className="bg-white max-w-5xl mx-auto rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <Table>
              <TableCaption className="py-3">
                Complete specifications for UL Listed Black Plain Ended Steel
                Pipes
              </TableCaption>
              <TableHeader>
                <TableRow className="bg-gray-900 hover:bg-gray-800 h-14">
                  <TableHead className="text-white font-semibold px-12">
                    SIZE
                  </TableHead>
                  <TableHead className="text-white font-semibold">
                    THICKNESS(MM)
                  </TableHead>
                  <TableHead className="text-white font-semibold">
                    CLASS
                  </TableHead>
                  <TableHead className="text-white font-semibold">
                    TYPE
                  </TableHead>
                  <TableHead className="text-white font-semibold">
                    LENGTH MTR
                  </TableHead>
                  <TableHead className="text-white font-semibold">
                    PCS/BUNDLES
                  </TableHead>
                  <TableHead className="text-white font-semibold">
                    KG/MTR
                  </TableHead>
                  <TableHead className="text-white font-semibold px-12">
                    KG/6 MTR
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium px-12">1/2&quot;</TableCell>
                  <TableCell>2.77</TableCell>
                  <TableCell>ASTM</TableCell>
                  <TableCell>BPE</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>120</TableCell>
                  <TableCell>1.27</TableCell>
                  <TableCell className="px-12">7.62</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium px-12">3/4&quot;</TableCell>
                  <TableCell>2.87</TableCell>
                  <TableCell>ASTM</TableCell>
                  <TableCell>BPE</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>84</TableCell>
                  <TableCell>1.69</TableCell>
                  <TableCell className="px-12">10.14</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium px-12">1&quot;</TableCell>
                  <TableCell>3.38</TableCell>
                  <TableCell>ASTM</TableCell>
                  <TableCell>BPE</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>60</TableCell>
                  <TableCell>2.5</TableCell>
                  <TableCell className="px-12">15</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium px-12">
                    1 1/4&quot;
                  </TableCell>
                  <TableCell>3.56</TableCell>
                  <TableCell>ASTM</TableCell>
                  <TableCell>BPE</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>42</TableCell>
                  <TableCell>3.39</TableCell>
                  <TableCell className="px-12">20.34</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium px-12">
                    1 1/2&quot;
                  </TableCell>
                  <TableCell>3.68</TableCell>
                  <TableCell>ASTM</TableCell>
                  <TableCell>BPE</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>36</TableCell>
                  <TableCell>4.05</TableCell>
                  <TableCell className="px-12">24.3</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium px-12">2&quot;</TableCell>
                  <TableCell>3.91</TableCell>
                  <TableCell>ASTM</TableCell>
                  <TableCell>BPE</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>26</TableCell>
                  <TableCell>5.44</TableCell>
                  <TableCell className="px-12">32.64</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium px-12">
                    2 1/2&quot;
                  </TableCell>
                  <TableCell>5.16</TableCell>
                  <TableCell>ASTM</TableCell>
                  <TableCell>BPE</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>18</TableCell>
                  <TableCell>8.63</TableCell>
                  <TableCell className="px-12">51.78</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium px-12">3&quot;</TableCell>
                  <TableCell>5.49</TableCell>
                  <TableCell>ASTM</TableCell>
                  <TableCell>BPE</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>14</TableCell>
                  <TableCell>11.29</TableCell>
                  <TableCell className="px-12">67.74</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium px-12">3.5&quot;</TableCell>
                  <TableCell>5.74</TableCell>
                  <TableCell>ASTM</TableCell>
                  <TableCell>BPE</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>14</TableCell>
                  <TableCell>11.29</TableCell>
                  <TableCell className="px-12">67.74</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium px-12">4&quot;</TableCell>
                  <TableCell>6.02</TableCell>
                  <TableCell>ASTM</TableCell>
                  <TableCell>BPE</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>10</TableCell>
                  <TableCell>16.07</TableCell>
                  <TableCell className="px-12">96.42</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium px-12">5&quot;</TableCell>
                  <TableCell>6.55</TableCell>
                  <TableCell>ASTM</TableCell>
                  <TableCell>BPE</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>7</TableCell>
                  <TableCell>21.77</TableCell>
                  <TableCell className="px-12">130.62</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium px-12">6&quot;</TableCell>
                  <TableCell>7.11</TableCell>
                  <TableCell>ASTM</TableCell>
                  <TableCell>BPE</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>7</TableCell>
                  <TableCell>28.26</TableCell>
                  <TableCell className="px-12">169.56</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium px-12">8&quot;</TableCell>
                  <TableCell>8.18</TableCell>
                  <TableCell>ASTM</TableCell>
                  <TableCell>BPE</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>42.55</TableCell>
                  <TableCell className="px-12">255.3</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="mt-6 max-w-5xl mx-auto p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center mb-3">
              <Info className="w-5 h-5 text-blue-600 mr-2" />
              <h4 className="text-sm font-semibold text-gray-900">
                Specifications Notes:
              </h4>
            </div>
            <ul className="text-sm text-gray-800 space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                All pipes conform to ASTM A53 Grade B SCH40 standards
              </li>
              <li className="flex items-start">
                <Shield className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                BPE (Black Plain Ended) finish for industrial applications
              </li>
              <li className="flex items-start">
                <Ruler className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                Standard length: 6 meters per piece
              </li>
              <li className="flex items-start">
                <Award className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                UL Listed for safety and quality assurance
              </li>
              <li className="flex items-start">
                <Wrench className="w-4 h-4 text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                Suitable for plumbing, structural, and industrial applications
              </li>
            </ul>
          </div>
        </motion.div>
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
}
