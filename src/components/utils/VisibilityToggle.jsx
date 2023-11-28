import React from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export default function VisibilityToggle({ isPasswordVisible, togglePasswordVisibility }) {
  return (
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
  );
}
