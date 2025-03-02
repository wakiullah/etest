import Heading from '@/components/UI/Heading';
import React from 'react'
import { FaBook, FaChalkboardTeacher, FaRocket } from 'react-icons/fa';

const offerings = [
    {
        icon: <FaBook className="text-primary text-4xl" />,
        title: 'Specialized Courses',
        description: 'Our curriculum specialized courses tailored to meet the demands of various industries, ensuring that our students gain relevant knowledge.',
    },
    {
        icon: <FaChalkboardTeacher className="text-primary text-4xl" />,
        title: 'Expert Faculty',
        description: 'Learn from industry experts and experienced educators who bring real-world experience and cutting-edge knowledge to the classroom.',
    },
    {
        icon: <FaRocket className="text-primary text-4xl" />,
        title: 'Innovative Learning Methods',
        description: 'We employ innovative teaching methodologies and the latest technology to enhance the learning experience and keep students engaged.',
    }
];

export default function Offerings() {
    return (
        <div className=" py-16 p-6 bg-white text-center">
            <div className='container mx-auto'>
                <div className='container mx-auto'>
                    <Heading sub={"Why Ekkhuny Somoy?"} main={'Explore Our Unique Offerings'} align={'center'} />
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6  mx-auto">
                        {offerings.map((offer, index) => (
                            <div key={index} className="bg-gray-100 p-6 py-10 rounded-lg  flex flex-col items-center text-center">
                                {offer.icon}
                                <h3 className="mt-4 text-xl font-bold text-gray-800">{offer.title}</h3>
                                <p className="text-gray-600 mt-2 text-lg">{offer.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
