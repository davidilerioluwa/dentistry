import Hero from "./Hero";
import Navbar from "./Navbar";
import Stats from "./Stats";
import Transformation from "./Transformation";
import WhyChooseUs from "./WhyChooseUs";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="pt-[100vh] relative z-10">
        <WhyChooseUs />
        <Transformation />
        <Stats />
      </div>
    </div>
  );
}
