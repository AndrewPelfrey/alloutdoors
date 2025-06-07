function Fencing() {
    const fences = [
      { title: "Chain Link", image: "/chainlink.webp", href: "/services#chainlink" },
      { title: "Wood", image: "/outdoor-wood7.jpeg", href: "/services#wood" },
      { title: "Vinyl", image: "/vinyl.jpeg", href: "/services#vinyl" },
      { title: "Ornamental", image: "/ornamental.jpeg", href: "/services#ornamental" },
    ];
  
    return (
      <section className="py-20 bg-gray-50" id="fencing">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800" data-aos="fade-up">
            Our Fence Styles
          </h2>
          <p className="text-lg text-gray-600 mb-12" data-aos="fade-up" data-aos-delay="100">
            Explore our professionally installed fence types designed for both style and security.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {fences.map((fence, index) => (
              <a
                key={index}
                href={fence.href}
                className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition relative"
                data-aos="zoom-in"
                data-aos-delay={150 + index * 100}
              >
                <div className="overflow-hidden">
                  <img
                    src={fence.image}
                    alt={fence.title}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 group-hover:bg-flag-red/90 transition-colors duration-300">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white transition">
                    {fence.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Fencing;
  