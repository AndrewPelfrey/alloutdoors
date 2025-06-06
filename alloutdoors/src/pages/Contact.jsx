import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section className="min-h-screen bg-[url('/wood-bg.jpeg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div className="relative z-10 max-w-4xl mx-auto py-20 px-6 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-10 text-orange-400"
        >
          Contact Us
        </motion.h1>

        <motion.form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          variants={container}
          initial="hidden"
          animate="show"
          className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-2xl space-y-6"
        >
          {/* Hidden Inputs for Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                label: "Name",
                name: "name",
                type: "text",
                required: true,
              },
              {
                label: "Email",
                name: "email",
                type: "email",
                required: true,
              },
              {
                label: "Phone",
                name: "phone",
                type: "tel",
                required: true,
              },
            ].map((field) => (
              <motion.div key={field.name} variants={fadeUp}>
                <label className="block text-sm font-medium mb-2">
                  {field.label}
                </label>
                <input
                  {...field}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring focus:ring-orange-400"
                />
              </motion.div>
            ))}

            <motion.div variants={fadeUp}>
              <label className="block text-sm font-medium mb-2">Type of Service</label>
              <div className="relative">
                <select
                  name="service"
                  required
                  className="w-full p-3 pr-10 rounded-lg border border-gray-300 bg-white text-black appearance-none focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 shadow-sm"
                >
                  <option value="" disabled selected>Select a service</option>
                  <optgroup label="Fencing">
                    <option value="install-wood">Wood Fence Installation</option>
                    <option value="install-vinyl">Vinyl Fence Installation</option>
                    <option value="install-chainlink">Chain Link Installation</option>
                    <option value="repair">Fence Repair</option>
                    <option value="removal">Old Fence Removal</option>
                  </optgroup>
                  <optgroup label="Landscaping / Other">
                    <option value="gate-installation">Gate Installation</option>
                    <option value="custom-project">Custom Outdoor Project</option>
                    <option value="other">Other (please describe)</option>
                  </optgroup>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Fence Type / Other Service Needed
              </label>
              <input
                type="text"
                name="fence-type"
                placeholder="e.g. Wood, Vinyl, Chain Link, etc. or describe the service"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring focus:ring-orange-400"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Give us some details about your project..."
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring focus:ring-orange-400"
              />
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.button
              type="submit"
              className="mt-6 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Submit Request
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
