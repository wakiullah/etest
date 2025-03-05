import Image from 'next/image';
import Link from 'next/link';

const CourseCard = ({ course }) => {
    return (
        <Link href={'#'}>
            <div className="bg-white lg:flex rounded-lg cursor-pointer border hover:border-primary shadow-md p-4 ">
                {course.badge && (
                    <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-md absolute m-2">
                        {course.badge}
                    </span>
                )}
                <Image src={course.image} alt={course.title} className="object-cover w-full rounded-t-lg h-56 md:h-auto lg:w-60 md:rounded-none md:rounded-s-lg" />
                <div className="mt-4 lg:pl-7" >
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
        </Link>
    );
};

export default CourseCard;