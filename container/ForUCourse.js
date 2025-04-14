import Image from "next/image";
import Heading from "@/components/UI/Heading";
import CourseCard from "@/components/UI/CourseCard";
import { courses } from "@/data/ Courses";

export default function Courses() {
    return (
        <div className="p-6 bg-white py-24">
            <div className="container mx-auto">
                <div className="px-3 flex justify-between">
                    <Heading sub={'Top Picks for You'} main={'Discover Your Next Course'} align={'left'} />
                    <div>
                        <button className="border-[1px] hover:border-[1px] border-primary px-5 bg-primary hover:bg-white hover:text-primary block text-white py-[6px]  rounded">View More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
