import Input from '@/components/UI/input';
import React from 'react'
import { TfiLayoutAccordionList } from "react-icons/tfi";
import { FaSearch } from "react-icons/fa";
import heroGif from '@/public/assests/HeroGif.gif'
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="text-center p-10 md:p-20 flex flex-col md:flex-row items-center justify-between mt-10">
            <div className="md:w-1/2">
                <h1 className="text-3xl md:text-5xl text-left font-bold">
                    Discover the Top <span className="text-[#3872BF]">Courses</span> to Enhance Your Skills
                </h1>
                <p className="text-gray-600 mb-7 text-left mt-4 max-w-lg">
                    Universal is dedicated to offering educational experiences designed to align with new and evolving career paths.
                </p>
                {<Input type={'text'} placeholder={'Search Program'} buttonText={<FaSearch className="w-full" />} />}
                <section className="flex flex-wrap justify-center gap-6 mt-10">
                    <div className="bg-[#3872BF] bg-opacity-[20%] p-4 rounded flex justify-between text-center">
                        <div className="items-center flex">
                            <TfiLayoutAccordionList size={30} />
                        </div>
                        <div className="text-left pl-3">
                            <p className="text-xl font-bold">03+</p>
                            <p className="text-gray-600">Online Courses</p>
                        </div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded text-center">
                        <p className="text-xl font-bold">150+</p>
                        <p className="text-gray-600">Expert Instructors</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded text-center">
                        <p className="text-xl font-bold">2500+</p>
                        <p className="text-gray-600">Enrolled Students</p>
                    </div>
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
