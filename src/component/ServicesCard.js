import React from 'react'

export default function ServicesCard({ image, title, description }) {
    return (
        <div className='w-full   bg-white text-black  max-w-sm bg-neutral-primary-soft  p-6   rounded-xl  p-4 shadow-md   '>
            <div className='flex flex-col items-center text-center'>
                  
                <h1 className='text-xl font-bold text-yellow-600'>{title}</h1>
                <p>{description}</p>
            </div>

        </div>
    )
}
