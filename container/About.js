'use client';

import Image from 'next/image';
import { FaChalkboardTeacher, FaLaptop, FaUsers, FaShieldAlt } from 'react-icons/fa';
import aboutIcon from '@/public/assests/about.png'
import Heading from '@/components/UI/Heading';

const aboutData = {
    mission: "our mission is to empower students with the knowledge, skills, and mindset needed to succeed in the 21st century. We believe that education is more than just academics-it's about nurturing well-rounded individuals who are confident",
    features: [
        {
            icon: <FaChalkboardTeacher className="text-primary w-10 h-10" />,
            title: "Smart Classrooms",
            description: "Interactive whiteboards, projectors, and digital content for an enhanced learning experience",
        },
        {
            icon: <FaLaptop className="text-primary w-10 h-10" />
            , title: "Online Learning Platforms",
            description: "Integrated with platforms like Google Classroom, Microsoft Teams, and other LMS",
        },
        {
            icon: <FaUsers className="text-primary w-10 h-10" />,
            title: "Extracurricular Programs",
            description: "Wide range of clubs and activities, including sports, arts, music, and debate teams",
        },
        {
            icon: <FaShieldAlt className="text-primary w-10 h-10 " />,
            title: "Security and Safety",
            description: "24/7 surveillance, secure entry points, and emergency preparedness protocols",
        },
    ],
};


export default function AboutUs() {


    return (
        <section className=" p-10 bg-gray-50">
            <div className='container mx-auto flex  flex-col md:flex-row items-center justify-between'>
                {/* Left Side - Image */}
                <div className=" md:w-2/5 w-full">
                    <Image
                        src={aboutIcon}
                        alt="Learning Illustration"
                        width={500}
                        height={500}
                        className="rounded-lg"
                    />
                </div>
                {/* Right Side - Content */}
                <div className="w-full md:w-3/5 space-y-4 md:pl-20">
                    {<Heading sub={'ABOUT US'} main={`We're Focuses Technology and Innovative Learning`} align={'left'} />}
                    <p className="text-gray-600">
                        {aboutData.mission}
                    </p>
                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {aboutData.features.map(feature => {
                            return <div key={Math.random()} className="flex justify-center justify-between space-x-3 w-full">
                                {feature.icon}

                                <div>
                                    <h3 className="font-semibold">{feature.title}</h3>
                                    <p className="text-gray-500 text-sm">{feature.description}</p>
                                </div>
                            </div>
                        })}

                    </div>
                    <button className="mt-10 border-[1px] border-primary px-5 hover:bg-primary hover:text-white text-primary px-3 py-[6px] rounded">Know More</button>
                </div>
            </div>
        </section>
    );
}
