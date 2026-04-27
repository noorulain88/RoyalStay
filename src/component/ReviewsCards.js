import React from 'react'

export default function ReviewsCards({id, stars, src, name, reviews,Name}) {
  return (
    <div className='w-full  bg-white text-black  grid-cols-3 max-w-sm bg-neutral-primary-soft p-6   rounded-xl  p-4 shadow-md  hover:shadow-xl transition-shadow duration-300 hover:scale-105 ' >
        <img src={stars} alt={name} className='w-16 h-16 rounded-full' />
          <p className='text-gray-600'>{reviews} </p>
        <img src={src} alt={name} className='w-16 h-16 rounded-full' />
        <h3 className='text-lg font-bold'>{name}</h3>

    </div>
  )
}
