import Input from '@/components/UI/input';
import React from 'react'
import { TfiLayoutAccordionList } from "react-icons/tfi";
import { FaSearch } from "react-icons/fa";
import heroGif from '@/public/assests/HeroGif.gif'
import Image from 'next/image';

const heroDetails = [
    {
        quantity: 3,
        title: 'Online Courses',
        icon: <TfiLayoutAccordionList size={30} />,
        bgcolor: '#3872BF'
    },
    {
        quantity: 5,
        title: 'Expert instructor',
        icon: <TfiLayoutAccordionList size={30} />,
        bgcolor: '#SD45GD'

    },
    {
        quantity: 700,
        title: 'Enrolled Students',
        icon: <TfiLayoutAccordionList size={30} />,
        bgcolor: '#3872BF'

    },
]

export default function Hero() {
    return (
        <section className="text-center p-10 md:p-20 flex flex-col md:flex-row items-center justify-between mt-5">
            <div className="md:w-1/2">
                <h1 className="text-3xl md:text-5xl text-left font-bold">
                    Take Your Skills to the <span className="text-primary font-bold">Next Level</span> with Top Courses
                </h1>
                <p className="text-gray-600 mb-7 text-left mt-4 max-w-lg">
                    Universal is dedicated to offering educational experiences designed to align with new and evolving career paths.
                </p>
                {<Input type={'text'} placeholder={'Search Program'} buttonText={<FaSearch className="w-full" />} />}
                <section className="flex flex-wrap justify-center gap-6 mt-10">

                    {heroDetails.map((item, i) => {
                        return <div key={i} className={`bg-[${item.bgcolor}] bg-opacity-[20%] p-2 rounded flex justify-between text-center`}>
                            <div className="items-center flex">
                                {item.icon}
                            </div>
                            <div className="text-left pl-3">
                                <p className="text-xl font-bold">{item.quantity}+</p>
                                <p className="text-gray-600">{item.title}</p>
                            </div>
                        </div>
                    })}
                </section>
            </div>
            <div className="md:w-1/2 hidden md:flex justify-center ">
                <Image
                    src={
                        heroGif
                    }
                    alt="Man cartoon with laptop at desk working"
                    width={500}
                    height={400}
                />
            </div>
        </section>
    )
}
