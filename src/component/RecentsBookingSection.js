import RecentBooking from '@/Data/RecentBooking'
import React from 'react'
import RecentsBookingCards from './RecentsBookingCards'

export default function RecentsBookingSection() {
  return (

    <div className=' w-full gap-9 grid grid-cols-4 bg-zinc-100  py-8 px-4'>
       
          {RecentBooking.map((item) => (
              <RecentsBookingCards
                key={item.id}
                GuestName={item.Names}
                RoomType={item.Room}
                CheckInDate={item.checkIn}
                CheckOutDate={item.checkOut}
                status={item.Status}
              />
            ))}
    </div>
  )
}
