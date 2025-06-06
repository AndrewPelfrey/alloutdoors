import Operation from "../components/Operation";
import { FaBullseye, FaHandshake, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/wood-bg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="relative h-full flex items-center justify-center">
          <motion.img
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            src="/all-outdoor.jpeg"
            alt="All Outdoor Fence Logo"
            className="h-56 md:h-72 lg:h-80 object-contain drop-shadow-lg"
          />
        </div>
      </section>

      <section className="bg-gray-100 py-20 text-gray-800">
        <div className="max-w-5xl mx-auto px-4 space-y-10">
          <motion.h1
            className="text-4xl md:text-5xl font-display font-bold text-center text-flag-red"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About All Outdoor Fence
          </motion.h1>

          <motion.p
            className="text-lg leading-relaxed text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            For over 22 years, All Outdoor Fence has proudly served the Greater Cleveland area
            with expert fencing solutions. As a licensed and insured contractor, we specialize in
            custom installations that prioritize quality, durability, and customer satisfaction.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            <motion.div
              className="bg-white p-6 rounded-xl shadow text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FaBullseye className="text-4xl text-flag-red mb-4 mx-auto" />
              <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
              <p>
                To deliver high-quality fencing services that enhance the safety, privacy,
                and beauty of every home and business we work with.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FaHandshake className="text-4xl text-flag-red mb-4 mx-auto" />
              <h2 className="text-xl font-semibold mb-2">Our Values</h2>
              <p>
                Integrity, craftsmanship, and reliability drive everything we do.
                We treat every property like it’s our own.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FaStar className="text-4xl text-flag-red mb-4 mx-auto" />
              <h2 className="text-xl font-semibold mb-2">Our Reputation</h2>
              <p>
                Trusted by homeowners and businesses alike, our work stands out
                for its durability and professional finish. Most of our business comes from referrals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Operation />

      <section className="bg-flag-red text-white text-center py-16">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to build your dream fence?
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Reach out today to schedule your free estimate or consultation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-flag-red font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-transform transform hover:scale-105 shadow"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
    </>
  );
}

export default About;
