function CTA() {
    return (
      <section className="bg-flag-red py-20 text-white text-center">
        <div
          className="max-w-3xl mx-auto space-y-6 px-6"
          data-aos="zoom-in-up"
        >
          <h2 className="text-4xl font-bold">
            Ready to Start Your Fencing Project?
          </h2>
          <p className="text-lg">
            Contact us today for a no-obligation estimate and bring your outdoor vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-flag-red font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-transform transform hover:scale-105 shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Request a Free Estimate
          </a>
        </div>
      </section>
    );
  }
  export default CTA;
  