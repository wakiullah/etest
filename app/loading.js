import React from 'react';
import Image from 'next/image';
import logo from '@/public/assests/logo.png'
const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Image
                    src={logo}
                    alt="Loading..."
                    width={96}
                    height={96} 
                    className="w-24 mb-4 mx-auto"
                />
                <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
            </div>
        </div>
    );
};

export default Loading;
