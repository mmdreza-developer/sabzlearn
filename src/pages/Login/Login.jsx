import React from 'react'
import Topbar from "./../../components/Topbar/Topbar"
import Navbar from "./../../components/Navbar/Navbar"
import Footer from "./../../components/Footer/Footer"
import { Link } from "react-router-dom"
import { HiUser } from "react-icons/hi"
import { FaLockOpen } from "react-icons/fa"
import { MdOutlineLogin } from "react-icons/md"
import { RxDotFilled } from "react-icons/Rx"
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { requiredValidator, minValidator, maxValidator, emailValidator } from '../../components/Validators/rules'
import { useForm } from "../../components/Hooks/useForm/useForm"
export default function Login() {
  console.log("Login");
  const userLogin = (event) => {
    event.preventDefault()
    console.log("User Login");
  }
  const [formState, onInputHandler] = useForm({
    username: {
      value: "",
      isValid: false
    },
    password: {
      value: "",
      isValid: false
    }
  }, false)
  console.log(formState);
  return (
    <>
      <Topbar />
      <Navbar />
      <div className='flex flex-col items-center'>
        <div className="flex flex-col  my-10 bg-gray-800 px-4 pb-7 pt-4 rounded-lg relative overflow-hidden" style={{ width: "450px", height: "auto" }}>
          <div className='text-center'>
            <h1 className="text-xl">ورود به حساب کاربری</h1>
            <div className='py-2'>خوشحالیم دوباره میبینمت دوست عزیز :) </div>
            <div className='py-4'>کاربر جدید هستید؟ <Link to="/register" className="bg-gray-700 transition-all py-1 px-2 font-medium text-sm hover:bg-gray-600 text-green-500 rounded">ثبت نام</Link></div>
          </div>
          <form action="" className='flex flex-col gap-y-3 w-full'>
            <label className='w-full relative' htmlFor="">
              <Input id="username" element="input" type="text" className='input_style' placeholder='نام کاربری یا آدرس ایمیل خود را وارد کنید'
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
                onInputHandler={onInputHandler}
              />
              <HiUser className='text-gray-300 absolute left-2 top-2 text-2xl' />
            </label>
            <label className='w-full relative' htmlFor="">
              <Input id="password" element="input" type="password" className='input_style' placeholder="رمز عبور"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(18),
                ]}
                onInputHandler={onInputHandler}
              />
              <FaLockOpen className='text-gray-300 absolute left-2 top-2 text-2xl' />
            </label>
            <label className='w-full relative' htmlFor="">
              <Button onClick={userLogin} disabled={!formState.isFormValid} type="submit" className={`w-full py-2 px-4 rounded flex items-center justify-center relative ${formState.isFormValid ? "bg-green-500":"bg-red-500"}`}>ورود <MdOutlineLogin className='absolute right-2 text-2xl' /></Button>
            </label>
            <div className='flex justify-between text-sm mt-1'>
              <label htmlFor="check" className='flex gap-x-1'>
                <input type="checkbox" id='check' className='outline-none' />
                <span> مرا به خاطر داشته باش </span>
              </label>
              <div>
                <a href="" className='hover:text-gray-300 transition-all'>رمز عبور را فراموش کرده اید؟</a>
              </div>
            </div>
          </form>
          <div className="mt-10 flex flex-col text-xs text-right text-gray-200">
            <p>سلام کاربر محترم.</p>
            <div className='flex flex-col gap-y-2 mt-2'>
              <div className='flex items-center'><RxDotFilled /> لطفا از مرورگر های مطمن و بروز مانند گوگل کروم و فایرفاکس استفاده کنید</div>
              <div className='flex items-center'><RxDotFilled /> ما هرگز اطلاعات شما را از طریق ایمیل درخواست نمیکنیم</div>
              <div className='flex items-center'><RxDotFilled /> لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییذ دهید</div>
            </div>
          </div>
          <div className='absolute bottom-0 h-1 bg-green-500 w-full right-0'></div>
        </div>
      </div>
      <Footer />
    </>
  )
}
