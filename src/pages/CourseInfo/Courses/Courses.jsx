import React, { useState } from 'react'
import Topbar from "../../../components/Topbar/Topbar"
import Navbar from "../../../components/Navbar/Navbar"
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'
import CourseBox from '../../../components/CourseBox/CourseBox'
import Footer from '../../../components/Footer/Footer'
import Pagination from "../../../components/Pagination/Pagination"
import { dataCourses } from '../../../datas'
export default function Courses() {
    const [courses, setCourses] = useState(dataCourses)
    return (
        <>
            <Topbar />
            <Navbar />
            <Breadcrumb links={
                [
                    { id: 1, title: "خانه", to: "/" },
                    { id: 2, title: "تمامی دوره ها", to: "/courses" },
                ]
            } />
            <div className="container">
                <div className="row">
                    <div className=" gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-7">
                        {courses.allCourses.map(course => (
                            <div key={course.id}>
                                <CourseBox title={course.title} route={course.route} img={course.img} desc={course.desc} teacher={course.teacher} price={course.price} condition={course.condition} numberStudents={course.numberStudents} pointView={course.pointView} comments={course.comments} numberLessons={course.numberLessons} />
                            </div>
                        ))}
                    </div>
                    <Pagination />
                </div>
            </div>
            <Footer />
        </>
    )
}
