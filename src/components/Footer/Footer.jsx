import React, { memo } from 'react'
import FooterItem from '../FooterItem/FooterItem'
import { Link } from 'react-router-dom';

export default memo(function Footer() {
    console.log("Footer");
    return (
        <div className='bg-gray-900 py-12 px-8 my-5'>
            <div className="container">
                <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 text-xs sm:text-sm">
                    <div className='col-span-1 lg:col-span-3'>
                        <FooterItem title="درباره ما">
                            <div className='text-green-100'>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </div>
                        </FooterItem>
                    </div>
                    <div className="col-span-1">
                        <FooterItem title="آموزش فرانت اند">
                            <ul className='flex flex-col gap-1 mt-2'>
                                <li><Link className='text-gray-100 hover:text-green-300 ' >آموزش HTML</Link></li>
                                <li><Link className='text-gray-100 hover:text-green-300 ' >آموزش CSS</Link></li>
                                <li><Link className='text-gray-100 hover:text-green-300 ' >آموزش CSS</Link></li>
                                <li><Link className='text-gray-100 hover:text-green-300 ' >آموزش Bootstrap</Link></li>
                            </ul>
                        </FooterItem>
                    </div>
                    <div className="col-span-1">
                        <FooterItem title="آموزش کتابخونه ها">
                            <ul className='flex flex-col gap-1 mt-2'>
                                <li><Link className='text-green-100 hover:text-green-300 ' >آموزش React.js</Link></li>
                                <li><Link className='text-green-100 hover:text-green-300 ' >آموزش React.Native</Link></li>
                                <li><Link className='text-green-100 hover:text-green-300 ' >آموزش Vue.js</Link></li>
                                <li><Link className='text-green-100 hover:text-green-300 ' >آموزش Angular.js</Link></li>
                            </ul>
                        </FooterItem>
                    </div>
                    <div className="col-span-1">
                        <FooterItem title="آموزش بک اند">
                            <ul className='flex flex-col gap-1 mt-2'>
                                <li><Link className='text-green-100 hover:text-green-300 ' >آموزش Node.js</Link></li>
                                <li><Link className='text-green-100 hover:text-green-300 ' >آموزش Express.js</Link></li>
                                <li><Link className='text-green-100 hover:text-green-300 ' >آموزش MongoDB</Link></li>
                                <li><Link className='text-green-100 hover:text-green-300 ' >آموزش Database</Link></li>
                            </ul>
                        </FooterItem>
                    </div>
                </div>
            </div>
        </div>
    )
})
