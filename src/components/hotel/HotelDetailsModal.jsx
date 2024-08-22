import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import swal from 'sweetalert';
import { TextInput } from '../Form/TextInput';
import { DateInput } from '../Form/DateInput';
import { setHotels, showHotelModals } from '@/store/slices';
import styles from '../Form/Input.module.css';

const HotelDetailsModal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.hotel.showModal);
  const { token } = useSelector((state) => state.hotel);

  const [formData, setFormData] = useState({
    hotelName: '',
    location: '',
    rating: '',
    pricePerNight: '',
    availableFrom: '',
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const loadHotelData = useCallback(() => {
    if (token) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}hotel/getAllHotels`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(setHotels(data.hotels));
        })
        .catch((error) => console.error('Error loading hotel data:', error));
    }
  }, [dispatch, token]);

  const onSubmit = (data) => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}hotel/addHotelDetails`,
        {
          hotel_name: data.hotelName,
          location: data.location,
          rating: Number(data.rating),
          price_per_night: Number(data.pricePerNight),
          available_from: data.availableFrom,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )
      .then(() => {
        swal('Hotel details added successfully', {
          className: 'white-bg',
        });
        loadHotelData();
        dispatch(showHotelModals());
        reset();
        setFormData({
          hotelName: '',
          location: '',
          rating: '',
          pricePerNight: '',
          availableFrom: '',
        });
      })
      .catch((error) => console.error('Error adding hotel details:', error));
  };

  return (
    <div
      className={`${showModal ? 'block' : 'hidden'} fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50`}
    >
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={() => dispatch(showHotelModals())}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.7299 1.57214C14.8155 1.48672 14.8833 1.38531 14.9296 1.27367C14.976 1.16203 14.9998 1.04237 14.9999 0.921502C15 0.800637 14.9763 0.680941 14.9301 0.569248C14.8839 0.457555 14.8162 0.356052 14.7308 0.270536C14.6453 0.185019 14.5439 0.117163 14.4323 0.0708412C14.3206 0.0245197 14.201 0.000640007 14.0801 0.00056572C13.9593 0.000491433 13.8396 0.024224 13.7279 0.0704082C13.6162 0.116593 13.5147 0.184324 13.4291 0.269736L7.87875 5.82014L2.32995 0.269736C2.15724 0.0970267 1.923 -1.81979e-09 1.67875 0C1.4345 1.81978e-09 1.20026 0.0970267 1.02755 0.269736C0.854839 0.442445 0.757813 0.676688 0.757812 0.920936C0.757812 1.16518 0.854839 1.39943 1.02755 1.57214L6.57795 7.12094L1.02755 12.6697C0.942031 12.7553 0.874196 12.8568 0.827914 12.9685C0.781633 13.0802 0.757812 13.2 0.757812 13.3209C0.757812 13.4419 0.781633 13.5616 0.827914 13.6734C0.874196 13.7851 0.942031 13.8866 1.02755 13.9721C1.20026 14.1448 1.4345 14.2419 1.67875 14.2419C1.79969 14.2419 1.91944 14.2181 2.03118 14.1718C2.14291 14.1255 2.24443 14.0577 2.32995 13.9721L7.87875 8.42174L13.4291 13.9721C13.6019 14.1446 13.836 14.2415 14.0801 14.2413C14.3242 14.2412 14.5583 14.144 14.7308 13.9713C14.9032 13.7986 15.0001 13.5645 14.9999 13.3204C14.9998 13.0763 14.9027 12.8422 14.7299 12.6697L9.17955 7.12094L14.7299 1.57214Z"
              fill="black"
            />
          </svg>
        </button>

        <h1 className="text-2xl font-semibold mb-4">Add New Hotel</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            className="mb-4"
            label="Hotel Name"
            name="hotelName"
            {...register('hotelName', { required: 'Hotel Name is required' })}
            error={errors.hotelName}
          />

          <TextInput
            className="mb-4"
            label="Location"
            name="location"
            {...register('location', { required: 'Location is required' })}
            error={errors.location}
          />

          <div className="flex justify-between mb-4">
            <TextInput
              className="w-1/2"
              label="Rating (out of 5)"
              name="rating"
              type="number"
              min="0"
              max="5"
              step="0.1"
              {...register('rating', { required: 'Rating is required' })}
              error={errors.rating}
            />
            <TextInput
              className="w-1/2"
              label="Price Per Night"
              name="pricePerNight"
              type="number"
              step="0.01"
              {...register('pricePerNight', {
                required: 'Price Per Night is required',
              })}
              error={errors.pricePerNight}
            />
          </div>

          <DateInput
            className="mb-4"
            label="Available From"
            name="availableFrom"
            {...register('availableFrom', {
              required: 'Available From is required',
            })}
            error={errors.availableFrom}
          />

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Add Hotel
          </button>
        </form>
      </div>
    </div>
  );
};

export default HotelDetailsModal;
