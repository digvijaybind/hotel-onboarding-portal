import { useDispatch } from 'react-redux';
import { Shadow } from '../Utils/utils';
import styles from './Nav.module.css';
import { showNav } from '@/store/slices';

/**
 * Top Component
 *
 * The `Top` component represents the header section of the application. It includes
 * the logo and a toggle button to show or hide the navigation menu. The component
 * uses Redux for state management to control the visibility of the navigation menu.
 *
 * Features:
 * - Displays the application logo.
 * - Includes a button (visible on small screens and above) to trigger the navigation menu.
 * - Uses `Shadow` component for styling and layout.
 *
 * Dependencies:
 * - `react-redux`: For dispatching Redux actions.
 * - `Shadow`: A custom utility component for adding shadow effects.
 *
 * Usage:
 * - This component should be placed in the application's header or top section.
 * - Ensure that the `showNav` action and `Shadow` component are properly set up.
 *
 * Styling:
 * - The component uses CSS modules for styling, defined in `Nav.module.css`.
 * - The button for toggling the navigation menu is styled with an SVG icon.
 */
const Header = () => {
  // Initialize Redux dispatch
  const dispatch = useDispatch();

  // Handler to dispatch the action for showing/hiding navigation
  const handleNavToggle = () => {
    dispatch(showNav());
  };

  return (
    <div className={styles.Top_container}>
      <Shadow classname="flex justify-center sm:justify-between sm:items-center sm:px-[15px] sm:w-[100%]">
        {/* Logo Image */}
        <img
          className="py-[20px]"
          src="/images/logo.png"
          alt="Application Logo"
        />

        {/* Navigation Toggle Button */}
        <div onClick={handleNavToggle} className="hidden sm:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="31"
            viewBox="0 0 32 31"
            fill="none"
          >
            <rect
              width="32"
              height="31"
              rx="8.56002"
              fill="url(#paint0_linear_184_4215)"
            />
            <path
              d="M12.8909 18.6014C13.0011 18.2989 13.2054 18.0369 13.4757 17.8516C13.746 17.6663 14.0691 17.5668 14.4002 17.5668C14.7314 17.5668 15.0544 17.6663 15.3247 17.8516C15.595 18.0369 15.7993 18.2989 15.9095 18.6014H21.3335V19.6348H15.9095C15.7993 19.9373 15.595 20.1993 15.3247 20.3846C15.0544 20.5699 14.7314 20.6694 14.4002 20.6694C14.0691 20.6694 13.746 20.5699 13.4757 20.3846C13.2054 20.1993 13.0011 19.9373 12.8909 19.6348H10.6669V18.6014H12.8909ZM16.0909 14.9848C16.2011 14.6822 16.4054 14.4203 16.6757 14.235C16.946 14.0497 17.2691 13.9502 17.6002 13.9502C17.9314 13.9502 18.2544 14.0497 18.5247 14.235C18.795 14.4203 18.9994 14.6822 19.1095 14.9848H21.3335V16.0181H19.1095C18.9994 16.3206 18.795 16.5826 18.5247 16.7679C18.2544 16.9532 17.9314 17.0527 17.6002 17.0527C17.2691 17.0527 16.946 16.9532 16.6757 16.7679C16.4054 16.5826 16.2011 16.3206 16.0909 16.0181H10.6669V14.9848H16.0909ZM12.8909 11.3681C13.0011 11.0656 13.2054 10.8036 13.4757 10.6183C13.746 10.433 14.0691 10.3335 14.4002 10.3335C14.7314 10.3335 15.0544 10.433 15.3247 10.6183C15.595 10.8036 15.7993 11.0656 15.9095 11.3681H21.3335V12.4014H15.9095C15.7993 12.704 15.595 12.9659 15.3247 13.1512C15.0544 13.3365 14.7314 13.436 14.4002 13.436C14.0691 13.436 13.746 13.3365 13.4757 13.1512C13.2054 12.9659 13.0011 12.704 12.8909 12.4014H10.6669V11.3681H12.8909ZM14.4002 12.4014C14.5417 12.4014 14.6773 12.347 14.7773 12.2501C14.8773 12.1532 14.9335 12.0218 14.9335 11.8848C14.9335 11.7477 14.8773 11.6163 14.7773 11.5194C14.6773 11.4225 14.5417 11.3681 14.4002 11.3681C14.2588 11.3681 14.1231 11.4225 14.0231 11.5194C13.9231 11.6163 13.8669 11.7477 13.8669 11.8848C13.8669 12.0218 13.9231 12.1532 14.0231 12.2501C14.1231 12.347 14.2588 12.4014 14.4002 12.4014ZM17.6002 16.0181C17.7417 16.0181 17.8773 15.9637 17.9773 15.8668C18.0773 15.7699 18.1335 15.6385 18.1335 15.5014C18.1335 15.3644 18.0773 15.233 17.9773 15.1361C17.8773 15.0392 17.7417 14.9848 17.6002 14.9848C17.4588 14.9848 17.3231 15.0392 17.2231 15.1361C17.1231 15.233 17.0669 15.3644 17.0669 15.5014C17.0669 15.6385 17.1231 15.7699 17.2231 15.8668C17.3231 15.9637 17.4588 16.0181 17.6002 16.0181ZM14.4002 19.6348C14.5417 19.6348 14.6773 19.5803 14.7773 19.4834C14.8773 19.3865 14.9335 19.2551 14.9335 19.1181C14.9335 18.9811 14.8773 18.8497 14.7773 18.7528C14.6773 18.6559 14.5417 18.6014 14.4002 18.6014C14.2588 18.6014 14.1231 18.6559 14.0231 18.7528C13.9231 18.8497 13.8669 18.9811 13.8669 19.1181C13.8669 19.2551 13.9231 19.3865 14.0231 19.4834C14.1231 19.5803 14.2588 19.6348 14.4002 19.6348Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_184_4215"
                x1="16"
                y1="-14.9038"
                x2="16"
                y2="40.7372"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.140112" stopColor="#A0DAFB" />
                <stop offset="1" stopColor="#0A8ED9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </Shadow>
    </div>
  );
};

export default Header;
