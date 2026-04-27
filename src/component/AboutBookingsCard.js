import React from 'react'

export default function AboutBookingsCard({title,value,lastMonth}) {
  return (
    <div className='w-full  bg-white text-black  grid-cols-4 max-w-sm bg-neutral-primary-soft p-6   rounded-xl  p-4 shadow-md  hover:shadow-xl transition-shadow duration-300 hover:scale-105 '>
    
        <p className='text-gray-600 '>{title}</p>
           <h1 className='text-2xl font-bold '>{value}</h1>
       
        <p className='text-green-500'>{lastMonth}<span className='text-black'> from last month</span></p>
    </div>
  )
}
