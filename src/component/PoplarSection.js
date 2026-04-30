import React from 'react'
import { PoplarData } from '@/Data/PoplarData'
import PoplarCard from './PoplarCard'
import Heading from './Heading'

export default function PoplarSection() {
  return (
    <section>
      {/* <Heading title="Popular Rooms" /> */}
      <Heading>Popular Rooms</Heading> 

    <div className='w-full grid grid-cols-3 bg-zinc-100 text-black'>
        {PoplarData.map((item) => (
          <PoplarCard
            key={item.id}
            image={item.image}
            title={item.title}
            button={item.button}
            price={item.price}
          />
        ))}
    </div>
    </section>
  )
}
