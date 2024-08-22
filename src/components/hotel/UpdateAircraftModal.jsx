import { useDispatch, useSelector } from 'react-redux';
import { TextInput, DateInput } from '../Form/TextInput';
import { showUpdateModal, setOperatorAircrafts } from '@/store/slices';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import swal from 'sweetalert';
import styles from '../../components/Form/Input.module.css';

const UpdateAircraftModal = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.operator.showUpdateModal);
  const { idToBeUpdated, updateData, token } = useSelector(
    (state) => state.operator,
  );

  // Initialize form data with values from the Redux state
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Sr_No: updateData.sr_no,
      Tail_Sign: updateData.Tail_sign,
      Location: updateData.location,
      Charges_hr: updateData.charges_per_hour,
      Speed: updateData.speed,
      Aircraft_type: updateData.Aircraft_type,
    },
  });

  // Callback to load aircraft data from API
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
          dispatch(setOperatorAircrafts(response.aircraftCreatedByOperator));
        })
        .catch((error) => console.error(error));
    }
  }, [token, dispatch]);

  // Function to remove empty properties from the form data
  const filterEmptyProperties = (obj) => {
    const result = {};
    for (const key in obj) {
      if (obj[key]) {
        result[key] = obj[key];
      }
    }
    return result;
  };

  return (
    <div
      className={`${show ? 'block' : 'hidden'} w-[100vw] h-[100vh] absolute top-0 left-0`}
    >
      <div className="w-[100vw] h-[100vh] bg-white opacity-[50%] z-[200] absolute top-0 left-0 z-100"></div>
      <div className="bg-white shadow-md absolute top-[80px] z-[300] left-[50%] transform translate-x-[-50%] w-[500px] px-[30px] px-[40px] sm:w-[310px]">
        <div onClick={() => dispatch(showUpdateModal())}>
          <svg
            className="absolute cursor-pointer top-[10px] right-[10px]"
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
        </div>

        <h1 className="text-[40px] my-[20px] sm:text-[30px]">Update Data</h1>
        <div className="w-[100%]">
          <TextInput
            className="w-[100%]"
            label="Sr_No."
            name="Sr_No"
            register={register('Sr_No')}
            defaultValue={updateData.sr_no}
          />

          <div className="flex justify-between w-[100%]">
            <div
              className={`flex flex-col w-[48%] my-[10px] relative ${styles.Input}`}
            >
              <label
                className="bg-white left-[10px] absolute top-[-12px] sm:text-[15px]"
                htmlFor="Aircraft_type"
              >
                Aircraft type
              </label>
              <select
                className="w-[100%] text-[14px] pl-[10px] font-[500] h-[40px]"
                label="Aircraft_type"
                name="Aircraft_type"
                {...register('Aircraft_type')}
                defaultValue={updateData.Aircraft_type}
              >
                <option value="Learjet 45">Learjet 45</option>
                <option value="C90">C90</option>
                <option value="Challenger 605">Challenger 605</option>
              </select>
            </div>
            <TextInput
              className="w-[48%]"
              label="Tail Sign"
              name="Tail_Sign"
              defaultValue={updateData.Tail_sign}
              register={register('Tail_Sign')}
            />
          </div>
          <div className="flex justify-between w-[100%]">
            <TextInput
              className="w-[48%]"
              label="Location"
              name="Location"
              register={register('Location')}
              defaultValue={updateData.location}
            />
            <TextInput
              className="w-[48%]"
              label="Charges/hr"
              name="Charges_hr"
              register={register('Charges_hr')}
              defaultValue={updateData.charges_per_hour}
            />
          </div>
          <div className="flex justify-between w-[100%]">
            <TextInput
              className="w-[48%]"
              label="Speed"
              name="Speed"
              register={register('Speed')}
              defaultValue={updateData.speed}
            />
            <DateInput
              label="Date"
              name="Date"
              register={register('Date')}
              className="w-[48%]"
              defaultValue={updateData.date}
            />
          </div>
          <div className="flex my-[10px]">
            <button
              className="bg-blue-500 text-white py-[10px] px-[20px] rounded-[5px] hover:bg-blue-600"
              onClick={handleSubmit(async (data) => {
                try {
                  const response = await axios.put(
                    `${process.env.NEXT_PUBLIC_API_URL}operator/aircraft/${idToBeUpdated}`,
                    filterEmptyProperties(data),
                    {
                      headers: { Authorization: `Bearer ${token}` },
                    },
                  );

                  if (response.status === 200) {
                    swal('Success', 'Aircraft updated successfully', 'success');
                    dispatch(showUpdateModal());
                    loadAircraftData(); // Reload aircraft data after update
                  } else {
                    swal('Error', 'Failed to update aircraft', 'error');
                  }
                } catch (error) {
                  console.error(error);
                  swal(
                    'Error',
                    'An error occurred while updating the aircraft',
                    'error',
                  );
                }
              })}
            >
              Update
            </button>
            <button
              className="bg-red-500 text-white py-[10px] px-[20px] rounded-[5px] ml-[10px] hover:bg-red-600"
              onClick={() => dispatch(showUpdateModal())}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateAircraftModal;
