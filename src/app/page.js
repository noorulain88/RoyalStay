import HeroSection from "@/component/HeroSection";
// import Navbar from "@/component/Navbar";
import Navbar2 from "@/component/Navbar2";
import PoplarSection from "@/component/PoplarSection";
import Rooms from "@/component/Rooms";


import ServicesSection from "@/component/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar2 />
      <HeroSection />
      <Rooms />
      <PoplarSection />
      <ServicesSection />
    </div>
  );
}
