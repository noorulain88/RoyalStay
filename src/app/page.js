import Heading from "@/component/Heading";
import HeroSection from "@/component/HeroSection";
import Navbar from "@/component/Navbar";
import PoplarSection from "@/component/PoplarSection";
import Rooms from "@/component/Rooms";


import BookingBar from "@/component/Rooms";
import ServicesSection from "@/component/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Rooms />
      <PoplarSection />
      <ServicesSection />
    </div>
  );
}
