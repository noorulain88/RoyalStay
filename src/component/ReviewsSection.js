import React from 'react'
import ReviewsCards from './ReviewsCards'
import Reviews from '@/Data/Reviews'

export default function ReviewsSection() {
  return (
    <div className='w-full grid grid-cols-3 bg-zinc-50 text-black py-8'>
      
            {Reviews.map((item) => (
                  < ReviewsCards
                    key={item.id}
                    stars={item.stars}
                    src={item.src}
                    name={item.Name}
                    reviews={item.Reviews}
                  />
                ))}
     

    </div>
  )
}
