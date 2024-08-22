import styles from './HotelList.module.css';
import {
  showModals,
  showUpdateModal,
  setIdToBeUpdated,
  setUpdatedata,
  setEmailAddress,
  setOperatorHotels,
  setUserId,
  setToken,
} from '@/store/slices';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import swal from 'sweetalert';

export default function HotelList() {
  // Extract necessary state from the Redux store
  const { user_id, operatorHotels, token } = useSelector(
    (state) => state.operator,
  );

  const dispatch = useDispatch();

  // Effect to initialize token and user ID from localStorage
  useEffect(() => {
    const items = localStorage.getItem('token');
    if (items) {
      dispatch(setToken(items));
    }

    dispatch(setEmailAddress(localStorage.getItem('user_id')));
    dispatch(setUserId(localStorage.getItem('user_id')));
  }, [dispatch]);

  // Fetch hotel data from API
  const loadHotelData = useCallback(() => {
    if (token) {
      fetch(
        process.env.NEXT_PUBLIC_API_URL + 'operator/operatorListsOfHotels',
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )
        .then((res) => res.json())
        .then((response) => {
          console.log('responseData', response);
          dispatch(setOperatorHotels(response.hotelsCreatedByOperator));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [dispatch, token]);

  // Load hotel data on component mount or token change
  useEffect(() => {
    loadHotelData();
  }, [loadHotelData]);

  // Format date to YYYY-MM-DD format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [clickedBtn, setClickedBtn] = useState(null);
  const [disableBtn, setDisableBtn] = useState(false);

  // Table headers for hotel data
  const header = [
    'Id',
    'Hotel Name',
    'Location',
    'Room Type',
    'Price per Night',
    'Availability',
    'Update',
    'Delete',
  ];

  return (
    <div className="ml-[200px] sm:ml-0">
      <div>
        <div className="flex items-center px-[20px] py-[20px]">
          <p className="mr-[30px]">{`All (${operatorHotels ? operatorHotels.length : 0})`}</p>
          <button
            onClick={() => dispatch(showModals())}
            className={`${styles.Button} mr-auto px-[10px] py-[5px] flex items-center `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M7.62676 2.29542C7.71971 1.90153 8.28029 1.90153 8.37324 2.29542L9.33665 6.37818C9.37001 6.51958 9.48042 6.62998 9.62182 6.66335L13.7046 7.62676C14.0985 7.71971 14.0985 8.28029 13.7046 8.37324L9.62182 9.33665C9.48042 9.37001 9.37001 9.48042 9.33665 9.62182L8.37324 13.7046C8.28029 14.0985 7.71971 14.0985 7.62676 13.7046L6.66335 9.62182C6.62998 9.48042 6.51958 9.37001 6.37818 9.33665L2.29542 8.37324C1.90153 8.28029 1.90153 7.71971 2.29542 7.62676L6.37818 6.66335C6.51958 6.62998 6.62998 6.51958 6.66335 6.37818L7.62676 2.29542Z"
                fill="#171C26"
              />
            </svg>
            <p className="pl-[11px] text-[16px] text-[#171C26] font-[600]">
              Add Hotel Data
            </p>
          </button>
        </div>
        <div className="overflow-x-auto h-[90vh]">
          <table className="w-[1300px]">
            <thead>
              <tr>
                {header.map((data, i) => (
                  <th
                    className="text-[12px] border border-x-0 p-[10px]"
                    key={i}
                  >
                    {data}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {operatorHotels.length > 0 ? (
                operatorHotels.map((hotel) => (
                  <tr key={hotel._id}>
                    <td>{hotel._id}</td>
                    <td>{hotel.name}</td>
                    <td>{hotel.location}</td>
                    <td>{hotel.roomType}</td>
                    <td>{hotel.pricePerNight}</td>
                    <td>
                      {hotel.availability ? 'Available' : 'Not Available'}
                    </td>
                    <td>
                      {/* Button to trigger the update modal */}
                      <button
                        onClick={() => {
                          dispatch(setIdToBeUpdated(hotel._id));
                          dispatch(setUpdatedata(hotel));
                          dispatch(showUpdateModal());
                        }}
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      {/* Button to handle deletion */}
                      <button
                        onClick={() => {
                          swal({
                            title: 'Are you sure?',
                            text: 'Once deleted, you will not be able to recover this data!',
                            icon: 'warning',
                            buttons: true,
                            dangerMode: true,
                          }).then((willDelete) => {
                            if (willDelete) {
                              // Perform deletion
                            }
                          });
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={header.length}>No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
