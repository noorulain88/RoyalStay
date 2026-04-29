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
            <h1 className='text-xl font-bold'>RoyalStay</h1>
            <div className=" space-x-6 hidden md:flex text-lg font-medium">
                <Link href="#home" className="hover:decoration-black hover:decoration-2 hover:scale-105 hover:text-slate-500">Home</Link>
                <Link href="#rooms" className="hover:decoration-black hover:decoration-2  hover:scale-105 hover:text-gray-500">Rooms</Link>
                <Link href="#services" className="hover:decoration-black hover:decoration-2 hover:scale-105 hover:text-gray-500 ">Services</Link>
                <Link href="/about-us" className="hover:decoration-black hover:decoration-2  hover:scale-105 hover:text-gray-500">About Us</Link>
            </div>
            <button className='text-white bg-black rounded-xl px-4 py-2  hover:bg-gray-900 hover:scale-105 ' onClick={showInfo}>Book Now</button>



        </div>
    )
}
