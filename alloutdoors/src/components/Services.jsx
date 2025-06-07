import { useRef } from "react";
import { FaTools, FaTree, FaWater, FaSeedling, FaBullhorn } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  { name: "Dylan Ahern", quote: "Matt was super helpful from the beginning. My neighbors fence was installed poorly by another company and he assured me mine would be done right. Sure enough it looks amazing. Thanks again!" },
  { name: "Christine Albright", quote: "Great communication, very professional and they had it up quickly! Highly recommend!" },
  { name: "Elizabeth Coleman", quote: "Solid and neat gate installation—now my dog can run freely and safely!" },
  { name: "Anna Cvitkovich", quote: "Professional, responsive, and no pressure—really happy with the final result!" },
  { name: "Candy Dylag", quote: "You could not ask for a better job. Excellent workmanship and top notch professionalism!" },
  { name: "Jon Dunn", quote: "Fast turn around, great price, and it looks great. Highly recommended!" },
];

function Services() {
  const otherServices = [
    { name: "Spring Clean Up", icon: FaSeedling },
    { name: "Mowing", icon: FaTools },
    { name: "Edging", icon: FaTools },
    { name: "Tree Removal", icon: FaTree },
    { name: "Power Washing", icon: FaWater },
    { name: "Fall Cleanup", icon: FaSeedling },
    { name: "Trimming", icon: FaTools },
    { name: "Mulching", icon: FaSeedling },
    { name: "Stump Grinding", icon: FaTree },
    { name: "Fence Staining", icon: FaTools },
  ];

  const fences = [
    {
      type: "Wood Fencing",
      description: "Wood fencing offers a natural, classic look that can be customized to suit any property. We provide expert installation using pressure-treated lumber and cedar, ensuring durability and beauty. Available in privacy, picket, and split rail styles.",
      supplier: "https://www.homedepot.com/",
      testimonial: testimonials.find(t => t.name === "Dylan Ahern"),
      images: ["/outdoor-wood1.jpeg", "/outdoor-wood2.jpeg", "/outdoor-wood3.jpeg", "/outdoor-wood4.jpeg", "/outdoor-wood5.jpeg", "/outdoor-wood6.jpeg", "/outdoor-wood7.jpeg", "/outdoor-wood8.jpeg", "/outdoor-wood9.jpeg", "/outdoor-wood10.jpeg", "/outdoor-wood11.jpeg", "/outdoor-wood12.jpeg", "/outdoor-wood13.jpeg"],
    },
    {
      type: "Vinyl Fencing",
      description: "Vinyl fencing is a low-maintenance, weather-resistant alternative to wood. It’s available in a wide range of styles and colors to suit your aesthetic needs. Vinyl fences are long-lasting and backed by manufacturer warranties.",
      supplier: "https://www.veseyvinyl.com/",
      testimonial: testimonials.find(t => t.name === "Christine Albright"),
      images: ["/outdoor-vinyl1.jpeg", "/outdoor-vinyl2.jpeg", "/outdoor-vinyl3.jpeg", "/outdoor-vinyl4.jpeg", "/outdoor-vinyl5.jpeg", "/outdoor-vinyl6.jpeg"],
    },
    {
      type: "Chain Link Fencing",
      description: "Chain link fencing is a cost-effective and secure option for both residential and commercial properties. We offer galvanized and black vinyl-coated chain link with optional privacy slats for added coverage.",
      supplier: "https://www.masterhalco.com/",
      testimonial: testimonials.find(t => t.name === "Jon Dunn"),
      images: ["/chainlink1.jpeg", "/chainlink2.jpeg"],
    },
    {
      type: "Ornamental Fencing",
      description: "Ornamental aluminum and steel fencing offers elegance and security without blocking views. It’s rust-resistant and available in decorative styles with customizable gates and finishes.",
      supplier: "https://www.alumi-guard.com/",
      testimonial: testimonials.find(t => t.name === "Elizabeth Coleman"),
      images: ["/outdoor-orn1.jpeg", "/outdoor-orn2.jpeg", "/outdoor-orn3.jpeg", "/outdoor-orn4.jpeg", "/outdoor-orn5.jpeg", "/outdoor-orn6.jpeg", "/outdoor-orn7.jpeg", "/outdoor-orn8.jpeg", "/outdoor-orn9.jpeg"],
    },
  ];

  return (
    <section className="bg-gray-50 py-20 text-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-flag-red">
          Our Fencing Services
        </h1>

        <div className="space-y-16">
          {fences.map((fence, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                key={index}
                className="bg-white shadow-md rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="md:flex">
                  <div className="md:w-1/2 relative">
                    <div className="relative" ref={ref}>
                      {fence.testimonial && isInView && (
                        <motion.div
                          className="absolute top-2 left-2 right-2 z-10 flex items-center gap-2 text-xs italic text-gray-800 drop-shadow-md bg-white bg-opacity-90 px-3 py-2 rounded-md"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 4, duration: 0.6, ease: "easeOut" }}
                        >
                          <FaBullhorn className="text-flag-red w-4 h-4" />
                          <span className="line-clamp-3">"{fence.testimonial.quote}"</span>
                        </motion.div>
                      )}
                      <Swiper
                        modules={[Navigation, Pagination]}
                        navigation={{ enabled: typeof window !== 'undefined' && window.innerWidth >= 768 }}
                        pagination={{ clickable: true }}
                        loop={true}
                        className="h-72"
                      >
                        {fence.images.map((img, idx) => (
                          <SwiperSlide key={idx}>
                            <div
                              className="h-72 bg-cover bg-center"
                              style={{ backgroundImage: `url(${img})` }}
                            ></div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-6 space-y-4">
                    <h2 className="text-2xl font-bold text-flag-red">{fence.type}</h2>
                    <p>{fence.description}</p>
                    <a
                      href={fence.supplier}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-flag-red underline hover:text-red-600"
                    >
                      Visit Supplier Website
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <h2 className="text-3xl font-bold text-center mt-24 mb-8 text-flag-red">
          Other Landscaping Services
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {otherServices.map(({ name, icon: Icon }, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center bg-white shadow rounded-lg p-4 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Icon className="text-3xl text-flag-red mb-2" />
              <p className="text-center text-sm font-semibold">{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
