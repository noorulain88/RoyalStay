'use client'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  const showInfo = () => {
  const section = document.getElementById("Booking");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

    return (
        <div className="flex justify-between items-center px-8 py-4 bg-white  text-black shadow-lg ">
            <h1 className=' sm:text-sm  md:text-lg lg:text-2xl text-md font-bold'>RoyalStay</h1>
            <div className="  sm:space-x-5 space-x-2 md:space-x-5 lg:space-x-6  sm:text-lg  md:text-xl lg:text-2xl text-xs  text-lg font-medium">
                <Link href="#home" className="hover:decoration-black hover:decoration-2 hover:scale-105  hover:text-slate-400">Home</Link>
                <Link href="#rooms" className="hover:decoration-black hover:decoration-2  hover:scale-105 hover:text-gray-500">Rooms</Link>
                <Link href="#services" className="hover:decoration-black hover:decoration-2 hover:scale-105 hover:text-gray-500 ">Services</Link>
                <Link href="/about-us" className="hover:decoration-black hover:decoration-2  hover:scale-105 hover:text-gray-500">About Us</Link>
            </div>
            <button  className="bg-black text-white rounded-md text-xs md:text-xl px-1 py-1 md:px-4 md:py-2 hover:bg-gray-900 hover:scale-105 transition-all duration-300"  onClick={showInfo}>Book Now</button>



        </div>
    )
}
