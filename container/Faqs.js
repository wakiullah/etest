'use client'
import Heading from "@/components/UI/Heading";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import faqimg from '@/public/assests/faq.png'

const faqs = [
    {
        question: "How does the school ensure personalized learning?",
        answer:
            "We keep class sizes small to ensure individual attention and use differentiated instruction to cater to different learning styles. Teachers work closely with students to identify their strengths and areas for improvement, providing tailored support to help them succeed.",
    },
    {
        question: "How are parents involved in the school community?",
        answer:
            "Parents are encouraged to participate through volunteer opportunities, parent-teacher meetings, and school events. We foster open communication to ensure parents are actively engaged in their child's education.",
    },
    {
        question: "What extracurricular activities are offered?",
        answer:
            "We offer a range of extracurricular activities, including sports, arts, music, drama, and academic clubs to enhance students' skills beyond the classroom.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);
    const boxRef = useRef();

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto p-6 lg:grid lg:gap-10 lg:grid-cols-2 py-6">
            <div className="hidden lg:block px-5">
                <Image src={faqimg} alt="Frequently Asked Questions w-2/3" />
            </div>
            <div>
                <Heading main={'Frequently Asked Questions'} sub={`FAQ's`} align={'left'} />
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border rounded-lg overflow-hidden transition duration-300 ease-in-out">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-4 bg-primary text-white text-left font-medium"
                            >
                                {faq.question}
                                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                            </button>
                            {/* {openIndex === index && ( */}
                            <div ref={boxRef} className="transition-all duration-300 ease-in-out" style={{ height: openIndex === index ? "120px" : 0 }}>
                                <div className="p-4 bg-gray-100 text-gray-700">{faq.answer}</div>
                            </div>
                            {/* )} */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
