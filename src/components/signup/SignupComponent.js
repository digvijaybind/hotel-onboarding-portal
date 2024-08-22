'use client';
import React from 'react';
import styles from './signup.module.css';
import Aeroplane from '../../assets/images/Aeroplane.jpg';
import Qwikliflogo from '../../assets/images/logo.jpg';
import { Text } from '../Text';
import { Button } from '../Button';
import axios from 'axios';
import swal from 'sweetalert';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  company_name: Yup.string().required('Company name is required'),
  email_address: Yup.string()
    .email('Invalid email address')
    .required('Email address is required'),
  contact_number: Yup.string().required('Contact number is required'),
  country_name: Yup.string().required('Country name is required'),
  password: Yup.string().required('Password is required'),
});
const SignupComponent = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      company_name: '',
      email_address: '',
      contact_number: '',
      country_name: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Your existing form submission logic here
      axios
        .post(process.env.NEXT_PUBLIC_API_URL + 'operator/register', values)
        .then((data) => {
          swal('Operator registration successful', { className: 'white-bg' });
          navigate('/login');
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <div className={`${styles.wrapper}`}>
      <div className="bg-white-A700 flex flex-col font-montserrat items-start justify-start mx-auto p-[74px] md:px-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[88px] items-start justify-start mb-[42px] ml-1.5 md:ml-[0] w-[94%] md:w-full">
          <div className="h-[816px] md:mt-0 mt-[18px] relative w-[41%] lg:block xl:block md:hidden sm:hidden">
            <img
              className="h-9 md:h-auto object-cover w-[18%]"
              src={Aeroplane}
              alt="rectangleTwenty"
            />
            <div className="absolute bg-gradient  bottom-[0] flex sm:flex-col flex-row gap-2.5 inset-x-[0] items-start justify-center mx-auto p-[19px] rounded-tl-[30px] rounded-tr-[30px] w-full">
              <div className="bg-white-A700 h-2.5 sm:ml-[0] ml-[150px] sm:mt-0 mt-2.5 rounded-[50%] w-2.5"></div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[89px] h-[640px] md:h-auto items-start justify-start w-[640px] md:w-full">
            <img
              className="h-9 md:h-auto object-cover w-[18%]"
              src={Qwikliflogo}
              alt="qwiklif1logor"
            />
            <div className="flex flex-col gap-12 h-[515px] md:h-auto items-start justify-start max-w-screen-sm w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-auto"
                  size="txtInterExtraBold48"
                >
                  Sign up
                </Text>
                <Text
                  className="text-base text-gray-900_9e w-auto"
                  size="txtMontserratRegular16"
                >
                  Let’s get you all set up so you can access your Operator
                  account.
                </Text>
              </div>
              <div className="flex flex-col gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                    <input
                      type="text"
                      name="company_name"
                      // onChange={handleChange}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.company_name}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="company_name"
                      required
                    ></input>
                  </div>
                  {formik.touched.company_name && formik.errors.company_name ? (
                    <div className="text-red-500">
                      {formik.errors.company_name}
                    </div>
                  ) : null}
                  <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                    <input
                      type="text"
                      name="email_address"
                      // onChange={handleChange}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email_address}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="email_address"
                      required
                    ></input>
                  </div>
                  {formik.touched.email_address &&
                  formik.errors.email_address ? (
                    <div className="text-red-500">
                      {formik.errors.email_address}
                    </div>
                  ) : null}
                  <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                    <input
                      type="text"
                      name="contact_number"
                      // onChange={handleChange}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.contact_number}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Contact_No"
                      required
                    ></input>
                  </div>
                  {formik.touched.contact_number &&
                  formik.errors.contact_number ? (
                    <div className="text-red-500">
                      {formik.errors.contact_number}
                    </div>
                  ) : null}
                  <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                    <input
                      type="text"
                      name="country_name"
                      // onChange={handleChange}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.country_name}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="country_name"
                      required
                    ></input>
                  </div>
                  {formik.touched.country_name && formik.errors.country_name ? (
                    <div className="text-red-500">
                      {formik.errors.country_name}
                    </div>
                  ) : null}
                  <div className="flex flex-col h-[60px] md:h-auto items-start justify-start rounded-tl rounded-tr w-full">
                    <input
                      type="text"
                      name="password"
                      // onChange={handleChange}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="password"
                      required
                    ></input>
                  </div>
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-500">{formik.errors.password}</div>
                  ) : null}
                </div>
                <div className="flex justify-center">
                  <div className="flex flex-col gap-4 items-center justify-center w-auto md:w-full">
                    <div className="flex flex-col items-start justify-start max-w-screen-sm w-full">
                      <Button
                        className="cursor-pointer font-semibold h-12 leading-[normal] text-center text-sm w-full"
                        onClick={formik.handleSubmit}
                        type="submit"
                      >
                        Create account
                      </Button>
                    </div>
                    <Text
                      className="text-center text-gray-900_01 text-sm w-auto"
                      size="txtMontserratMedium14"
                    >
                      <span className="text-gray-900_01 font-montserrat font-medium">
                        Already have an account?{' '}
                      </span>
                      <span
                        onClick={() => {
                          navigate('/login');
                        }}
                        className="text-red-A100 font-montserrat font-semibold cursor-pointer"
                      >
                        Login
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
