'use client'
import React from 'react'
import ServicesCard from './ServicesCard'
import SectionData from '@/Data/SectionData'

export default function ServicesSection() {
  return (
    <div id="services"className='w-full grid grid-cols-4 bg-zinc-50 text-black py-8 gap-2'>
       {SectionData.map((item) => (
             <ServicesCard
               key={item.id}
               image={item.image}
               title={item.title}
               description={item.description}
             />
           ))}
    </div>
  )
}

   
