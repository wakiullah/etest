import Image from 'next/image';
import React from 'react'
import { FaStar, FaUsers, FaBook, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaBehance } from 'react-icons/fa';

export default function Instructor() {
    return (
        <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Instructors</h2>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <Image
                    src="https://i.ibb.co.com/3mkQz8sx/wakiullah.jpg"
                    alt="John Doe"
                    className="w-24 h-24 rounded-full object-cover"
                    width={100}
                    height={100}
                />
                <div className="flex-1">
                    <h3 className="text-xl font-bold">Wakiullah</h3>
                    <p className="text-gray-600">Front end developer</p>
                    <div className="flex items-center text-yellow-500 mt-2">
                        <FaStar /> <span className="ml-1 font-semibold">4.9</span>
                        <span className="text-gray-500 ml-2">(10 reviews)</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-600 mt-2">
                        <span className="flex items-center gap-1"><FaBook /> 2 Courses</span>
                        <span className="flex items-center gap-1"><FaUsers /> 24 Students</span>
                    </div>
                    <div className="flex gap-4 mt-4 text-gray-600">
                        <FaFacebook className="cursor-pointer hover:text-blue-600" />
                        <FaTwitter className="cursor-pointer hover:text-blue-400" />
                        <FaLinkedin className="cursor-pointer hover:text-blue-700" />
                        <FaInstagram className="cursor-pointer hover:text-pink-500" />
                        <FaBehance className="cursor-pointer hover:text-blue-500" />
                    </div>
                </div>
            </div>
            <p className="mt-4 text-gray-700">
                I am a passionate front-end developer with expertise in React, Next.js and modern web technologies.
                I love building user-friendly interfaces and have worked on numerous web projects. My focus is on writing clean,
                maintainable code and staying up-to-date with the latest development trends. I enjoy teaching and sharing my
                knowledge to help others grow in their development journey.
            </p>
        </div>)
}
