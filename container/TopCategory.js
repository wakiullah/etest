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
    <div className=" flex flex-col items-center p-4 bg-white  w-40 text-center">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-100 text-4xl text-primary transition-colors duration-300 hover:bg-primary hover:text-white">
            <Icon />
        </div>
        <h3 className="font-semibold mt-2">{name}</h3>
        <p className="text-gray-600 text-sm">Course: <span className="font-bold">{String(courses).padStart(2, '0')}</span></p>
    </div>
);

export default function Categories() {
    return (
        <section className="container mx-auto py-10 bg-gray-50">
            <div className="text-center mb-8">
                <p className="text-green-500 uppercase">Explore Categories</p>
                <h2 className="text-3xl font-bold">Top Categories</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                {categories.map((category, index) => (
                    <CategoryCard key={index} name={category.name} Icon={category.icon} courses={category.courses} />
                ))}
            </div>
        </section>
    );
}
