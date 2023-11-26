import React, { useState } from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import loginBackgroundImg from '../assets/imgs/blue-bg.jpg';

export default function Login() {
  const [isRememberPasswordChecked, setIsRememberPasswordChecked] =
    useState(false);

  const handleRememberPassword = (event) => {
    console.log('test > handleRememberPassword');
    setIsRememberPasswordChecked(event.target.checked);
  };

  console.log(isRememberPasswordChecked);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('form submitted');
    // const dataToSend = {
    // ... other form data
    //  rememberPassword: isRememberPasswordChecked,
    //
    // };
    // console.log(JSON.stringify(dataToSend, null, 2));
    // // send data to backend here
  };

  const onRegisterNewUser = (event) => {
    event.preventDefault();
    console.log('register new user');
  };

  const onGoogleLogin = (event) => {
    event.preventDefault();
    console.log('google login');
  };

  const onFacebookLogin = (event) => {
    event.preventDefault();
    console.log('google login');
  };

  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
      <img
        className='absolute object-cover w-full h-full mix-blend-overlay'
        src={loginBackgroundImg}
        alt='login background image'
      />

      <div className='flex items-center justify-center h-full'>
        <form
          onSubmit={handleSubmit}
          className='max-w-[400px] w-full mx-auto bg-white p-8'
        >
          <h2 className='py-4 text-4xl font-bold text-center'>User Login</h2>
          <div className='flex justify-between py-8'>
            <p
              onChange={onFacebookLogin}
              className='relative flex items-center px-6 py-2 font-semibold transition-transform duration-500 transform border shadow-lg cursor-pointer hover:scale-110'
            >
              <AiFillFacebook className='mr-2' /> Facebook
            </p>
            <p
              onChange={onGoogleLogin}
              className='relative flex items-center px-6 py-2 font-semibold transition-transform duration-500 transform border shadow-lg cursor-pointer hover:scale-110'
            >
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
          <div className='flex items-center mt-2'>
            <input
              type='checkbox'
              id='rememberPasswordCheckbox'
              checked={isRememberPasswordChecked}
              onChange={handleRememberPassword}
              className='mr-2'
            />
            <label htmlFor='rememberPasswordCheckbox' className='text-gray-800'>
              Remember Me
            </label>
          </div>
          <button
            type='submit'
            className='relative w-full py-3 mt-8 text-white bg-blue-900 hover:bg-blue-700'
          >
            Sign In
          </button>
          <p className='mt-8 text-center'>
            Not a member?
            <a
              onChange={onRegisterNewUser}
              href='#register-new-user'
              className='ml-2 text-blue-900 cursor-pointer hover:bg-blue-700 text-semibold'
            >
              Sign up now
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
