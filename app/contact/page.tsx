"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitStatus({
        type: "success",
        message: "Thank you for your message! We'll get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FB]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[420px] md:h-[480px] overflow-hidden rounded-b-3xl flex items-center"
      >
        <Image src="/about-hero.png" alt="Contact Hero" fill className="object-cover w-full h-full" />
       
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative z-10 max-w-2xl mx-auto md:ml-20 px-6 md:px-0"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-24 md:mt-0 leading-tight">A one-stop-shop for all your GCC needs</h1>
          <button className="inline-block bg-white text-[#0A1E40] font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition-colors w-auto self-start">Lets Connect</button>
        </motion.div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto w-full px-4 py-12"
      >
        <motion.div variants={itemVariants} className="bg-[#FFF3F3] rounded-3xl p-8 md:p-12 flex flex-col gap-8">
          <h2 className="text-2xl font-bold mb-4 text-[#E94B8A]">
            Got a question, an idea, or <span className="text-[#E94B8A] font-bold">just curious</span><br />about how we can partner together?
          </h2>
          
          {submitStatus.type && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg ${
                submitStatus.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              {submitStatus.message}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-[#0A1E40] font-medium">First name <span className="text-[#E94B8A]">*</span></label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className="rounded px-4 py-2 border border-gray-200 focus:border-[#E94B8A] focus:outline-none"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <label htmlFor="lastName" className="text-[#0A1E40] font-medium">Last name <span className="text-[#E94B8A]">*</span></label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Carter"
                className="rounded px-4 py-2 border border-gray-200 focus:border-[#E94B8A] focus:outline-none"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-[#0A1E40] font-medium">Phone <span className="text-[#E94B8A]">*</span></label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9XXXX XXXXX"
                className="rounded px-4 py-2 border border-gray-200 focus:border-[#E94B8A] focus:outline-none"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[#0A1E40] font-medium">Email <span className="text-[#E94B8A]">*</span></label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Carter@mail.com"
                className="rounded px-4 py-2 border border-gray-200 focus:border-[#E94B8A] focus:outline-none"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="md:col-span-2 flex flex-col gap-2">
              <label htmlFor="message" className="text-[#0A1E40] font-medium">Message <span className="text-[#E94B8A]">*</span></label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="I wanna understand more about your services"
                className="rounded px-4 py-2 border border-gray-200 focus:border-[#E94B8A] focus:outline-none min-h-[80px]"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="md:col-span-2 flex justify-start mt-2">
              <button
                type="submit"
                disabled={isLoading}
                className={`bg-[#0A1E40] text-white font-semibold px-8 py-2 rounded shadow transition-colors ${
                  isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#23325B]"
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send"
                )}
              </button>
            </motion.div>
          </form>
        </motion.div>
      </motion.section>

      {/* Contact Details Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto w-full px-4 py-12"
      >
        <motion.div variants={itemVariants} className="bg-[#FFF3F3] rounded-3xl p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-[#0A1E40]">Get in Touch</h3>
            <div className="flex flex-col gap-2">
              <p className="text-[#0A1E40]">Email: contact@enabler.com</p>
              <p className="text-[#0A1E40]">Phone: +91 123 456 7890</p>
              <p className="text-[#0A1E40]">Address: 123 Business Street, City, Country</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-[#0A1E40]">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-[#0A1E40] hover:text-[#E94B8A] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-[#0A1E40] hover:text-[#E94B8A] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-[#0A1E40] hover:text-[#E94B8A] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
} 