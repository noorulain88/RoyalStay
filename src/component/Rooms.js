import React from 'react'

export default function Rooms() {

  return (
    <div  id="Booking"  className="grid grid-cols-4 gap-4  grid  shadow-md   items-center text-black bg-zinc-100 py-8">
      

      <div className=' border p-2 rounded-lg w-full  mt-1 items-center'>
        <p>Check In</p>
        <input type="date" />
      </div>

      <div className='w-full border p-2 rounded-lg mt-1 '>
        <p>Check Out</p>
        <input type="date" />
      </div>

      <div className='w-full border p-2 rounded-lg mt-1'>
        <p>Guests</p>
        <input type="number" min="1"  placeholder="2 Guest"/>
      </div>

              <div className='w-full  border rounded-lg mt-1 p-2'>
          <p>Rooms</p>
          <input type="number" min="1"   placeholder="1 Rooms"/>
        </div>
        

    </div>
  )
}


