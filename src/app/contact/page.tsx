"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useSearchParams } from "next/navigation";
// import { toast } from "react-hot-toast";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const segment = searchParams.get("s");
  const product = searchParams.get("p");

  const segmentsMaping = {
    aluminum: "Aluminum",
    "building-materials": "Building Materials",
    "fire-safety": "Fire and Safety Materials",
    scaffolding: "Scaffolding",
    "carbon-steel-pipes": "Carbon Steel Pipes",
  };

  const draftMessage = (productName: string) => {
    return `Hello RIMAC Team,

I'm interested in your ${productName} products. Could you please provide:

• Product specifications and pricing
• Availability and lead times
• Sample availability

Thank you!`;
  };

  const initialValues = {
    name: "",
    interestedItem: segment
      ? segmentsMaping[segment as keyof typeof segmentsMaping]
      : "",
    email: "",
    phone: "",
    message: product ? draftMessage(product) : "",
  };

  const [formData, setFormData] = useState(initialValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // try {
    //   const response = await fetch("/api/send-email", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     setSubmitStatus({
    //       type: "success",
    //       message:
    //         "Thank you! Your message has been sent successfully. We will get back to you soon.",
    //     });
    //     setFormData(initialValues); // Reset form
    //     toast.success("Message sent successfully!");
    //   } else {
    //     throw new Error("Failed to send message");
    //   }
    // } catch {
    //   setSubmitStatus({
    //     type: "error",
    //     message:
    //       "Sorry, there was an error sending your message. Please try again or contact us directly.",
    //   });
    //   toast.error("Failed to send message.");
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero/Header Section */}

      <section className="bg-cover bg-center bg-[url('/bg_new.jpg')] text-white py-16 px-4 relative min-h-[400px] md:min-h-[450px]">
        {/* Optional: Add a dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 h-full">
          <div className="flex-1 z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <h2 className="text-2xl font-semibold mb-4">
              We&apos;d love to hear from you!
            </h2>
            <p className="text-sm mb-6">
              Whether you have a question about our products, need a quote, or
              want to discuss your next project, our team is ready to help.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                King Abdulaziz Road, Riyadh, Saudi Arabia
              </span>
              <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Phone className="w-4 h-4" />
                0510800918
              </span>
              <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@rimac.co
              </span>
              <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Globe className="w-4 h-4" />
                www.rimac.co
              </span>
            </div>
          </div>
          {/* Right side blank for alignment */}
          <div className="flex-1" />
        </div>
      </section>

      {/* Contact Form Section - below map */}
      <section className="w-full flex justify-center mt-[-60px] mb-12 px-4">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 md:p-12 z-10 relative">
          <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Get in Touch with RIMAC
          </h3>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold text-gray-700">
                Full Name<span className="text-red-500">*</span>
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your name..."
                required
                className="bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500 px-4 py-3 rounded-lg"
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="interestedItem"
                className="font-semibold text-gray-700"
              >
                Interested Item<span className="text-red-500">*</span>
              </label>
              <Select
                name="interestedItem"
                required
                value={formData.interestedItem}
                onValueChange={(value) =>
                  setFormData({ ...formData, interestedItem: value })
                }
              >
                <SelectTrigger className="bg-gray-100 w-full border-gray-300 text-gray-900 px-4 py-3 rounded-lg">
                  <SelectValue placeholder="Select a category..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Aluminum">Aluminum</SelectItem>
                  <SelectItem value="Building Materials">
                    Building Materials
                  </SelectItem>
                  <SelectItem value="Fire and Safety">
                    Fire and Safety Materials
                  </SelectItem>
                  <SelectItem value="Scaffolding">Scaffolding</SelectItem>
                  <SelectItem value="Carbon Steel Pipes">
                    Carbon Steel Pipes
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold text-gray-700">
                Email Address<span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                name="email"
                placeholder="Enter your email..."
                required
                className="bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500 px-4 py-3 rounded-lg"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-semibold text-gray-700">
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                placeholder="Enter your phone number..."
                className="bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500 px-4 py-3 rounded-lg"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="message" className="font-semibold text-gray-700">
                Your Message<span className="text-red-500">*</span>
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Type your message here..."
                className="h-32 bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500 px-4 py-3 rounded-lg"
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            {/* Status Message */}
            {submitStatus.type && (
              <div className="md:col-span-2">
                <div
                  className={`p-4 rounded-lg text-center ${
                    submitStatus.type === "success"
                      ? "bg-green-100 text-green-800 border border-green-200"
                      : "bg-red-100 text-red-800 border border-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              </div>
            )}

            <div className="md:col-span-2 flex justify-center mt-2">
              <Button
                variant="secondary"
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Map Section - Full width, top */}
      <section className="w-full pt-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
            Find Us on the Map
          </h2>
          <p className="text-lg text-gray-600">
            Visit our office or get directions to RIMAC&apos;s location in
            Riyadh.
          </p>
        </div>
        <div className="w-full rounded-2xl shadow-lg overflow-hidden">
          <div className="w-full h-[400px] md:h-[500px] bg-gray-200 flex items-center justify-center">
            <iframe
              title="RIMAC Location"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400, borderRadius: "1rem" }}
              src="https://www.openstreetmap.org/export/embed.html?bbox=46.6653%2C24.7036%2C46.6853%2C24.7236&layer=mapnik&marker=24.7136,46.6753"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
