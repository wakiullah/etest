import CourseCard from '@/components/UI/CourseCard'
import Heading from '@/components/UI/Heading'
import { courses } from '@/data/ Courses'
import React from 'react'

export default function Courses() {
  return (
    <section className='container mx-auto mt-12'>
      <Heading sub={'OUR COUSES'} main={'Explore our Courses'} align={'center'} />
      <div className="grid my-16 md:grid-cols-2 gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  )
}
