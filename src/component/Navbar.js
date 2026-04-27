import React from 'react'

export default function Navbar() {
    return (
        <div className="flex justify-between items-center px-8 py-4 bg-white   text-black shadow">
            <h1 className='text-xl font-bold'>RoyalStay</h1>
            <div className=" space-x-6 hidden md:flex text-lg font-medium">
                <a href="#home" className="hover:decoration-black hover:decoration-2 hover:underline">Home</a>
                <a href="#rooms" className="hover:decoration-black hover:decoration-2 hover:underline">Rooms</a>
                <a href="#services" className="hover:decoration-black hover:decoration-2 hover:underline">Services</a>
                <a href="/about-us" className="hover:decoration-black hover:decoration-2 hover:underline">About Us</a>
                <a href="#contact" className="hover:decoration-black hover:decoration-2 hover:underline">Contact</a>
            </div>
            <button className='text-white bg-black rounded-xl px-4 py-2  hover:bg-gray-900 hover:scale-105 ' id="BookNow">Book Now</button>



        </div>
    )
}
