import {
  showModals,
  showUpdateModal,
  setIdToBeUpdated,
  setUpdatedata,
  setEmailAddress,
  setOperatorAircrafts,
  setUserId,
  setToken,
} from '@/store/slices';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import swal from 'sweetalert';

export default function BookingStatus({ singleOperator }) {
  const { user_id, operatorAircrafts, token } = useSelector(
    (state) => state.operator,
  );

  // Initialize the dispatch function for Redux actions
  const dispatch = useDispatch();

  // Effect to load token and user ID from local storage on component mount
  useEffect(() => {
    const tokenFromStorage = localStorage.getItem('token');
    if (tokenFromStorage) {
      dispatch(setToken(tokenFromStorage));
    }

    dispatch(setEmailAddress(localStorage.getItem('user_id')));
    dispatch(setUserId(localStorage.getItem('user_id')));
  }, [dispatch]);

  // Fetch aircraft data from the API
  const loadAircraftData = useCallback(() => {
    if (token) {
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}operator/operatorListsOfAircraftOPerators`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )
        .then((res) => res.json())
        .then((response) => {
          console.log('responseData', response);
          dispatch(setOperatorAircrafts(response.aircraftCreatedByOperator));
        })
        .catch((error) => {
          console.error('Error fetching aircraft data:', error);
        });
    }
  }, [token, dispatch]);

  // Fetch aircraft data when component mounts or token changes
  useEffect(() => {
    loadAircraftData();
  }, [loadAircraftData]);

  // Format date string to YYYY-MM-DD
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [isActive, setIsActive] = useState(false); // State to toggle button status

  // Toggle the active state of the button
  const toggleButton = () => {
    setIsActive((prev) => !prev);
  };

  // Table headers
  const header = ['Id', 'Aircraft Type', 'Location', 'Status'];

  return (
    <div className="ml-[200px] sm:ml-0 ">
      <div className="mt-3 mx-4">
        <div className="flex items-center px-[20px] py-[20px] justify-between">
          <p className="mr-[30px]">{`All (${
            operatorAircrafts ? operatorAircrafts.length : 0
          })`}</p>
          <div className="flex sm:hidden">
            {/* SVG icons for responsive design */}
            {/* ...SVG code omitted for brevity... */}
          </div>
        </div>
        <div className="overflow-x-auto h-[90vh]">
          <table className="w-[1300px]">
            <thead>
              <tr>
                {header.map((data, index) => (
                  <th
                    className="text-[12px] border border-x-0 p-[10px]"
                    key={index}
                  >
                    {data}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {operatorAircrafts.length > 0 ? (
                operatorAircrafts.map((aircraft, index) => (
                  <tr key={aircraft._id + index}>
                    <td className="border text-center border-x-0 text-[14px] p-[10px]">
                      {index + 1}
                    </td>
                    <td className="border text-center border-x-0 text-[14px] p-[10px]">
                      {aircraft.Aircraft_type}
                    </td>
                    <td className="border text-center border-x-0 text-[14px] p-[10px]">
                      {aircraft.location}
                    </td>
                    <td className="border text-center border-x-0 text-[14px] p-[10px] flex justify-center">
                      <button
                        className={`relative w-12 h-6 flex items-center rounded-full p-1 ${
                          isActive ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                        onClick={toggleButton}
                      >
                        <div
                          className={`absolute left-0 w-5 h-5 bg-white rounded-full transition-transform transform ${
                            isActive ? 'translate-x-full' : 'translate-x-0'
                          }`}
                        ></div>
                        <span
                          className={`text-white text-xs ${
                            isActive ? 'ml-2' : 'mr-2'
                          }`}
                        >
                          {isActive ? 'On' : 'Off'}
                        </span>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={header.length} className="text-center p-[10px]">
                    No aircraft data available
                  </td>
                </tr>
              )}
            </tbody>
            <tfoot className="h-[200px]"></tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
