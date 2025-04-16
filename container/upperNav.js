import React from 'react'

export default function UpperNav() {
    return (
        <div className="bg-primary text-whtie  p-2 flex justify-between items-center text-sm px-4 w-full z-50">
            <div><p className='text-white'>📍University of Chittagong</p></div>
            <div className="flex space-x-4 text-white">
                <span className='text-white md:block hidden'>📞 (888) 446-7880</span>
                <span >✉ example@esomoy.com</span>
            </div>
        </div>
    )
}
