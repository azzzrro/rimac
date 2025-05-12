"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { scaffoldingSubcategoryDetails, categoryData } from "@/utils/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import Image from "next/image";

const scaffoldingData = categoryData["scaffolding"];
const subcategories = scaffoldingData.subcategories;

const defaultSubcategory = subcategories[0];

const colorVariants = {
  blue: "bg-blue-600",
  red: "bg-red-600",
  green: "bg-green-600",
};

const ScaffoldingPage = () => {
  const [selectedSubcategory, setSelectedSubcategory] =
    useState<string>(defaultSubcategory);
  const details =
    scaffoldingSubcategoryDetails[
      selectedSubcategory as keyof typeof scaffoldingSubcategoryDetails
    ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header & Filtering */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {scaffoldingData.title}
          </h1>
          <p className="text-xl text-gray-600">{scaffoldingData.description}</p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {subcategories.map((subcategory: string) => (
            <button
              key={subcategory}
              onClick={() => setSelectedSubcategory(subcategory)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedSubcategory === subcategory
                  ? `${
                      colorVariants[
                        scaffoldingData.color as keyof typeof colorVariants
                      ]
                    } text-white`
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {subcategory}
            </button>
          ))}
        </motion.div>

        {/* Subcategory Explanation Section */}
        <section className="mb-12 px-2">
          <motion.h2
            key={details.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-gray-900 mb-4"
          >
            {details.title}
          </motion.h2>
          <motion.p
            key={details.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-700 mb-8"
          >
            {details.description}
          </motion.p>

          {/* Key Features */}
          {details.keyFeatures && details.keyFeatures.length > 0 && (
            <div className="mb-12">
              <motion.h3
                key={details.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-semibold mb-6"
              >
                Key Features
              </motion.h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {details.keyFeatures.map(
                  (
                    feature: {
                      title: string;
                      description: string;
                      icon: React.ElementType;
                    },
                    index: number
                  ) => {
                    return (
                      <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 100,
                        }}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                        key={selectedSubcategory + "-" + feature.title}
                      >
                        <Card className="flex flex-col items-center p-4 py-10 h-full">
                          <motion.div
                            whileHover={{
                              rotate: 360,
                              scale: 1.2,
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <feature.icon className="h-8 w-8 text-blue-600" />
                          </motion.div>

                          <CardContent className="text-center font-medium">
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: index * 0.1 + 0.3 }}
                              className="font-semibold"
                            >
                              {feature.title}
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: index * 0.1 + 0.4 }}
                              className="text-gray-600 text-sm mt-1"
                            >
                              {feature.description}
                            </motion.div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  }
                )}
              </div>
            </div>
          )}

          {/* Technical Specification */}
          {details.technical && (
            <div className="mb-8">
              <h3 className="text-3xl font-semibold mb-5">
                Technical Specification
              </h3>
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left: Image and Title */}
                <div className="flex flex-col items-center md:w-1/3">
                  <Image
                    src={details.technical.image}
                    alt={details.title}
                    width={400}
                    height={300}
                    unoptimized
                    className="mb-2 object-contain bg-white w-full h-auto"
                  />
                </div>
                {/* Right: Accordions */}
                <div className="md:w-2/3">
                  <Accordion type="multiple" className="w-full">
                    {details.technical.accordions.map(
                      (acc: {
                        title: string;
                        description: string;
                        table?: {
                          headers: string[];
                          rows: string[][];
                        };
                      }) => (
                        <AccordionItem value={acc.title} key={acc.title}>
                          <AccordionTrigger className="text-lg font-semibold">
                            {acc.title}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="mb-2 text-gray-700">
                              {acc.description}
                            </div>
                            {/* Table if present */}
                            {acc.table &&
                              acc.table.headers &&
                              acc.table.rows && (
                                <div className="overflow-x-auto">
                                  <Table>
                                    <TableHeader>
                                      <TableRow>
                                        {acc.table.headers.map(
                                          (header: string) => (
                                            <TableHead key={header}>
                                              {header}
                                            </TableHead>
                                          )
                                        )}
                                      </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                      {acc.table.rows.map(
                                        (row: string[], idx: number) => (
                                          <TableRow key={idx}>
                                            {row.map(
                                              (cell: string, cidx: number) => (
                                                <TableCell key={cidx}>
                                                  {cell}
                                                </TableCell>
                                              )
                                            )}
                                          </TableRow>
                                        )
                                      )}
                                    </TableBody>
                                  </Table>
                                </div>
                              )}
                          </AccordionContent>
                        </AccordionItem>
                      )
                    )}
                  </Accordion>
                </div>
              </div>
            </div>
          )}

          {/* Benefits */}
          {details.benefits && details.benefits.length > 0 && (
            <div className="mb-8">
              <h3 className="text-3xl font-semibold mb-5">Benefits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {details.benefits.map(
                  (benefit: {
                    title: string;
                    description: string;
                    icon: React.ElementType;
                  }) => {
                    return (
                      <Card
                        key={benefit.title}
                        className="flex flex-col items-center p-4 py-8"
                      >
                        <benefit.icon className="h-8 w-8 text-green-600" />
                        <CardContent className="text-center font-medium">
                          <div className="font-semibold">{benefit.title}</div>
                          <div className="text-gray-600 text-sm mt-1">
                            {benefit.description}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  }
                )}
              </div>
            </div>
          )}
        </section>

        {/* Product List */}
        {details.products && details.products.length > 0 && (
          <section className="mb-12 px-2">
            <h3 className="text-3xl font-semibold">Products</h3>
            <div className="w-full overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 min-w-[900px] p-6">
                {details.products.map(
                  (
                    product: {
                      name: string;
                      description?: string;
                      image: string;
                    },
                    idx: number
                  ) => (
                    <motion.div
                      key={product.name + idx}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                      }}
                      className="flex-shrink-0 w-64"
                    >
                      <Card className="flex flex-col h-full transition-all duration-300">
                        <CardHeader>
                          <div className="relative aspect-square w-full max-w-[160px] mx-auto bg-white rounded-md mb-2 overflow-hidden">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              unoptimized
                              className="object-contain select-none pointer-events-none"
                              draggable={false}
                            />
                          </div>
                          <CardTitle className="text-base text-center mt-2">
                            {product.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-gray-600 text-xs text-center">
                          {product.description || "No description available."}
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </section>
        )}

        {/* Product Applications */}
        {details.applications && (
          <section className="mb-12 px-2">
            <h3 className="text-3xl font-semibold mb-4">
              Product Applications
            </h3>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Left: Points */}
              <div className="md:w-1/2 grid gap-4">
                {details.applications.points.map(
                  (
                    point: {
                      title: string;
                      description?: string;
                    },
                    idx: number
                  ) => (
                    <motion.div
                      key={point.title || idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                          <span className="text-green-600 font-bold">
                            {idx + 1}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            {point.title}
                          </h4>
                          {point.description && (
                            <p className="text-gray-600 leading-relaxed">
                              {point.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )
                )}
              </div>
              {/* Right: Big Image */}
              <div className="md:w-1/2 flex justify-center h-full">
                <div className="relative w-[350px] md:w-[500px] h-[400px] md:h-[600px] rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    unoptimized
                    src={details.applications.image}
                    alt="Applications"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ScaffoldingPage;
