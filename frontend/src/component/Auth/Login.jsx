import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar';
import loginImage from '../../assets/3840170.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import axios from 'axios';

function Login() {
  const [captcha, setCaptcha] = useState('');
  const { register, handleSubmit, formState: { errors, isValid }, resetField, watch, setError } = useForm()
  const navigate = useNavigate()
  const captchaInput = watch('captcha')

  //captcha handling
  const handleCaptchaChange = () => {
    const str = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let newCaptcha = '';
    for (let i = 0; i < 6; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      newCaptcha += str.charAt(charIndex);
    }
    setCaptcha(newCaptcha);
  }
  //form handling
  const onSubmit = async (data) => {

    if (captchaInput !== captcha) {
      setError("captcha", { message: 'Please enter a valid captcha' })
      handleCaptchaChange()
      resetField("captcha", { defaultValue: "", keepError: true, keepTouched: true });
      return
    }
    try {
      const response = await axios.post('/api/v1/users/login', {
        password: data.password,
        email: data.email
      }
      )

      console.log('error 1', response.data);
      navigate("/home")
    } catch (error) {

      console.log('errro22', error);
    }

  }
  useEffect(() => {
    handleCaptchaChange()
    axios.defaults.withCredentials = true;
  }, [])
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Top Nav */}
      <div className="bg-zinc-900 w-full h-16 flex items-center justify-between px-4">
        <NavBar />
      </div>

      {/* Main Login Section */}
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center max-w-6xl mx-auto p-6 gap-10 my-10">

        {/* Left - Form */}
        <div className="w-full lg:w-1/2 bg-teal-50 p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-6">Welcome Back</h2>
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor='102' className="block font-semibold mb-1">Email</label>
              <input
                id='102'
                type="email"
                placeholder="Enter your email"
                className={`${errors.email ? 'ring-red-500':' focus:ring-teal-500'} w-full p-2 ring-1 rounded-md outline-none`}
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <label htmlFor='101' className="block font-semibold mb-1">Password</label>
              <input
                id='101'
                type="password"
                autoComplete='false'
                placeholder="Enter your password"
                className={`${errors.password ? 'ring-red-500':' focus:ring-teal-500'} w-full p-2 ring-1 rounded-md outline-none`}
                {...register("password", { required: true })}
              />
            </div>

            {/* Options */}
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link to="#" className="text-teal-600 hover:underline">Forgot Password?</Link>
            </div>
            {/* Captcha */}
            <div className="flex items-center gap-2">
              <img
                src={`https://dummyimage.com/120x40/cccccc/000000&text=${captcha}`}
                alt="captcha"
                aria-autocomplete='off'
                className="rounded border h-8"
              />
              <input
                type="text"
                autoComplete='false'
                placeholder="Enter captcha"
                className={`p-1 border rounded-md outline-0 w-40 ${errors.captcha ? 'border-red-500' : 'border-gray-300'
                  }`}
                {...register("captcha", { required: 'Please enter valid captcha' })}
              />
              <div aria-live="polite">
                {errors.captcha && (
                  <span className='text-red-500 text-sm'>{errors.captcha.message}</span>
                )}
              </div>
            </div>
            <button className="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-md transition">
              Login
            </button>

            <p className="text-center text-sm">
              Don’t have an account?{' '}
              <Link to="/register" className="text-teal-600 hover:underline font-medium">
                Register here
              </Link>
            </p>
          </form>
        </div>

        {/* Right - Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={loginImage}
            alt="Login Illustration"
            className="w-full h-[450px] object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
