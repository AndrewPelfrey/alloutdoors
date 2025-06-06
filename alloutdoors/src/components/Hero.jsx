import React from "react";

function Hero() {
  return (
    <section
  className="relative min-h-[100dvh] overflow-hidden bg-center bg-cover md:bg-fixed"
  style={{ backgroundImage: "url('/hero5.jpeg')" }}
>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-white/20 animate-float ${
              Math.random() > 0.5 ? "w-1.5 h-1.5" : "w-2.5 h-2.5"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
<div className="relative z-30 flex items-center justify-center h-full px-6 pt-28 md:pt-40">
        <div className="text-center text-white max-w-2xl space-y-6">
         <h1
  className="text-5xl md:text-6xl font-bold leading-tight font-display"
  data-aos="fade-down"
  data-aos-delay="200"
>
  All Outdoors<br />
  <span className="text-flag-red text-3xl md:text-4xl font-semibold tracking-wide">
    Premium Fencing
  </span>
</h1>



          <p
            className="text-lg md:text-xl text-gray-200 font-body"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Over 22 years of trusted service — Installing and repairing durable
            vinyl, wood, chain link, and ornamental fencing throughout Greater
            Cleveland.
          </p>
          <a
  href="/contact"
  className="inline-block bg-flag-red hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition-transform transform hover:scale-105 shadow-md shake-slow"
  data-aos="zoom-in"
  data-aos-delay="600"
>
  Get Your Free Quote
</a>

        </div>
      </div>
    </section>
  );
}

export default Hero;
