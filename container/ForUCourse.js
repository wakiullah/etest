import Image from "next/image";
import course1img from '@/public/assests/course1.png'
import Heading from "@/components/UI/Heading";
const courses = [
    {
        id: 1,
        title: "Introduction to Coding and Programming",
        description: "This course introduces students to the basics of coding and computer programming",
        price: "$1005.00",
        originalPrice: "$1525.00",
        discount: "10% Off",
        rating: 4.8,
        ratingsCount: 313,
        lessons: 25,
        students: 200,
        badge: "10% Off",
        image: course1img, // Replace with actual path
    },
    {
        id: 2,
        title: "Media Literacy and Critical Thinking",
        description: "Students will learn to evaluate the credibility of sources, recognize bias, and understand the impact",
        price: "$1225.00",
        originalPrice: "$1625.00",
        rating: 4.8,
        ratingsCount: 300,
        lessons: 15,
        students: 350,
        badge: "Top",
        image: course1img, // Replace with actual path
    },
    {
        id: 3,
        title: "Media Literacy and Critical Thinking",
        description: "Students will learn to evaluate the credibility of sources, recognize bias, and understand the impact",
        price: "$1225.00",
        originalPrice: "$1625.00",
        rating: 4.8,
        ratingsCount: 300,
        lessons: 15,
        students: 350,
        badge: "Top",
        image: course1img, // Replace with actual path
    },
];

const CourseCard = ({ course }) => {
    return (
        <div className="bg-white lg:flex rounded-lg shadow-md p-4 ">
            {course.badge && (
                <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-md absolute m-2">
                    {course.badge}
                </span>
            )}
            <Image src={course.image} alt={course.title} className="object-cover w-full rounded-t-lg h-56 md:h-auto md:w-60 md:rounded-none md:rounded-s-lg" />
            <div className="mt-4 pl-7" >
                <h3 className="text-2xl font-semibold">{course.title}</h3>
                <p className="text-gray-600 text-lg leading-[1.3]">{course.description}</p>
                <div className="mt-2 flex items-center">
                    <span className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</span>
                    <span className="ml-1 text-gray-500 text-sm">{course.rating} ({course.ratingsCount} Ratings)</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-lg font-bold">{course.price} <span className="text-gray-400 line-through text-sm">{course.originalPrice}</span></p>
                </div>
                <div className="mt-2 text-gray-500 text-sm">
                    <span>{course.lessons} Lessons</span> • <span>{course.students} Students</span>
                </div>
            </div>
        </div>
    );
};

export default function Courses() {
    return (
        <div className="p-6 bg-white pt-24">
            <div className="container mx-auto">
                <div className="px-3 flex justify-between">
                    <Heading sub={'Top Picks for You'} main={'Discover Your Next Course'} align={'left'} />
                    <div>
                        <button className="border-[1px] hover:border-[1px] border-primary px-5 bg-primary hover:bg-white hover:text-primary block text-white py-[6px]  rounded">View More</button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>

            </div>
        </div>
    );
}
