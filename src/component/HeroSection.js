'use client'

import { Link } from 'lucide-react';
import React from 'react'

export default function HeroSection() {
const showInfo = () => {
  const section = document.getElementById("rooms");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <div className=" text-center  h-[100vh] bg-[url('/images/hotel.jpg')] bg-cover bg-center flex items-center text-black"id="home">
        <div>
            <h1 className='text-white  bg-black/30 text-xl '>Welcome to RoyalStay</h1>
            <h1 className='text-white bg-black/30 text-6xl  max-w-xl'>Experience luxury like  <span className='text-yellow-600'>never before</span></h1>
            <p className='text-white  bg-black/30 px-4 py-2'>Discover the perfect blend of comfort,elegance,hospitality at RoyalStay Hotels</p>
            
            <button className="text-white bg-yellow-600  mt-6  h-10 rounded-xl px-4 py-2 hover:decoration-yellow-400  hover:p-2 " onClick={showInfo}
            >
              Explore room
            </button>

        </div>
        

    </div>
  )
}
