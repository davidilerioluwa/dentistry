import Hero from "./Hero";
import Navbar from "./Navbar";
import ShowCase from "./ShowCase";
import Stats from "./Stats";
import Transformation from "./Transformation";
import WhyChooseUs from "./WhyChooseUs";
export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <div className="mt-[100vh] relative z-10">
        <WhyChooseUs />
        <ShowCase />
        {/* <Transformation /> */}
        <Stats />
      </div>
    </div>
  );
}
