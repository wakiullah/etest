import { FaClock, FaLanguage, FaBook, FaCertificate } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import Curriculum from "@/container/Curriculam";
import Instructor from "@/components/UI/Instructor";
import Review from "@/components/Review";
import { ref, get } from "firebase/database";
import { db } from "@/firebase/firebase";
import Image from "next/image";


export default async function CourseDetails({ params }) {
    const { courseid } = await params;

    const coursesRef = ref(db, "courses");
    const snapshot = await get(coursesRef);

    let courseData = null;


    if (snapshot.exists()) {
        const data = snapshot.val();
        courseData = Object.keys(data)
            .map((key) => ({ id: key, ...data[key] }))
            .find((course) => course.id === courseid);
    }

    if (!courseData) {
        return (
            <div className="container mx-auto p-4 ">
                <h1 className="text-3xl font-bold text-center">Course Not Found</h1>
            </div>
        );
    }


    let learningPoints = [];
    let curriculamData = []
    try {
        learningPoints = JSON.parse(courseData.learningPoints);
        curriculamData = JSON.parse(courseData.curriculumData);
    } catch (error) {
        console.error("Error parsing learningPoints:", error);
    }

    const details = [
        { icon: FaClock, label: "Duration", value: courseData.duration },
        { icon: FaLanguage, label: "Language", value: courseData.language },
        { icon: FaBook, label: "Lectures", value: courseData.lecturesCount },
        { icon: BsBarChart, label: "Level", value: courseData.level },
        { icon: AiOutlineCalendar, label: "Last Update", value: courseData.lastUpdate },
        { icon: FaCertificate, label: "Certificate", value: courseData.certificate },
    ];


    return (
        <div className="container md:mt-7 p mx-auto p-4 grid md:grid-cols-3 gap-8 mb-10">
            {/* Left Section */}
            <div className="md:col-span-2 space-y-6">
                <h1 className="text-3xl font-bold">{courseData.title}</h1>
                <p className="text-gray-600">{courseData.reviews}</p>
                <div className="grid grid-cols-4 space-x-4 border-y py-3 text-gray-700">
                    <p className="">Created by: <br /> <strong>{courseData.creator}</strong></p>
                    <p>Total Enrolled:<br /> <strong>{courseData.totalEnrolled}</strong></p>
                    <p>Duration:<br /><strong>{courseData.duration}</strong> </p>
                    <p>Category:<br /> <strong>{courseData.category}</strong></p>
                </div>
                <p className="text-gray-700">{courseData.description}</p>
                <h2 className="text-xl font-semibold">What You'll Learn</h2>
                <ul className="space-y-2 grid grid-cols-2 bg-gray-100 rounded-lg p-4 py-8 gap-x-6 gap-y-2">
                    {learningPoints.map((item, index) => (
                        <li key={index} className="flex items-center space-x-2 text-gray-700">
                            <FaCheckCircle className="text-green-500" /> <span>{item}</span>
                        </li>
                    ))}
                </ul>

                <div>
                    <Curriculum curriculamData={curriculamData} />
                    <Instructor />
                    <Review />
                </div>
            </div>
            {/* Right Section */}
            <div className="bg-white shadow-lg rounded-lg p-4">
                <div className="sticky top-12">
                    <div className="relative w-full h-48 md:h-64 bg-gray-200 flex items-center justify-center rounded-md">
                        {courseData.imageUrl ? (
                            <Image
                                src={courseData.imageUrl}
                                alt={courseData.title}
                                className="w-full h-full object-cover rounded-md"
                                width={500}
                                height={500}
                            />
                        ) : (
                            <BsFillPlayCircleFill className="text-green-600 text-6xl cursor-pointer" />
                        )}
                    </div>
                    <div className="mt-4 space-y-2">
                        <p className="text-2xl mb-4 font-semibold">৳{courseData.price} <span className="ml-2 text-xl text-gray-500 line-through">৳{courseData.oldPrice}</span></p>
                        <div className="text-gray-500">
                            {details.map((detail, index) => (
                                <div key={index} className="flex py-2 border-b justify-between items-center font-xs space-x-2">
                                    <p className="flex gap-2">
                                        <detail.icon className="text-gray-600" />
                                        <span className="-mt-1">{detail.label}:</span>
                                    </p>
                                    <p>{detail.value}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}