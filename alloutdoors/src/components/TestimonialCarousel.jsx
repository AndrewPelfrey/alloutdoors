import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState, useRef } from "react";
import { FaFacebook } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Dylan Ahern",
    quote: "Matt was super helpful from the beginning. My neighbors fence was installed poorly by another company and he assured me mine would be done right. Sure enough it looks amazing. Thanks again!",
  },
  {
    name: "Christine Albright",
    quote: "All Outdoor Fence & More did a great job on my fence!  Great communication, very professional and they had it up quickly !!! I highly recommend this company as you will be very satisfied with their work!!!!❤️❤️❤️❤️❤️",
  },
  {
    name: "Elizabeth Coleman",
    quote: "Matt and his team did a great job installing a gate for my driveway. It is solid, sturdy and neat. The gate secures the backyard and my dog can now run freely and safely...",
  },
  {
    name: "Anna Cvitkovich",
    quote: "Matt did an excellent job installing my fence. He was professional, responsive, and took the time to answer all my questions without making me feel rushed or pressured. The pricing was fair and transparent—no surprises...",
  },
  {
    name: "Candy Dylag",
    quote: "Matt and Tyler not only did an outstanding job making my previous fence puppy safe, for Frankie, but they were above professional and their work was top notch. You could not ask for a better job. Excellent workmanship...",
  },
  {
    name: "Jon Dunn",
    quote: "Matt and crew did 60 feet of 6 foot wood and 60 feet of black on silver 5 foot chainlink plus 3 gates for us. Fast turn around, great price and it looks great and keeps our dogs safe. highly recommended!",
  },
];

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gray-100 py-14 px-4 text-gray-800"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-flag-red">
        What Our Customers Say
      </h2>

      <div ref={sliderRef} className="keen-slider max-w-xl mx-auto px-4">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="keen-slider__slide bg-white rounded-xl shadow-md p-5"
          >
            <p className="text-sm sm:text-base italic mb-3 leading-relaxed">
              “{t.quote}”
            </p>
            <p className="text-sm font-semibold text-right text-gray-700">
              – {t.name}
            </p>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, idx) => (
          <div
            key={idx}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === idx
                ? "bg-flag-red scale-110"
                : "bg-gray-300 opacity-60"
            }`}
          />
        ))}
      </div>

      {/* Facebook link */}
      <div className="mt-6 flex justify-center items-center gap-2 text-sm text-gray-700">
        <a
          href="https://www.facebook.com/YourPageHere"
          target="_blank"
          rel="noopener noreferrer"
          className="text-flag-red hover:text-blue-600 transition transform hover:scale-110"
        >
          <FaFacebook className="w-6 h-6" />
        </a>
      </div>
    </motion.section>
  );
}
