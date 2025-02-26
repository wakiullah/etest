import React from 'react'

export default function Input({ placeholder, type, buttonText }) {
    return (
        <div className="flex relative">
            <input type={type} placeholder={placeholder} className="border p-4 rounded-xl w-full" />
            <button className="bg-[#3872BF] text-white h-12 w-12 absolute top-[50%] left-[94%] -translate-x-1/2 -translate-y-1/2 rounded">
                {buttonText}
            </button>
        </div>
    )
}
