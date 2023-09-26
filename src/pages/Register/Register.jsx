import React, { useReducer } from 'react'
import Topbar from "./../../components/Topbar/Topbar"
import Navbar from "./../../components/Navbar/Navbar"
import Footer from "./../../components/Footer/Footer"
import { Link } from "react-router-dom"
import { HiUser, HiUserAdd } from "react-icons/hi"
import { FaLockOpen } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { RxDotFilled } from "react-icons/rx"
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { requiredValidator, emailValidator, maxValidator, minValidator } from '../../components/Validators/rules'
import { useForm } from "../../components/Hooks/useForm/useForm"
export default function Register() {

  console.log("Register");
  const [formState, onInputHandler] = useForm({
    name: {
      value: "",
      isValid: false
    },
    username: {
      value: "",
      isValid: false
    },
    email: {
      value: "",
      isValid: false
    },
    password: {
      value: "",
      isValid: false
    },
  }, false)
  const registerNewUser = (event) => {
    event.preventDefault()

    const newUserInfo = {
      name: formState.inputs.name.value,
      username: formState.inputs.username.value,
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
      confirmPassword: formState.inputs.password.value
    }
    fetch("loaclhost:3000/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUserInfo)
    }).then(res => console.log(res))
    console.log("User Register");


  }
  return (
    <>
      <Topbar />
      <Navbar />
      <div className='flex flex-col items-center'>
        <div className="flex flex-col  my-10 bg-gray-800 px-4 pb-7 pt-4 rounded-lg relative overflow-hidden" style={{ width: "450px", height: "auto" }}>
          <div className='text-center'>
            <h1 className="text-xl">ورود به حساب کاربری</h1>
            <div className='py-2'>خوشحالیم دوباره میبینمت دوست عزیز :)</div>
            <div className='py-4'>قبلا ثبت نام کرده اید؟<Link to="/login" className="bg-gray-700 transition-all py-1 px-2 font-medium text-sm hover:bg-gray-600 text-green-500 rounded">ورود</Link></div>
          </div>
          <form action="" className='flex flex-col gap-y-3 w-full'>
            <label className='w-full relative' htmlFor="">
              <Input
                id="name"
                element="input"
                type="text"
                className='input_style'
                placeholder="نام و نام خانوادگی"
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  minValidator(6),
                  maxValidator(20),
                ]}
              />
              <HiUser className='text-gray-300 absolute left-2 top-2 text-2xl' />
            </label>
            <label className='w-full relative' htmlFor="">
              <Input
                id="username"
                element="input"
                type="text"
                className='input_style'
                placeholder="نام کاربری"
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
              />
              <HiUser className='text-gray-300 absolute left-2 top-2 text-2xl' />
            </label>
            <label className='w-full relative' htmlFor="">
              <Input
                id="email"
                element="input"
                type="text"
                className='input_style'
                placeholder="آدرس ایمیل"
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  maxValidator(25),
                  minValidator(0),
                  emailValidator
                ]}
              />
              <MdEmail className='text-gray-300 absolute left-2 top-2 text-2xl' />
            </label>
            <label className='w-full relative' htmlFor="">
              <Input
                id="password"
                element="input"
                type="password"
                className='input_style'
                placeholder="رمز عبور"
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  minValidator(6),
                  maxValidator(20),
                ]}
              />
              <FaLockOpen className='text-gray-300 absolute left-2 top-2 text-2xl' />
            </label>
            <label className='w-full relative' htmlFor="">
              <Button onClick={registerNewUser} disabled={!formState.isFormValid} type="submit" className={`w-full py-2 px-4 rounded flex items-center justify-center relative ${formState.isFormValid ? "bg-green-500" : "bg-red-500"}`}>ثبت نام <HiUserAdd className='absolute right-2 text-2xl' /></Button>
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
