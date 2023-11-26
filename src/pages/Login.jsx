import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import loginBackgroundImg from '../assets/imgs/blue-bg.jpg';

export default function Login() {
  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
      <img
        className='absolute object-cover w-full h-full mix-blend-overlay'
        src={loginBackgroundImg}
        alt='login background image'
      />

      <div className='flex items-center justify-center h-full'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
          <h2 className='py-4 text-4xl font-bold text-center'>User Login</h2>
          <div className='flex justify-between py-8'>
            <p className='relative flex items-center px-6 py-2 border shadow-lg hover:shadow-xl'>
              <AiFillFacebook className='mr-2' /> Facebook
            </p>
            <p className='relative flex items-center px-6 py-2 border shadow-lg hover:shadow-xl'>
              <FcGoogle className='mr-2' /> Google
            </p>
          </div>
          <div className='flex flex-col mb-4'>
            <label>Username</label>
            <input className='relative p-2 bg-gray-100 border' type='text' />
          </div>
          <div className='flex flex-col '>
            <label>Password</label>
            <input
              className='relative p-2 bg-gray-100 border'
              type='password'
            />
          </div>
          <button className='relative w-full py-3 mt-8 text-white bg-indigo-600 hover:bg-indigo-500'>
            Sign In
          </button>
          <p className='flex items-center mt-2'>
            <input className='mr-2' type='checkbox' />
            Remember Me
          </p>
          <p className='mt-8 text-center'>Not a member? Sign up now</p>
        </form>
      </div>
    </div>
  );
}
