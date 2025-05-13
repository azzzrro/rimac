"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const HomeFooter = () => {
  return (
    <motion.footer
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-14 pb-6 px-4 md:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-start">
        {/* Left Side - Company Info */}
        <div className="flex-1 space-y-6 md:pr-8">
          <div className="flex items-center gap-4 mb-2">
            <Image
              src="/full_logo.png"
              alt="RIMAC"
              width={60}
              height={60}
              className="w-auto h-20 md:h-28"
            />
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            RIMAC is a leading manufacturer and supplier of high-quality
            building materials in Saudi Arabia. With years of experience and
            dedication to excellence, we provide innovative solutions for
            construction projects across the region.
          </p>
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 mt-1 text-blue-400" />
            <p className="text-gray-200">
              King Abdulaziz Road, Riyadh, Saudi Arabia
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <Phone className="w-5 h-5 mt-1 text-blue-400" />
            <p className="text-gray-200">0510800918</p>
          </div>
          <div className="flex items-start space-x-3">
            <Mail className="w-5 h-5 mt-1 text-blue-400" />
            <p className="text-gray-200">info@rimac.co</p>
          </div>
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider for desktop */}
        <div className="hidden md:block w-px bg-gray-700 h-auto self-stretch" />

        {/* Right Side - Contact Form */}
        <form className="flex-1 space-y-5 md:pl-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="footer-name"
                className="font-semibold text-xs text-gray-200"
              >
                Full Name<span className="text-red-500">*</span>
              </label>
              <Input
                id="footer-name"
                placeholder="Enter your name..."
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 px-4 py-3 rounded-lg"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="footer-interestedItem"
                className="font-semibold text-xs text-gray-200"
              >
                Interested Item<span className="text-red-500">*</span>
              </label>
              <Select name="interestedItem" required>
                <SelectTrigger className="bg-gray-800 w-full border-gray-700 text-white px-4 py-3 rounded-lg">
                  <SelectValue placeholder="Select a category..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Building Materials">
                    Building Materials
                  </SelectItem>
                  <SelectItem value="Fire and Safety">
                    Fire and Safety Materials
                  </SelectItem>
                  <SelectItem value="Scaffolding">Scaffolding</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="footer-email"
                className="font-semibold text-xs text-gray-200"
              >
                Email Address<span className="text-red-500">*</span>
              </label>
              <Input
                id="footer-email"
                type="email"
                placeholder="Enter your email..."
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 px-4 py-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="footer-phone"
                className="font-semibold text-xs text-gray-200"
              >
                Phone Number
              </label>
              <Input
                id="footer-phone"
                placeholder="Enter your phone number..."
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 px-4 py-3 rounded-lg"
                type="tel"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="footer-message"
              className="font-semibold text-xs text-gray-200"
            >
              Your Message<span className="text-red-500">*</span>
            </label>
            <Textarea
              id="footer-message"
              placeholder="Type your message here..."
              className="h-32 bg-gray-800 border-gray-700 text-white placeholder-gray-400 px-4 py-3 rounded-lg"
              required
            />
          </div>
          <div className="flex justify-start mt-2">
            <Button
              variant="secondary"
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-colors"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
      <div className="max-w-7xl mx-auto mt-12 border-t border-gray-800 pt-6 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">RIMAC</span>. All rights
        reserved.
      </div>
    </motion.footer>
  );
};

export default HomeFooter;
