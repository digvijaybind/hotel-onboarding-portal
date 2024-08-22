import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

/**
 * Navigation Component
 *
 * The `Nav` component provides a navigation menu with links to various pages
 * in the application. It uses a set of predefined navigation items, each with
 * an icon and a name, which are rendered as a list of clickable items.
 *
 * Features:
 * - Uses `useRouter` from `next/router` for programmatic navigation.
 * - Uses `useDispatch` from `react-redux` for dispatching actions (not utilized
 *   in this component but included for potential future use).
 * - Renders navigation items dynamically from the `navs` array.
 * - Each navigation item consists of an icon (SVG or image) and a corresponding
 *   path, which is used for navigation.
 *
 * Icons:
 * - SVG icons and image files are used to visually represent each navigation item.
 *
 * Dependencies:
 * - `next/router`: For programmatic navigation.
 * - `react-redux`: For state management (not actively used in this component).
 *
 * Usage:
 * - This component should be included in the application's layout where navigation
 *   is required.
 * - Ensure that the paths and icons are correctly configured to match the application's
 *   routing and assets.
 */
const MainNavigation = () => {
  // Initialize router for programmatic navigation
  const router = useRouter();
  const dispatch = useDispatch();

  // Define navigation items with their respective icons, names, and paths
  const navs = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.99996 2.5L1.66663 10H4.16663V16.6667H9.16663V11.6667H10.8333V16.6667H15.8333V10H18.3333L9.99996 2.5ZM14.1666 15H12.5V10H7.49996V15H5.83329V8.49167L9.99996 4.74167L14.1666 8.49167V15Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.83337 8.49164V15H7.50004V9.99997H12.5V15H14.1667V8.49164L10 4.74164L5.83337 8.49164Z"
            fill="#28A745"
            fillOpacity="0.3"
          />
        </svg>
      ),
      name: 'Dashboard',
      path: '/dashboard',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 20.8995L7.05022 15.9497C6.07127 14.9707 5.40459 13.7235 5.1345 12.3656C4.86441 11.0077 5.00304 9.60027 5.53285 8.32119C6.06267 7.04212 6.95988 5.94887 8.11102 5.17971C9.26216 4.41054 10.6155 4 12 4C13.3845 4 14.7378 4.41054 15.889 5.17971C17.0401 5.94887 17.9373 7.04212 18.4671 8.32119C18.997 9.60027 19.1356 11.0077 18.8655 12.3656C18.5954 13.7235 17.9287 14.9707 16.9498 15.9497L12 20.8995ZM15.85 14.8499C16.6114 14.0885 17.1298 13.1184 17.3399 12.0623C17.5499 11.0062 17.442 9.91151 17.03 8.9167C16.6179 7.92189 15.92 7.07162 15.0247 6.4734C14.1294 5.87518 13.0768 5.55589 12 5.55589C10.9232 5.55589 9.87061 5.87518 8.97529 6.4734C8.07997 7.07162 7.38214 7.92189 6.97004 8.9167C6.55795 9.91151 6.4501 11.0062 6.66013 12.0623C6.87016 13.1184 7.38864 14.0885 8.15 14.8499L12 18.6999L15.85 14.8499ZM12 12.5555C11.5874 12.5555 11.1918 12.3916 10.9001 12.0999C10.6083 11.8082 10.4444 11.4125 10.4444 10.9999C10.4444 10.5874 10.6083 10.1917 10.9001 9.89999C11.1918 9.60827 11.5874 9.44438 12 9.44438C12.4126 9.44438 12.8082 9.60827 13.0999 9.89999C13.3917 10.1917 13.5556 10.5874 13.5556 10.9999C13.5556 11.4125 13.3917 11.8082 13.0999 12.0999C12.8082 12.3916 12.4126 12.5555 12 12.5555Z"
            fill="white"
          />
        </svg>
      ),
      name: 'GPS or Maps',
      path: '/gps',
    },
    {
      icon: <img src="/images/weather.svg" alt="Weather Conditions" />,
      name: 'Weather Conditions',
      path: '/weather-conditions',
    },
    {
      icon: <img src="/images/medical.png" alt="Medical Equipments" />,
      name: 'Medical Equipments',
      path: '/medical-equipments',
    },
    {
      icon: <img src="/images/fly.png" alt="Aircraft Status" />,
      name: 'Aircraft Status',
      path: '/aircraft-status',
    },
  ];

  // Handler for navigation
  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <nav>
      <ul>
        {navs.map((nav, index) => (
          <li key={index}>
            <button
              onClick={() => handleNavigation(nav.path)}
              style={{
                display: 'flex',
                alignItems: 'center',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {nav.icon} {nav.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNavigation;
