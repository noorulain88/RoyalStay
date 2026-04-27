import React from 'react'

export default function RecentsBookingCards({GuestName,RoomType,CheckInDate,CheckOutDate,status}) {
  return (
    <div>
        <div className='  bg-white text-black  gap-6  py-4 px-4 rounded-lg shadow-md'>
          
            <p className='font-semibold '>{GuestName}</p>
            <p className='font-semibold'> {RoomType}</p>
            <p className='font-semibold'> {CheckInDate}</p>
            <p className='font-semibold'> {CheckOutDate}</p>
            <p className='font-semibold '>{status}</p>
        </div>

    </div>
  )
}
