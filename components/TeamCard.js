import React from 'react'
import { FaEnvelope } from 'react-icons/fa';


export default function TeamCard({ member }) {
    return (
        <div className="group bg-white rounded border hover:border-primary transition duration-300 ease-in-out p-6 flex flex-col md:flex-row items-center text-center md:text-left w-full max-w-2xl">
            <div className='h-32 overflow-hidden rounded-lg mb-4 md:mb-0 md:mr-6'><img src={member.image} alt={member.name} className="rounded-lg w-32 h-32 object-cover  group-hover:scale-110  transition duration-300 object-cover" /></div>
            <div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.title}</p>
                <p className="text-sm text-gray-500">{member.role}</p>
                <p className="text-sm text-gray-500 mb-2">{member.education}</p>
                <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-blue-600 hover:underline">
                    <FaEnvelope /> {member.email}
                </a>
            </div>
        </div>
    )
}
