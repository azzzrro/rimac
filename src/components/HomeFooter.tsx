"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const HomeFooter = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-12 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Company Info */}
        <div className="space-y-6">
          <Image
            src="/full_logo.png"
            alt="RIMAC"
            width={100}
            height={100}
            className="w-auto h-44 mb-0"
          />
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 mt-1 text-blue-400" />
            <p>King Abdulaziz Road, Riyadh, Saudi Arabia</p>
          </div>

          <div className="flex items-start space-x-3">
            <Phone className="w-5 h-5 mt-1 text-blue-400" />
            <p>0510800918</p>
          </div>

          <div className="flex items-start space-x-3">
            <Mail className="w-5 h-5 mt-1 text-blue-400" />
            <p>info@rimac.co</p>
          </div>

          <p className="text-gray-400 text-sm mt-6">
            © {new Date().getFullYear()} RIMAC All rights reserved.
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Your Name" required />
            <Input placeholder="Phone Number" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input type="email" placeholder="Email Address" required />
            <Input placeholder="Subject" />
          </div>

          <Textarea placeholder="Your Message" className="h-32" required />

          <Button
            variant="secondary"
            type="submit"
            className="w-full md:w-auto"
          >
            Send Message
          </Button>
        </form>
      </div>
    </motion.footer>
  );
};

export default HomeFooter;
