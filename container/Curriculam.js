'use client';
import { useState, useEffect } from 'react';
import { FaLock, FaCheckCircle } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import Firebase Auth

const CurriculumSection = ({ section, isLoggedIn }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b">
            <div
                className="flex p-4 justify-between items-center cursor-pointer"
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
                                {(!isLoggedIn && index > 0) ? (
                                    <FaLock className="text-gray-500" />
                                ) : (
                                    <FaCheckCircle className="text-green-500" />
                                )}
                                {(!isLoggedIn && index > 0) ? (
                                    <span className="text-gray-500">{lesson.title}</span>
                                ) : (
                                    <a
                                        href={lesson.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        {lesson.title}
                                    </a>
                                )}
                            </span>
                            <span className="text-sm text-gray-600">{lesson.duration}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default function Curriculum({ curriculamData }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoggedIn(!!user); // Set logged-in state based on user presence
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    if (!curriculamData || curriculamData.length === 0) {
        return <p className="text-gray-600">No curriculum data available.</p>;
    }

    return (
        <div className="py-6">
            <h1 className="text-2xl font-bold">Curriculum</h1>
            <p className="text-gray-600">{curriculamData.length} sections</p>
            <div className="mt-4 border rounded-lg overflow-hidden">
                {curriculamData.map((section, index) => (
                    <CurriculumSection key={index} section={section} isLoggedIn={isLoggedIn} />
                ))}
            </div>
        </div>
    );
}
