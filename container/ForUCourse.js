import CourseCard from "@/components/UI/CourseCard";
import Heading from "@/components/UI/Heading";
import { ref, get } from "firebase/database";
import { db } from "@/firebase/firebase";
import Link from "next/link";

export default async function ForUCourse() {
    // Fetch courses from Firebase
    const coursesRef = ref(db, "courses");
    const snapshot = await get(coursesRef);

    let courses = [];
    if (snapshot.exists()) {
        const data = snapshot.val();
        courses = Object.keys(data)
            .map((key) => ({ id: key, ...data[key] }))
            .slice(0, 4); 
    }

    return (
        <div className="p-6 bg-white py-24">
            <div className="container mx-auto">
                <div className="px-3 flex justify-between">
                    <Heading sub={"Top Picks for You"} main={"Discover Your Next Course"} align={"left"} />
                    <div>
                        <Link href={'/courses'} className="border-[1px] hover:border-[1px] border-primary px-5 bg-primary hover:bg-white hover:text-primary block text-white py-[6px] rounded">
                            View More
                        </Link>
                    </div>
                </div>
                <div className="grid my-16 md:grid-cols-2 gap-4">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </div>
    );
}
