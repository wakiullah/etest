'use client';

import { curriculumData } from '@/data/CourseDetails';
import { useState } from 'react';
import { FaLock, FaCheckCircle } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";

const CurriculumSection = ({ section }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b p-4">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className="font-semibold text-md">{section.title}</h2>
                <span className={isOpen ? 'rotate-180' : ''}><IoIosArrowDown /></span>
            </div>
            {isOpen && section.lessons.length > 0 && (
                <ul className="mt-2 space-y-2">
                    {section.lessons.map((lesson, index) => (
                        <li key={index} className="flex justify-between items-center p-3 cursor-pointer">
                            <span className="flex items-center gap-2">
                                {lesson.locked ? <FaLock className="text-gray-500" /> : <FaCheckCircle className="text-green-500" />}
                                {lesson.title}
                            </span>
                            <span className="text-sm text-gray-600">{lesson.duration}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default function Curriculum() {
    return (
        <div className=" py-6">
            <h1 className="text-2xl font-bold">Curriculum</h1>
            <p className="text-gray-600">40 lectures | 10h 15m</p>
            <div className="mt-4 border rounded-lg overflow-hidden">
                {curriculumData.map((section, index) => (
                    <CurriculumSection key={index} section={section} />
                ))}
            </div>
        </div>
    );
}
