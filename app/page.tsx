import Hero from "./Hero";
import Navbar from "./Navbar";
import Transformation from "./Transformation";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Transformation />
    </div>
  );
}
