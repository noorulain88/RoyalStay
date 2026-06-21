'use client'
import React from 'react'
import ServicesCard from './ServicesCard'
import SectionData from '@/Data/SectionData'

export default function ServicesSection() {
  return (
    <div id="services"className='w-full grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-4 justify-items-center bg-zinc-50 text-black py-8 gap-2'>
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

   
