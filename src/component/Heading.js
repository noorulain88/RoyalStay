import React from 'react'

export default function Heading({children}) {
  return (
    <div>
       <h1 className=' text-center justify-center bg-white text-black text-5xl p-8 bg-zinc-100 ' id="rooms">{children}</h1>
    </div>
  )
}
