import React from 'react'

export default function PoplarCard({ image, title, button, price }) {
  return (
  
    <div className="w-full  bg-white text-black  grid-cols-3 max-w-sm bg-neutral-primary-soft p-6   rounded-xl  p-4 shadow-md  hover:shadow-xl transition-shadow duration-300 hover:scale-105 " >

        <img src={image} alt={title} className='rounded-xl ' />

         <h3 className=' p-2 mt-2 text-lg'>{title}<span className='text-xl   p-10 mt-2 text-yellow-600'>${price} <span className=' text-xl text-black '>/Night</span></span></h3>

        <button className='bg-yellow-700 hover:bg-yellow-600 text-white w-full mt-4 px-20 rounded-xl py-1 font-bold'>
            {button}
        </button>

    </div>
  )
}
