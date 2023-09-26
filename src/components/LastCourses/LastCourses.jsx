import React, { useState } from 'react'
import CourseBox from '../CourseBox/CourseBox'
import SectionHeader from "../SectionHeader/SectionHeader"
import { dataCourses } from '../../datas'
export default function LastCourses() {
    const [courses, setCourses] = useState(dataCourses)
    console.log(courses);
    return (
        <div className="container">
            <SectionHeader title="جدیدترین دوره ها" desc="سکوی پرتاب شما به سوی موفقیت" btnTitle="دوره های بیشتر" btnHref="courses" />
            <div className=" gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {courses.newCourses.map(course => (
                    <div key={course.id}>
                        <CourseBox title={course.title} route={course.route} img={course.img} desc={course.desc} teacher={course.teacher} price={course.price} condition={course.condition} numberStudents={course.numberStudents} pointView={course.pointView} comments={course.comments} numberLessons={course.numberLessons} />
                    </div>
                ))}

            </div>
        </div>
    )
}
