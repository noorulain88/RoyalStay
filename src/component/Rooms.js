import React from 'react'

export default function Rooms() {
  return (
    <div  id="Booking"  className="grid grid-cols-5 gap-4  grid  shadow-md   items-center text-black bg-zinc-100 py-8">
      

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
        <input type="number" min="1" />
      </div>

              <div className='w-full  border rounded-lg mt-1 p-2'>
          <p>Rooms</p>
          <input type="number" min="1" />
        </div>
        <button className='text-white bg-black   rounded-xl  w-full py-2 px-4 hover:bg-black-50 hover:p-8 font-bold py-2 px-4 h-15  rounded inline-flex items-center'>Check Availability</button>

    </div>
  )
}


