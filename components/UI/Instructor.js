import React from 'react'
import { FaStar, FaUsers, FaBook, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaBehance } from 'react-icons/fa';

export default function Instructor() {
    return (
        <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Instructors</h2>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img
                    src="https://via.placeholder.com/100"
                    alt="John Doe"
                    className="w-24 h-24 rounded-full object-cover"
                />
                <div className="flex-1">
                    <h3 className="text-xl font-bold">John Doe</h3>
                    <p className="text-gray-600">Senior Full-Stack Developer, Topylo</p>
                    <div className="flex items-center text-yellow-500 mt-2">
                        <FaStar /> <span className="ml-1 font-semibold">4.9</span>
                        <span className="text-gray-500 ml-2">(120 reviews)</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-600 mt-2">
                        <span className="flex items-center gap-1"><FaBook /> 5 Courses</span>
                        <span className="flex items-center gap-1"><FaUsers /> 105,624 Students</span>
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
                With over 10 years of experience in web development, I have contributed to various projects ranging
                from small business websites to complex enterprise applications. As a Senior Full-Stack Developer at Topylo,
                I specialize in creating seamless user experiences using modern web technologies such as React, Node.js,
                and Tailwind CSS. My goal is to help you master the skills needed to succeed in the tech industry.
            </p>
        </div>)
}
