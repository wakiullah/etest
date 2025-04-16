import CourseCard from '@/components/UI/CourseCard';
import Heading from '@/components/UI/Heading';
import { ref, get } from 'firebase/database';
import { db } from '@/firebase/firebase';

export default async function Courses() {
  const coursesRef = ref(db, 'courses');
  const snapshot = await get(coursesRef);
  let courses = [];

  if (snapshot.exists()) {
    const data = snapshot.val();

    courses = Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));
  }

  return (
    <section className="container mx-auto mt-12">
      <Heading sub={'OUR COURSES'} main={'Explore our Courses'} align={'center'} />
      <div className="grid my-16 md:grid-cols-2 gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
