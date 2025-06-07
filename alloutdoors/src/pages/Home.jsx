import Hero from "../components/Hero";
import Fencing from "../components/Fencing";
import Operation from "../components/Operation";
import CTA from "../components/CTA";
import TestimonialCarousel from "../components/TestimonialCarousel";

function Home() {
  return (
    <>
      <Hero />
      <Fencing />
      <TestimonialCarousel />
      <CTA />
      <Operation />
    </>
  );
}

export default Home;