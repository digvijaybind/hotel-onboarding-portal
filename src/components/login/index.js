import React from 'react';
import Logo from './assets/logo.jpg'; // Updated path
import Aeroplane from './assets/Aeroplane.jpg'; // Updated path
import { Text } from '../Text';
import { Button } from '../Button';
import axios from 'axios';
import { setEmailAddress, setToken, setUserId } from '@/store/slices';
import swal from 'sweetalert';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Validation schema for form inputs using Yup
const validationSchema = Yup.object().shape({
  email_address: Yup.string()
    .email('Invalid email address')
    .required('Email address is required'),
  password: Yup.string().required('Password is required'),
});

const LoginComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Formik setup for handling form state and validation
  const formik = useFormik({
    initialValues: {
      email_address: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}operator/login`, values)
        .then((response) => {
          const { data } = response;

          if (data?.token) {
            // Successful login: store user data and navigate
            localStorage.setItem('token', data.token);
            localStorage.setItem('email_address', data.email_address);
            localStorage.setItem('user_id', data.id);
            dispatch(setEmailAddress(data.email_address));
            dispatch(setUserId(data.id));
            dispatch(setToken(data.token));
            swal('Login successful!', { className: 'white-bg' });
            navigate('/dashboard');
          } else {
            // Login failed: show error message
            swal(
              data?.message
                ? `${data.message}. Please try again later.`
                : 'Something went wrong. Please try again later.',
              { icon: 'error' },
            );
          }
        })
        .catch(() => {
          // Error occurred during request: show error message
          swal(
            'An error occurred. Please check your email or password and try again later.',
            { icon: 'error' },
          );
        });
    },
  });

  return (
    <div className="bg-white flex flex-col font-montserrat items-center justify-start mx-auto p-14 md:px-10 sm:px-5 w-full">
      <div className="flex flex-col gap-3 items-start justify-start max-w-[1234px] mb-[83px] mx-auto w-full">
        {/* Logo */}
        <img
          className="h-9 md:h-auto object-cover w-[18%]"
          src={Logo}
          alt="Logo"
        />
        <div className="flex md:flex-col flex-row items-center justify-between w-full">
          <div className="flex sm:flex-1 flex-col gap-12 items-center md:mt-0 mt-[100px] w-[512px] sm:w-full">
            <div className="flex flex-col gap-4 items-start w-full">
              {/* Title and Description */}
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-[132px]"
                size="txtInterExtraBold48"
              >
                Login
              </Text>
              <Text
                className="text-base text-gray-900_9e w-auto"
                size="txtMontserratRegular16"
              >
                Login to access your Operator account
              </Text>
            </div>
            <div className="flex flex-col gap-10 items-start w-full">
              {/* Login Form */}
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-6 items-start w-full"
              >
                {/* Email Input */}
                <input
                  type="text"
                  name="email_address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email_address}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Email"
                  required
                />
                {formik.touched.email_address &&
                  formik.errors.email_address && (
                    <div className="text-red-500">
                      {formik.errors.email_address}
                    </div>
                  )}
                {/* Password Input */}
                <input
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Password"
                  required
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-500">{formik.errors.password}</div>
                )}
                {/* Remember Me and Forgot Password */}
                <div className="flex flex-row gap-[252px] items-center w-auto sm:w-full">
                  <div className="flex flex-row gap-2 items-center w-auto">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtMontserratMedium14"
                    >
                      Remember me
                    </Text>
                  </div>
                  <a
                    href="javascript:"
                    className="text-red-A100 text-right text-sm w-auto"
                  >
                    <Text size="txtMontserratMedium14RedA100">
                      Forgot Password
                    </Text>
                  </a>
                </div>
                {/* Submit Button */}
                <Button
                  className="cursor-pointer font-semibold h-12 text-sm w-full"
                  type="submit"
                >
                  Login
                </Button>
                {/* Signup Link */}
                <a
                  href="javascript:"
                  className="text-center text-gray-900_01 text-sm w-full"
                >
                  <Text size="txtMontserratMedium14">
                    <span className="text-gray-900_01 font-medium">
                      Don’t have an account?{' '}
                    </span>
                    <span
                      className="text-red-A100 font-semibold"
                      onClick={() => navigate('/signup')}
                    >
                      Sign up
                    </span>
                  </Text>
                </a>
              </form>
            </div>
          </div>
          {/* Image */}
          <div className="h-[781px] relative w-[51%] xl:block md:hidden sm:hidden">
            <img
              className="absolute h-full inset-0 m-auto object-cover rounded-[30px] w-full"
              src={Aeroplane}
              alt="Aeroplane"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
