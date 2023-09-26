import React, { useState } from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import CourseBox from '../CourseBox/CourseBox'
import { dataCourses } from "../../datas"
export default function PopularCourses() {
  const [courses, setCourses] = useState(dataCourses)
  return (
    <div className='container'>
      <SectionHeader
        title="دوره های محبوب"
        desc="دوره های محبوب بر اساس امتیاز دانشجویان"
      />
      <div className=" gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.bestCourses.map(course => (
          <div key={course.id}>
            <CourseBox title={course.title} route={course.route} img={course.img} desc={course.desc} teacher={course.teacher} price={course.price} condition={course.condition} numberStudents={course.numberStudents} pointView={course.pointView} comments={course.comments} numberLessons={course.numberLessons} />
          </div>
        ))}
      </div>
    </div>
  )
}
