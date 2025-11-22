import Hero from "./Hero";
import Navbar from "./Navbar";
import ShowCase from "./ShowCase";
import Stats from "./Stats";
import Transformation from "./Transformation";
import WhyChooseUs from "./WhyChooseUs";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <div className="mt-[100vh] relative z-10">
        <ShowCase />
        <WhyChooseUs />
        <Transformation />
        <Stats />
      </div>
    </div>
  );
}
