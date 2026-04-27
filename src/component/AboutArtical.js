import React from 'react'

export default function AboutArtical() {
    return (
        <div className="flex items-center bg-white shadow-md rouded-lg">
            <div>
                <h1 className="text-3xl font-bold ">Welcome Back,Admin</h1>
                <p className=" text-gray-600 mb-8">Here you can manage your hotel bookings, rooms, and services.</p>
            </div>
            <div className=" rounded-full w-12 h-12 items-center ml-auto">
                <img   className=" rounded-full "  height={20} width={40} src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Admin" />
                </div>

        </div>
    )
}
