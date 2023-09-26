const dataCourses = {
    allCourses: [
        { id: crypto.randomUUID(), route: "javascript", title: "جاوا اسکریپت", img: "/course-images/javascript.jpg", desc: "", teacher: "محمدامین سعیدی راد", price: 2_000_000, timeCourse: 30, condition: true, numberLessons: 20, numberStudents: 115, pointView: 1245, comments: 653 },
        { id: crypto.randomUUID(), route: "20lib_react", title: "20 کتابخونه پرکاربرد ریکت", img: "/course-images/20lib_react.png", desc: "", teacher: "محمدامین سعیدی راد", price: 4_200_000, timeCourse: 20, condition: true, numberLessons: 20, numberStudents: 115, pointView: 245, comments: 43 },
        { id: crypto.randomUUID(), route: "canvas", title: "دوره کنواس پروژه محور", img: "/course-images/canvas.png", desc: "", teacher: "محمدامین سعیدی راد", price: 1_400_000, timeCourse: 40, condition: true, numberLessons: 20, numberStudents: 115, pointView: 225, comments: 72 },
        { id: crypto.randomUUID(), route: "git", title: "دوره پروژه محور گیت", img: "/course-images/git.jpg", desc: "", teacher: "محمدامین سعیدی راد", price: 2_000_000, timeCourse: 20, condition: true, numberLessons: 20, numberStudents: 115, pointView: 445, comments: 43 },
        { id: crypto.randomUUID(), route: "jango", title: "دوره پروژه محور جنگو", img: "/course-images/jango.png", desc: "", teacher: "محمدامین سعیدی راد", price: 2_000_000, timeCourse: 24, condition: true, numberLessons: 20, numberStudents: 115, pointView: 445, comments: 33 },
        { id: crypto.randomUUID(), route: "mern", title: "دوره پروژه محور Mern Stack", img: "/course-images/mern.jpg", desc: "", teacher: "محمدامین سعیدی راد", price: 1_540_000, timeCourse: 55, condition: true, numberLessons: 20, numberStudents: 115, pointView: 213, comments: 64 },
        { id: crypto.randomUUID(), route: "next", title: "دوره پروژه محور NextJs", img: "/course-images/next.png", desc: "", teacher: "محمدامین سعیدی راد", price: 3_200_000, timeCourse: 23, condition: true, numberLessons: 20, numberStudents: 115, pointView: 289, comments: 26 },
        { id: crypto.randomUUID(), route: "typeScript", title: "دوره پروژه محور تایپ اسکریپت", img: "/course-images/typeScript.jpg", desc: "", teacher: "محمدامین سعیدی راد", price: 3_200_000, timeCourse: 10, condition: true, numberLessons: 20, numberStudents: 115, pointView: 289, comments: 26 },
        { id: crypto.randomUUID(), route: "redux", title: "دوره پروژه محور ریداکس", img: "/course-images/redux.png", desc: "", teacher: "محمدامین سعیدی راد", price: 3_200_000, timeCourse: 70, condition: true, numberLessons: 20, numberStudents: 115, pointView: 289, comments: 26 },
        { id: crypto.randomUUID(), route: "python", title: "دوره پروژه محور پایتون", img: "/course-images/python.png", desc: "", teacher: "محمدامین سعیدی راد", price: 3_200_000, timeCourse: 20, condition: true, numberLessons: 20, numberStudents: 115, pointView: 311, comments: 44 },
        { id: crypto.randomUUID(), route: "nodejs", title: "دوره پروژه محور نود جی اس", img: "/course-images/nodejs.jpg", desc: "", teacher: "محمدامین سعیدی راد", price: 5_300_000, timeCourse: 13, condition: true, numberLessons: 220, numberStudents: 2115, pointView: 999, comments: 344 },
        { id: crypto.randomUUID(), route: "PWA", title: "دوره پروژه محور PWA ", img: "/course-images/pwa.jpg", desc: "", teacher: "محمدامین سعیدی راد", price: 5_300_000, timeCourse: 13, condition: true, numberLessons: 220, numberStudents: 2115, pointView: 999, comments: 344 },
    ]
    ,
    newCourses: [
        { id: crypto.randomUUID(), route: "javascript", title: "جاوا اسکریپت", img: "/course-images/javascript.jpg", desc: "", teacher: "محمدامین سعیدی راد", price: 2_000_000, timeCourse: 30, condition: true, numberLessons: 20, numberStudents: 115, pointView: 1245, comments: 653 },
        { id: crypto.randomUUID(), route: "20lib_react", title: "20 کتابخونه پرکاربرد ریکت", img: "/course-images/20lib_react.png", desc: "", teacher: "محمدامین سعیدی راد", price: 4_200_000, timeCourse: 20, condition: true, numberLessons: 20, numberStudents: 115, pointView: 245, comments: 43 },
        { id: crypto.randomUUID(), route: "canvas", title: "دوره کنواس پروژه محور", img: "/course-images/canvas.png", desc: "", teacher: "محمدامین سعیدی راد", price: 1_400_000, timeCourse: 40, condition: true, numberLessons: 20, numberStudents: 115, pointView: 225, comments: 72 },
    ],
    bestCourses: [
        { id: crypto.randomUUID(), route: "git", title: "دوره پروژه محور گیت", img: "/course-images/git.jpg", desc: "", teacher: "محمدامین سعیدی راد", price: 2_000_000, timeCourse: 20, condition: true, numberLessons: 20, numberStudents: 115, pointView: 445, comments: 43 },
        { id: crypto.randomUUID(), route: "jango", title: "دوره پروژه محور جنگو", img: "/course-images/jango.png", desc: "", teacher: "محمدامین سعیدی راد", price: 2_000_000, timeCourse: 24, condition: true, numberLessons: 20, numberStudents: 115, pointView: 445, comments: 33 },
        { id: crypto.randomUUID(), route: "mern", title: "دوره پروژه محور Mern Stack", img: "/course-images/mern.jpg", desc: "", teacher: "محمدامین سعیدی راد", price: 1_540_000, timeCourse: 55, condition: true, numberLessons: 20, numberStudents: 115, pointView: 213, comments: 64 },
        { id: crypto.randomUUID(), route: "next", title: "دوره پروژه محور NextJs", img: "/course-images/next.png", desc: "", teacher: "محمدامین سعیدی راد", price: 3_200_000, timeCourse: 23, condition: true, numberLessons: 20, numberStudents: 115, pointView: 289, comments: 26 },
        { id: crypto.randomUUID(), route: "javascript", title: "جاوا اسکریپت", img: "/course-images/javascript.jpg", desc: "", teacher: "محمدامین سعیدی راد", price: 2_000_000, timeCourse: 30, condition: true, numberLessons: 20, numberStudents: 115, pointView: 1245, comments: 653 },
    ],
    preSaleCourses: [
        { id: crypto.randomUUID(), route: "redux", title: "دوره پروژه محور ریداکس", img: "/course-images/redux.png", desc: "", teacher: "محمدامین سعیدی راد", price: 3_200_000, timeCourse: 70, condition: true, numberLessons: 20, numberStudents: 115, pointView: 289, comments: 26 },
        { id: crypto.randomUUID(), route: "python", title: "دوره پروژه محور پایتون", img: "/course-images/python.png", desc: "", teacher: "محمدامین سعیدی راد", price: 3_200_000, timeCourse: 20, condition: true, numberLessons: 20, numberStudents: 115, pointView: 311, comments: 44 },
        { id: crypto.randomUUID(), route: "nodejs", title: "دوره پروژه محور نود جی اس", img: "/course-images/nodejs.jpg", desc: "", teacher: "محمدامین سعیدی راد", price: 5_300_000, timeCourse: 13, condition: true, numberLessons: 220, numberStudents: 2115, pointView: 999, comments: 344 },
    ]
}
export {
    dataCourses
}