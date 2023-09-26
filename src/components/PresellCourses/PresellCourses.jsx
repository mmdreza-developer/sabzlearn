import React, { useState } from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import CourseBox from '../CourseBox/CourseBox'
import { dataCourses } from '../../datas'
export default function PresellCourses() {
    const [courses, setCourses] = useState(dataCourses)
    return (
        <div className='container'>
            <SectionHeader
                title="دوره های درحال پیش فروش"
                desc="متن تستی برای توضیحات پیش فروش"
            />
            <div className=" gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {courses.preSaleCourses.map(course => (
                    <div key={course.id}>
                        <CourseBox title={course.title} route={course.route} img={course.img} desc={course.desc} teacher={course.teacher} price={course.price} condition={course.condition} numberStudents={course.numberStudents} pointView={course.pointView} comments={course.comments} numberLessons={course.numberLessons} />
                    </div>
                ))}
            </div>
        </div>
    )
}
