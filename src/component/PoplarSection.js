import React from 'react'
import { PoplarData } from '@/Data/PoplarData'
import PoplarCard from './PoplarCard'

export default function PoplarSection() {
  return (
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
  )
}
