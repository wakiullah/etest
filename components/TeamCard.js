import React from 'react'
import { FaEnvelope, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Heading from './UI/Heading';
import Link from 'next/link';
import Image from 'next/image';

export default function TeamCard({ member }) {
    return (
        <div className="group bg-white rounded border hover:border-primary transition duration-300 ease-in-out p-6 flex flex-col sm:flex-row  sm:text-left w-full max-w-2xl">
            <div className='w-full h-full sm:w-44 sm:h-56 overflow-hidden rounded mr-6'>
                <Image
                    src={member.image}
                    width={200}
                    height={200}
                    alt="Picture of the author"
                    className='w-full h-full sm:w-44 sm:h-56 transition duration-200 group-hover:scale-110 object-cover rounded-lg md:rounded'
                />
            </div>
            <div className='mt-10 sm:mt-0'>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.title}</p>
                <p className="text-sm text-gray-500">{member.role}</p>
                <p className="text-sm text-gray-500 ">{member.education}</p>
                <p className="text-sm text-gray-500 mb-2">{member.institute}</p>
                <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-blue-600 hover:underline">
                    <FaEnvelope /> {member.email}
                </a>
                <div className='flex text-primary gap-3  mt-3'>

                    <Link href={'#'} className='border p-1 rounded hover:bg-primary hover:text-white transition duration-200'>
                        <FaFacebook className='text-xl  ' />
                    </Link>
                    <Link href={'#'} className='border p-1 rounded hover:bg-primary hover:text-white transition duration-200'>
                        <FaLinkedin className='text-xl  ' />
                    </Link>
                    <Link href={'#'} className='border p-1 rounded hover:bg-primary hover:text-white transition duration-200'>
                        <FaWhatsapp className='text-xl  ' />
                    </Link>

                </div>
            </div>
        </div>
    )
}
