import React from 'react'
import Link from "next/link";
export default function HospitalityCard({ id, title }) {
    return (

        <div className='bg-white text-black grid-cols-2 gap-6 py-4 px-4 rounded-lg shadow-md flex items-center justify-between'>
            <div>        
                 <h1 className='text-black font-6xl font-bold  '>Best Hospitality For You</h1>
                <p className='text-gray-60'>We provide the best hospitality experience for our guests. </p>
                <ul className='text-black gap-4 rounded-lg p-4 mt-4'>
                    <li className='flex items-center gap-2 '><img src="/images/check.png" alt="check"  /> Luxury rooms</li>
                    <li className='flex items-center gap-2'><img src="/images/check.png" alt="check" /> 24/7 room service</li>
                    <li className='flex items-center gap-2'><img src="/images/check.png" alt="check"  /> Spacious lounges</li>
                    <li className='flex items-center gap-2'><img src="/images/check.png" alt="check"  /> Concierge services</li>
                </ul>
              
                    
                    <button className='bg-black  text-white py-2 px-4 rounded-lg hover:bg-gray-600 hover:scale-105' >Learn More</button>
              
            </div>

            <div>
                <img src="/images/hospitality.jpg" alt="Best Hospitality" />
            </div>

        </div>
    )
}
