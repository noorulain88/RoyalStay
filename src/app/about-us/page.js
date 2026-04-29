import AboutArtical from '@/component/AboutArtical'
import AboutBookingsSection from '@/component/AboutBookingsSection'
import HospitalityCard from '@/component/HospitalityCard'
import ReviewsSection from '@/component/ReviewsSection'
import AboutDashboard from "@/component/AboutDashboard";
import React from 'react'

export default function AboutUs() {
  return (
    <div className='min-h-screen bg-zinc-100 text-black'>
     <AboutDashboard/>
    <AboutArtical />
    <AboutBookingsSection/>
    {/* <RecentsBookingSection/> */}
    <HospitalityCard />
    <h1 className='text-3xl font-bold text-left py-8'> Customer Reviews </h1>
    <ReviewsSection/>

{/* <LearnMore/> */}
    </div>
  )
}
