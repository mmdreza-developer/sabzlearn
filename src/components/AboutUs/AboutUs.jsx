import React from 'react'
import AboutUsBox from '../AboutUsBox/AboutUsBox'
import SectionHeader from "../SectionHeader/SectionHeader"
import { TbCopyright } from "react-icons/tb"
import { BsXDiamondFill } from "react-icons/bs"
import { FaCrown, FaLeaf } from "react-icons/fa"
export default function AboutUs() {
  return (
    <>
      <div className="container">
        <SectionHeader title="ما چه کمکی بهتون میکنیم؟" desc="از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست" />
      </div>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 mr-10">
          <AboutUsBox icon={<TbCopyright />} title="دوره های اختصاصی" desc="با پشتیبانی و کیفیت بالا ارایه میده !" />
          <AboutUsBox icon={<FaLeaf />} title="اجازه تدریس" desc="به هر مدرسی رو نمیده. چون کیفیت براش مهمه !" />
          <AboutUsBox icon={<BsXDiamondFill />} title="دوره پولی و رایگان" desc="براش مهم نیست . به مدرسینش حقوق میده تا نهایت کیفیت رو در پشتیبانی و آپدیت دوره ارایه بده" />
          <AboutUsBox icon={<FaCrown />} title="اهمیت کاربر" desc="اولیت اول آخر آکادمی آموزش برنامه نویسی سبزلرن اهمیت به کاربرها و رفع نیاز های آموزشی و رسوندن اونها به بازار کار است" />
        </div>
      </div>
    </>
  )
}
