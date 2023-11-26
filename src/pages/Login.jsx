import React, { useState } from 'react';
import {
  AiFillFacebook,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import loginBackgroundImg from '../assets/imgs/blue-bg.jpg';

export default function Login() {
  const [isRememberPasswordChecked, setIsRememberPasswordChecked] =
    useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    if (isPasswordVisible) {
      setIsPasswordVisible(false);
    } else {
      setIsPasswordVisible(true);
      setTimeout(() => {
        setIsPasswordVisible(false);
      }, 2000);
    }
  };

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberPassword = (event) => {
    setIsRememberPasswordChecked(event.target.checked);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const dataToSend = {
      username,
      password,
      rememberPassword: isRememberPasswordChecked,
    };
    // just to simulate the data will send to the backend
    console.log('Form Successfully Submitted', dataToSend);
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
          onSubmit={onSubmit}
          className='relative max-w-[400px] w-full mx-auto bg-white p-8'
        >
          <h2 className='py-4 text-4xl font-bold text-center'>User Login</h2>
          <div className='flex justify-between py-8'>
            <p className='relative flex items-center px-6 py-2 font-semibold transition-transform duration-500 transform border shadow-lg cursor-pointer hover:scale-110'>
              <AiFillFacebook className='mr-2' /> Facebook
            </p>
            <p className='relative flex items-center px-6 py-2 font-semibold transition-transform duration-500 transform border shadow-lg cursor-pointer hover:scale-110'>
              <FcGoogle className='mr-2' /> Google
            </p>
          </div>
          <div className='flex flex-col mb-4'>
            <label>Username</label>
            <input
              className='relative w-full p-2 bg-gray-100 border'
              type='text'
              value={username}
              onChange={onUsernameChange}
              placeholder='Type your username here'
            />
          </div>

          <div className='flex flex-col'>
            <label>Password</label>
            <div className='relative flex'>
              <input
                className='relative flex-grow p-2 bg-gray-100 border'
                type={isPasswordVisible ? 'text' : 'password'}
                value={password}
                onChange={onPasswordChange}
                placeholder='Type your password here'
              />
              <button
                type='button'
                className='absolute transform -translate-y-1/2 right-2 top-1/2'
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </button>
            </div>
          </div>
          <div className='flex items-center mt-2'>
            <input
              type='checkbox'
              className='mr-2'
              checked={isRememberPasswordChecked}
              onChange={handleRememberPassword}
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
              href='#register-new-user'
              className='ml-2 text-blue-900 cursor-pointer hover:text-blue-700 text-semibold'
            >
              Sign up now
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
