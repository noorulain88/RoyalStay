import Booking from '@/Data/AboutBooking'
import React from 'react'
import AboutBookingsCard from './AboutBookingsCard'

export default function AboutBookingsSection() {
  return (
    <div>
   <div  className='w-full grid grid-cols-4 p-2 gap-6 bg-zinc-100 text-black'>
       {Booking.map((item) => (
             <AboutBookingsCard
               key={item.id}
               title={item.title}
               value={item.value}
               lastMonth={item.lastMonth}
             />
           ))}
    </div>

       {/* <div key={item.id} className='flex flex-col md:flex-row items-center justify-center gap-6 my-8 bg-white shadow-md rounded-lg p-6'>
                    <div className='flex flex-col items-center text-center md:text-left'>
                        <h1 className='text-xl font-bold text-yellow-600'>{item.title}</h1>
                        <p className='text-2xl font-bold text-gray-800'>{item.value}</p>
                        <p className='text-green-500'>{item.lastMonth}<span> from last month</span></p>
                    </div>
                </div> */}
    </div>
  )
}
