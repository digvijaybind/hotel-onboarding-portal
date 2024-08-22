'use client';

import { useDispatch } from 'react-redux';
import { Shadow } from '../Utils/utils';
import styles from './Nav.module.css';
import { showNav } from '@/store/slices';

const Top = () => {
  const dispatch = useDispatch();

  const handleNavToggle = () => {
    dispatch(showNav());
  };

  return (
    <div className={styles.Top_container}>
      <Shadow className="flex justify-center sm:justify-between sm:items-center sm:px-4 sm:w-full">
        <img
          className="py-5"
          src="/images/logo.png"
          alt="Company Logo"
          aria-label="Company Logo"
        />
        <button
          onClick={handleNavToggle}
          className="hidden sm:block"
          aria-label="Toggle Navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="31"
            viewBox="0 0 32 31"
            fill="none"
          >
            <rect width="32" height="31" rx="8.56" fill="url(#paint0_linear)" />
            <path
              d="M12.891 18.601c.11-.303.315-.565.585-.75.271-.185.594-.285.925-.285s.654.1.925.285c.271.185.476.447.585.75h5.424v1.033h-5.424c-.11.303-.315.565-.585.75-.271.185-.594.285-.925.285s-.654-.1-.925-.285c-.271-.185-.476-.447-.585-.75H10.667v-1.033h2.224zM16.091 14.985c.111-.303.316-.565.586-.75.271-.185.594-.285.925-.285.33 0 .654.1.925.285.271.185.476.447.585.75h5.424v1.034h-5.424c-.11.303-.315.565-.585.75-.271.185-.594.285-.925.285-.33 0-.654-.1-.925-.285-.271-.185-.476-.447-.585-.75H10.667v-1.034h5.424zM12.891 11.368c.11-.303.315-.565.585-.75.271-.185.594-.285.925-.285s.654.1.925.285c.271.185.476.447.585.75h5.424v1.033h-5.424c-.11.303-.315.565-.585.75-.271.185-.594.285-.925.285s-.654-.1-.925-.285c-.271-.185-.476-.447-.585-.75H10.667v-1.033h2.224z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="16"
                y1="-14.904"
                x2="16"
                y2="40.737"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.14" stopColor="#A0DAFB" />
                <stop offset="1" stopColor="#0A8ED9" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </Shadow>
    </div>
  );
};

export default Top;
