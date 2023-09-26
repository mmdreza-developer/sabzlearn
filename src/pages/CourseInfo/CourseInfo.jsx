import React, { useState } from 'react'
import Topbar from "../../components/Topbar/Topbar"
import Navbar from "../../components/Navbar/Navbar"
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import Footer from "../../components/Footer/Footer"
import { BsTelegram, BsTwitter, BsFillPlayFill, BsPeopleFill, } from "react-icons/bs"
import CourseDetailBox from '../../components/CourseDetailBox/CourseDetailBox'
import { AiFillClockCircle, AiOutlineLineChart } from "react-icons/ai"
import { MdDateRange, MdOutlineNotificationImportant } from "react-icons/md"
import { FaUserAlt, FaComments, FaGraduationCap, FaFacebookF } from "react-icons/fa"
import SectionHeader from "../../components/SectionHeader/SectionHeader"
import { RiEyeLine } from "react-icons/ri"
import { IoIosLink } from "react-icons/io"
import TeacherInfo from '../../components/TeacherInfo/TeacherInfo'
import CommentTextArea from '../../components/CommentTextArea/CommentTextArea'
import AccordionBox from '../../components/AccordionBox/AccordionBox'
import { Link, useParams } from 'react-router-dom'
import { dataCourses } from '../../datas'
export default function CourseInfo() {
  const [courses, setCourses] = useState(dataCourses)
  const param = useParams().courseName
  console.log(param);
  return (
    <div>
      <Topbar />
      <Navbar />
      <Breadcrumb links={
        [
          { id: 1, title: "خانه", to: "/" },
          { id: 2, title: "آموزش برنامه نویسی فرانت اند", to: "/category-info/frontend" },
          { id: 3, title: `دوره متخصص ${param} `, to: "/course-info/js-expert" },
        ]
      } />
      {courses.allCourses.map(course => {
        if (course.route == param) {
          return <div className="container">
            <div className=" grid grid-cols-1 md:grid-cols-2 m-6 md:gap-x-4">

              <div className='my-2'>
                <div className="font-bold text-md mb-3">{course.title}</div>
                <div className='text-right'>در کادر زیر هر متنی را که دوست دارید تایپ کنید تا ما آن را برایتان نگه داریم و همیشه در دسترس شما قرار دهیم؛ از این طریق می‌توانید متن آزمایشی و متن تستی خودتان را تایپ کرده و در طرح‌هایتان از این متن استفاده کنید... تایپ کنید، به صورت خودکار ذخیره می‌شود.</div>
                <div className='flex gap-x-2 text-lg mt-2'>
                  <a className='hover:text-green-500 text-green-400 transition-all' href=""><BsTelegram /></a>
                  <a className='hover:text-green-500 text-green-400 transition-all' href=""><BsTwitter /></a>
                  <a className='hover:text-green-500 text-green-400 transition-all' href=""><FaFacebookF /></a>
                </div>
              </div>
              <div className='w-full'>
                <video className='w-full'
                  src=""
                  poster={course.img}
                  controls
                ></video>
              </div>
            </div>
            <div className="grid grid-cols-12 my-6">
              <div className="col-span-12 md:col-span-12 lg:col-span-8 order-2 lg:order-1">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-col-4 xl:grid-cols-5 gap-y-5 text-center">
                  <CourseDetailBox icon={<FaGraduationCap />} title="وضعیت دوره:" text="به اتمام رسیده" />
                  <CourseDetailBox icon={<AiFillClockCircle />} title="مدت زمان دوره:" text={`${course.timeCourse} ساعت`} />
                  <CourseDetailBox icon={<MdDateRange />} title="آخرین بروزرسانی" text="آنلاین" />
                  <CourseDetailBox icon={<FaUserAlt />} title="روش پشتیبانی" text="به اتمام رسیده" />
                  <CourseDetailBox icon={<MdOutlineNotificationImportant />} title="پیش نیاز" text="HTML CSS" />
                  <CourseDetailBox icon={<BsFillPlayFill />} title="نوع مشاهده :" text="ظبط شده / آنلاین" />
                </div>
                <div className="p-3 flex flex-col gap-y-3 mt-5 bg-green-200 text-black rounded">
                  <div className='flex gap-x-1 items-center'><AiOutlineLineChart className='text-2xl' /> <div className='text-sm'>درصد پیشرفت دوره: 75%</div></div>
                  <div className='h-4 w-full bg-green-300 rounded-full overflow-hidden relative'><span className='absolute right-0 w-2/3 bg-gradient-to-r from-green-500 to-green-400 h-4'></span></div>
                </div>
                <div className="">
                  <div>
                    <SectionHeader title="آموزش 20 کتابخانه جاوا اسکریپت بازار کار" />
                  </div>
                  <div className='rounded-lg overflow-hidden'>
                    <img src="/images/info/1.gif" alt="" />
                  </div>
                  <div className="text-sm md:text-sm lg:text-base m-2 p-1 text-justify">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                  </div>
                </div>
                <div className="">
                  <div>
                    <SectionHeader title="هدف از این دوره چیست؟(تنها را ورود به بازار کار و کسب درآمد است)" />
                  </div>
                  <div className='rounded-lg overflow-hidden'>
                    <img src="/images/info/2.jpg" alt="" />
                  </div>
                  <div className="text-sm md:text-sm lg:text-base m-2 p-1 text-justify">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                  </div>
                </div>
                <div className='flex gap-x-1 mr-3'>
                  <button className='py-2 px-3 border-2 font-medium border-green-500 text-green-500 hover:text-white hover:bg-green-500 rounded transition-all'>دانلود همگانی ویدیو ها</button>
                  <button className='py-2 px-3 border-2 font-medium border-green-500 text-green-500 hover:text-white hover:bg-green-500 rounded transition-all'>دانلود همگانی پیوست ها</button>
                </div>
                <div className="my-12">
                  <AccordionBox title="معرفی دوره" desc="معرفی دوره + چرا یادگیری کتابخانه ها ضروری است؟" time="18:34" />
                  <AccordionBox title="اصلاحات مقدماتی" desc="معرفی دوره + چرا یادگیری کتابخانه ها ضروری است؟" time="18:34" />

                </div>
                <TeacherInfo avatar="teacher" name={course.teacher} expert="Front-End / React.JS Developer" desc="با برنامه نویسی اولین بار در دانشگاه آشنا شدم . و با HTML & CSS شروع کردم<" />
                <CommentTextArea />
              </div>
              <div className="col-span-12 md:col-span-12 lg:col-span-4 text-center m-3 order-1 lg:order-2">
                <div className='p-4 border-2 border-gray-100 shadow-md shadow-gray-100 rounded my-4'>
                  <div className='text-center flex justify-center'>
                    <button className='text-white bg-green-500 hover:bg-green-600 w-72 rounded flex h-12 justify-center items-center gap-x-2'><FaGraduationCap className='text-2xl' /> <span>دانشجوی دوره هستید</span></button>
                  </div>
                </div>
                <div className='p-4 border-2 border-gray-100 shadow-md shadow-gray-100 rounded my-4'>
                  <div className='flex items-center justify-center mt-5 gap-x-1'>
                    <BsPeopleFill className='text-2xl text-gray-100' />
                    <div className='font-bold text-gray-100'>تعداد دانشجو :</div>
                    <div className='bg-green-300 text-white px-2 py-1  rounded'>{course.numberStudents}</div>
                  </div>
                  <div className='flex gap-x-12 justify-center my-5'>
                    <div className='flex items-center gap-2 text-gray-100 font-medium'><FaComments className='text-2xl' /><span className='text-sm'> {course.comments} دیدگاه</span></div>
                    <div className='flex items-center gap-2 text-gray-100 font-medium'><RiEyeLine className='text-2xl' /> <span className='text-sm'>{course.pointView}دیدگاه</span></div>
                  </div>
                </div>
                <div className='py-6 px-4 border-2 border-gray-100 shadow-md shadow-gray-100 rounded my-4'>
                  <div className='flex flex-col gap-y-2 mr-0 md:mr-10 divide-gray-200 divide-y-2'>
                    <div className='flex items-center gap-1 text-gray-100 font-medium'><IoIosLink className='text-2xl' /> <span>لینک کوتاه</span></div>
                    <div className='text-right text-gray-400 text-sm pt-1'>https://sabzlearn.ir?p=117/472</div>
                  </div>
                </div>
                <div className="p-4 border-2 border-gray-100 shadow-md shadow-gray-100 rounded my-4">
                  <div className='flex flex-col items-start text-gray-100'>
                    <h1 className='text-xl font-medium'>سرفصل های دور</h1>
                    <div className='text-sm'>برای مشاهده دوره روی کلمه <Link to="" className='text-blue-500 hover:text-blue-400' > کلیک </Link>کنید</div>
                  </div>
                </div>
                <div className='p-4 border-2 border-gray-100 shadow-md shadow-gray-100 rounded my-4'>
                  <div className="flex flex-col items-start gap-y-3 text-gray-100">
                    <h1 className='text-lg font-medium'>دوره های مرتبط</h1>
                    <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-1'>
                      <Link to="/course-info/javascript" className='flex gap-2 items-center font-medium'>
                        <div className='w-24 h-12 rounded overflow-hidden'><img src="/course-images/javascript.jpg" alt="" /></div>
                        <div className='text-xs md:text-sm'>پروژه های تخصصی با جاوا اسکریپت</div>
                      </Link>
                      <Link to="/course-info/jango" className='flex gap-2 items-center font-medium'>
                        <div className='w-24 h-12 rounded overflow-hidden'><img src="/course-images/jango.png" alt="" /></div>
                        <div className='text-xs md:text-sm'>پروژه های تخصصی با جنگو </div>
                      </Link>
                      <Link to="/course-info/nodejs" className='flex gap-2 items-center font-medium'>
                        <div className='w-24 h-12 rounded overflow-hidden'><img src="/course-images/nodejs.jpg" alt="" /></div>
                        <div className='text-xs md:text-sm'>پروژه های تخصصی با  نود جی اس</div>
                      </Link>
                      <Link to="/course-info/javascript" className='flex gap-2 items-center font-medium'>
                        <div className='w-24 h-12 rounded overflow-hidden'><img src="/course-images/python.png" alt="" /></div>
                        <div className='text-xs md:text-sm'>پروژه های تخصصی با پایتون </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      })}

      <Footer />
    </div>
  )
}
