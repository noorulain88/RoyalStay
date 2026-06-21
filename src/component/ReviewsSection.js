import React from 'react'
import ReviewsCards from './ReviewsCards'
import Reviews from '@/Data/Reviews'

export default function ReviewsSection() {
  return (
    <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4   bg-zinc-50 text-black py-8'>
      
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
