
import "./Landing.css"
import { HiUsers } from "react-icons/hi"
import { GiBlackBook } from "react-icons/gi"
import { BiTimer } from "react-icons/bi"
import Typewriter from 'typewriter-effect';
import LandingCounter from "../LandingCounter/LandingCounter";
export default function Landing() {

    return (
        <div className='landing text-white flex justify-center'>
            <div className=" flex flex-col w-4/5 sm:w-3/4 md:w-2/4 gap-y-2">

                <div className="text-3xl font-medium">
                    <Typewriter className="text-3xl"
                        onInit={(typewriter) => {
                            typewriter.typeString('ما به هر قیمتی دوره آموزشی تولید نمیکنیم!')
                                .start()
                                .pauseFor(2000)
                                .deleteAll()
                            typewriter.typeString('سبزلرن - آکادمی خصوصی برنامه نویسی')
                                .start()
                                .pauseFor(2000)
                        }}
                        options={{
                            loop: true
                        }
                        }
                    />
                </div>
                <div className="mb-3 font-normal">با آکادمی سبزلرن, برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن.</div>
                <div className="h-16 relative">
                    <input type="text" className='w-full h-full outline-none rounded text-black pr-5 text-lg' placeholder="دوست داری چه چیزی یاد بگیری؟" />
                    <button className='absolute left-2 bg-green-400 h-12 w-12 top-2 flex justify-center items-center rounded text-2xl shadow-green-500 hover:shadow-lg hover:bg-green-500 transition duration-500'><i className="fa fa-search"></i></button>
                </div>
                <div className="flex justify-between mt-5 gap-x-2">
                    <div className='text-sm md:text-md flex flex-col items-center'><HiUsers className='text-2xl md:text-5xl' />
                        <div className="count"><LandingCounter count={3071} /></div>
                        <div>کاربر توی سبزلرن ثبت نام کردن</div>
                    </div>
                    <div className='ml-6 text-sm md:text-md flex flex-col items-center'><GiBlackBook className="text-2xl md:text-5xl" />
                        <div className="count"><LandingCounter count={90} /></div>
                        <div>دوره آموزشی داریم</div>
                    </div>
                    <div className='text-sm md:text-md flex flex-col items-center'><BiTimer className="text-2xl md:text-5xl" />
                        <div className="count"><LandingCounter count={3320} /></div>
                        <div>دقیقه آموزش</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
