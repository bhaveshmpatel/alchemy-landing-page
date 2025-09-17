import { Homepage } from "@/sections/Homepage";
import { Body } from "@/sections/Body";
import { Hero } from "@/sections/Hero";
import Navbar from "@/sections/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Body />
      <Homepage />
    </div>
  );
}
