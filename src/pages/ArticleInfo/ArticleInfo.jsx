import React from 'react'
import Topbar from "../../components/Topbar/Topbar"
import Navbar from "../../components/Navbar/Navbar"
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb"
import Footer from "../../components/Footer/Footer"
import SectionPost from '../../components/SectionPost/SectionPost'
import SectionMenuArticle from '../../components/SectionMenuArticle/SectionMenuArticle'
import CommentTextArea from '../../components/CommentTextArea/CommentTextArea'
export default function ArticleInfo() {
  console.log("ArticleInfo");
  return (
    <div>
      <Topbar />
      <Navbar />
      <Breadcrumb links={[
        { id: 1, title: "خانه", to: "/" },
        { id: 2, title: "مقاله ها", to: "article-info/1" },
        { id: 3, title: "ویو vs ریکت", to: "article-info/1" },
      ]} />
      <div className="container">
        <div className="grid grid-cols-12 my-6">
          <div className="col-span-12 md:col-span-12 lg:col-span-8 order-2 lg:order-1">
            <div className='flex flex-col'>
              <SectionPost title="معرفی بهترین سایت جاوا اسکریپت ]تجربه محور[ + آموزش رایگان" subTitle="بهترین دوره پروژه محور" img={`${2}jpg`} >
                <div className='flex gap-x-8 text-xs md:text-sm lg:text-base font-medium'>
                  <div className='text-white flex gap-x-1'>
                    <img src="/images/svgs/star_fill.svg" alt="" />
                    <img src="/images/svgs/star_fill.svg" alt="" />
                    <img src="/images/svgs/star_fill.svg" alt="" />
                    <img src="/images/svgs/star_fill.svg" alt="" />
                    <img src="/images/svgs/star.svg" alt="" />
                  </div>
                  <div>4.2/5 - (امتیاز)</div>
                </div>
                <div>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.

                </div>
              </SectionPost>
              <SectionPost title="معرفی بهترین سایت جاوا اسکریپت ]تجربه محور[ + آموزش رایگان" subTitle="بهترین دوره پروژه محور" img={`${3}.jpeg`} >
                <div className='flex gap-x-8 text-xs md:text-sm lg:text-base font-medium'>
                  <div className='text-white flex gap-x-1'>
                    <img src="/images/svgs/star_fill.svg" alt="" />
                    <img src="/images/svgs/star_fill.svg" alt="" />
                    <img src="/images/svgs/star_fill.svg" alt="" />
                    <img src="/images/svgs/star_fill.svg" alt="" />
                    <img src="/images/svgs/star.svg" alt="" />
                  </div>
                  <div>4.2/5 - (امتیاز)</div>
                </div>
                <div>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </div>
              </SectionPost>
              <SectionPost title="معرفی بهترین سایت جاوا اسکریپت ]تجربه محور[ + آموزش رایگان" subTitle="بهترین دوره پروژه محور" img={`${4}.png`} >
                <div className='flex gap-x-8 text-xs md:text-sm lg:text-base font-medium'>
                  <div className='text-white flex gap-x-1'>
                    <img src="/images/svgs/star_fill.svg" alt="" />
                    <img src="/images/svgs/star_fill.svg" alt="" />
                    <img src="/images/svgs/star_fill.svg" alt="" />
                    <img src="/images/svgs/star_fill.svg" alt="" />
                    <img src="/images/svgs/star.svg" alt="" />
                  </div>
                  <div>4.2/5 - (امتیاز)</div>
                </div>
                <div>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </div>
              </SectionPost>
            </div>
            <CommentTextArea />
          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-4 text-center m-3 order-1 lg:order-2">
            <div className='mt-4 flex flex-col gap-y-2 shadow-gray-100 shadow-md p-4'>
              <SectionMenuArticle title="پر امتیاز ترین دوره ها" />
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-1">
                <div className='flex gap-x-2 items-center'>
                  <div className='w-24 overflow-hidden rounded'><img className='w-28' src="/images/courses/js_project.png" alt="" /></div>
                  <div className='text-xs md:text-sm'>پروژه های تخصصی با جاوا اسکریپت</div>
                </div>
                <div className='flex gap-x-2 items-center'>
                  <div className='w-24 overflow-hidden rounded'><img className='w-28' src="/images/courses/python.png" alt="" /></div>
                  <div className='text-xs md:text-sm'>پروژه های تخصصی با جاوا اسکریپت</div>
                </div>
                <div className='flex gap-x-2 items-center'>
                  <div className='w-24 overflow-hidden rounded'><img className='w-28' src="/images/courses/nodejs.png" alt="" /></div>
                  <div className='text-xs md:text-sm'>پروژه های تخصصی با پایتون </div>
                </div>
                <div className='flex gap-x-2 items-center'>
                  <div className='w-24 overflow-hidden rounded'><img className='w-28' src="/images/courses/jango.png" alt="" /></div>
                  <div className='text-xs md:text-sm'>پروژه های تخصصی با جاوا اسکریپت</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
