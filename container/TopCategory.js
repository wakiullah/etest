import Heading from "@/components/UI/Heading";
import { useEffect, useState } from "react";
import { FaPalette, FaCameraRetro, FaBullhorn, FaHeartbeat, FaRobot, FaLaptopCode, FaChartLine, FaDatabase, FaMusic, FaBrain } from "react-icons/fa";

const categories = [
    { name: "Arts & Design", icon: FaPalette, courses: 5 },
    { name: "Photography", icon: FaCameraRetro, courses: 5 },
    { name: "Digital Marketing", icon: FaBullhorn, courses: 5 },
    { name: "Health & Fitness", icon: FaHeartbeat, courses: 5 },
    { name: "Robotics & AI", icon: FaRobot, courses: 8 },
    { name: "Web Development", icon: FaLaptopCode, courses: 5 },
    { name: "Business Analysis", icon: FaChartLine, courses: 5 },
    { name: "Data Science", icon: FaDatabase, courses: 15 },
    { name: "Dance & Music", icon: FaMusic, courses: 5 },
    { name: "Psychology", icon: FaBrain, courses: 6 },
];

const CategoryCard = ({ name, Icon, courses }) => (
    <div className="flex flex-col  items-center p-4 bg-white text-center">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary bg-opacity-[15%] text-4xl text-primary transition-colors duration-300 hover:bg-primary hover:text-white">
            <Icon />
        </div>
        <h3 className="font-semibold mt-2">{name}</h3>
        <p className="text-gray-600 text-sm">Course: <span className="font-bold">{String(courses).padStart(2, '0')}</span></p>
    </div>
);

export default function Categories() {
    const [windowWidth, setWindownWidth] = useState(0)

    useEffect(() => {
        setWindownWidth(window.innerWidth)
    }, [])
    return (
        <section className="container mx-auto py-16 bg-white">
            {<Heading sub={'Explore Categories'} main={'Top Categories'} align={'center'} />}
            <div className="grid px-0 xl:px-20 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center">
                {
                    (windowWidth >= 1280 ? categories.slice(0, 10) : windowWidth >= 1024 ? categories.slice(0, 8) : windowWidth >= 768 ? categories.slice(0, 6) : categories.slice(0, 4)).map((category, index) => (
                        <CategoryCard key={index} name={category.name} Icon={category.icon} courses={category.courses} />
                    ))
                }
            </div>
        </section>
    );
}
