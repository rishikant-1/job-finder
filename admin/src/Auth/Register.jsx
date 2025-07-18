import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import Navbar from './Navbar';

function Register() {
  const [passwordConfirm, setPasswordConfirm] = useState(false);
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const { handleSubmit, register, formState: { errors } } = useForm();
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/admin/register', {
        fullname: {
          firstname: data.firstname,
          lastname: data.lastname
        },
        email: data.email,
        password: data.confirmPassword,
        username: data.username
      })
      console.log('user success', response.data);
      navigate("/login")
    } catch (err) {
      if (err.response?.status === 409) {
        console.log(err);

        alert(err.response.data.message);
      } else {
        console.error(err);
        alert("Something went wrong. Please try again.");
      }
    }

  }
  useEffect(() => {
    if (password !== confirmPassword) {
      setPasswordConfirm(false);
      return;
    } else {
      setPasswordConfirm(true)
    }
  }, [password, confirmPassword])
  return (
    <div className="w-full bg-teal-50 p-8 rounded-2xl shadow-md">
      <h2 className="text-3xl font-bold text-center text-teal-700 mb-6">Create Your Account</h2>
      {/* form  */}
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div>
            <label htmlFor='107' className="block font-semibold mb-1">First Name</label>
            {errors.firstname && <span className="text-red-500 text-sm">First Name is required</span>}
            <input
              id='107'
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              {...register("firstname", { required: true })}
            />
          </div>
          <div>
            <label htmlFor='106' className="block font-semibold mb-1">Last Name</label>
            <input
              id='106'
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              {...register("lastname")}
            />
          </div>
        </div>
        <div>
          <label htmlFor='103' className="block font-semibold mb-1">Email</label>
          {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
          <input
            id='103'
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            {...register("email", { required: true })}
          />
        </div>
        <div>
          <label htmlFor='104' className="block font-semibold mb-1">Password</label>
          {errors.password && <span className="text-red-500 text-sm">Password is required</span>}
          <input
            id='104'
            name='password'
            type="password"
            autoComplete='off'
            placeholder="Create a password"
            onInput={(e) => setPassword(e.target.value)}
            className={`${passwordConfirm ? 'focus:ring-teal-500' : 'ring-red-500'} w-full p-2 border rounded-md outline-none ring-1`}
            {
            ...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: "Must contain uppercase, number, and special character",
              },
            })
            }

          />
        </div>
        <div>
          <label htmlFor='105' className="block font-semibold mb-1">Confirm Password</label>
          <input
            id='105'
            name='confirmPassword'
            autoComplete='off'
            type="password"
            onInput={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            className={`${passwordConfirm ? 'focus:ring-teal-500' : 'ring-red-500'} w-full p-2 border rounded-md outline-none ring-1`}
            {...register("confirmPassword", { required: true })}
          />
        </div>

        {/* Submit */}
        <button type='submit' className="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-md transition">
          Register
        </button>

        {/* Bottom Link */}
        <p className="text-center text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-teal-600 hover:underline font-medium">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
