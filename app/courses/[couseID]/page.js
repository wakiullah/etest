import { FaCheckCircle } from "react-icons/fa";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import Curriculum from "@/container/Curriculam";
import { courseData } from "@/data/CourseDetails";
import Instructor from "@/components/UI/Instructor";
import Review from "@/components/Review";

export default function CoursePage() {
    return (
        <div className="container mx-auto p-4 grid md:grid-cols-3 gap-8">
            {/* Left Section */}
            <div className="md:col-span-2 space-y-6">
                <h1 className="text-3xl font-bold">{courseData.title}</h1>
                <p className="text-gray-600">{courseData.reviews}</p>
                <div className="grid grid-cols-4 space-x-4 border-y py-3 text-gray-700">
                    <p className="">Created by: <br /> <strong>{courseData.creator}</strong></p>
                    <p>Total Enrolled:<br /> <strong>{courseData.totalEnrolled}</strong></p>
                    <p>Last Update:<br /><strong>{courseData.lastUpdate}</strong> </p>
                    <p>Category:<br /> <strong>{courseData.category}</strong></p>
                </div>
                <p className="text-gray-700">{courseData.description}</p>
                <h2 className="text-xl font-semibold">What You'll Learn</h2>
                <ul className="space-y-2 grid grid-cols-2 bg-gray-100 rounded-lg p-4 py-8 gap-x-6 gap-y-2">
                    {courseData.learningPoints.map((item, index) => (
                        <li key={index} className="flex items-center space-x-2 text-gray-700">
                            <FaCheckCircle className="text-green-500" /> <span>{item}</span>
                        </li>
                    ))}
                </ul>

                <div>
                    <Curriculum />
                    <Instructor/>
                    <Review/>
                </div>
            </div>

            {/* Right Section */}
            <div className="bg-white shadow-lg rounded-lg   p-4">
                <div className="sticky top-12">
                    <div className="relative w-full  h-48 md:h-64 bg-gray-200 flex items-center justify-center rounded-md">
                        <BsFillPlayCircleFill className="text-green-600 text-6xl cursor-pointer" />
                    </div>
                    <div className="mt-4  space-y-2">
                        <p className="text-2xl mb-4 font-semibold">{courseData.price} <span className="text-gray-500 line-through">{courseData.oldPrice}</span></p>
                        <div className=" text-gray-500">
                            {courseData.details.map((detail, index) => (
                                <div key={index} className="flex py-2 border-b justify-between items-center  font-xs space-x-2">
                                    <p className="flex gap-2"> {detail.icon} <span className=" -mt-1">{detail.label}:</span></p>
                                    <p>{detail.value}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 flex space-x-2">
                            <button className="flex-1 bg-green-600 text-white py-2 rounded-lg flex items-center justify-center space-x-2">
                                <AiOutlineShoppingCart className="text-lg" /> <span>Add To Cart</span>
                            </button>
                            <button className="flex-1 border border-gray-300 py-2 rounded-lg flex items-center justify-center space-x-2">
                                <AiOutlineHeart className="text-lg text-red-500" /> <span>Wishlist</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
