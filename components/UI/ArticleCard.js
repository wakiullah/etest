import React from 'react'
import { FaUser, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

export default function ArticleCard({ article }) {
    return (
        <div className="group transition duration-300 ease-in-out bg-white rounded-lg shadow-md overflow-hidden">
            <div className='h-56 overflow-hidden transition-all duration-3 '><img src={article.image} alt={article.title} className="w-full transition duration-300 ease-in-out object-cover group-hover:scale-[1.1] " /></div>
            <div className="p-5">
                <div className="flex items-center text-sm text-gray-500 space-x-3 mb-2">
                    <div className="flex items-center space-x-1">
                        <FaUser className="text-primary" />
                        <span>David William</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <FaCalendarAlt className="text-primary" />
                        <span>February 25, 2024</span>
                    </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{article.description}</p>
                <a href="#" className="text-primary flex items-center  transform duration-300 -ml-28 group-hover:ml-0 "><span className='group-hover:mr-3 mr-9 transition duration-300 ease-in-out'>Read More</span> <FaArrowRight /> </a>
            </div>

        </div>
    );
}
