import React, { useState } from 'react'

export default function OverViewItem({ icon, text }) {
    return (
        <div o className='group w-full flex justify-center w-full items-center py-10 gap-6'>
            <div className='w-24 h-24  rounded-full bg-white flex items-center justify-center '>
                {icon}
            </div>
            <div className='text-white relative text-lg loading-5 font-semibold  line ' >
                {text}
            </div>
        </div>
    )
}
