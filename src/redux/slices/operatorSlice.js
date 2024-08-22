import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../api/apiClient'; 
import Endpoint from '../../api/apiClient';


export const fetchItems = createAsyncThunk(
  'operator/fetchItems',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(Endpoint.GET_HOTEL_OPERATORS);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch items');
    }
  },
);


export const createItem = createAsyncThunk(
  'operator/createItem',
  async (itemData, { rejectWithValue }) => {
    try {
      const response = await apiClient.post(Endpoint.ADD_HOTEL, itemData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to create item');
    }
  },
);


export const updateItem = createAsyncThunk(
  'operator/updateItem',
  async ({ id, itemData }, { rejectWithValue }) => {
    try {
      const response = await apiClient.put(
        `${Endpoint.UPDATE_HOTEL.replace(':id', id)}`,
        itemData,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to update item');
    }
  },
);


export const deleteItem = createAsyncThunk(
  'operator/deleteItem',
  async (id, { rejectWithValue }) => {
    try {
      await apiClient.delete(`${Endpoint.DELETE_HOTEL.replace(':id', id)}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to delete item');
    }
  },
);


const initialState = {
  showModal: false,
  showUpdateModal: false,
  showNav: false,
  idToBeUpdated: null,
  updateData: {},
  email_address: '',
  operatorAircrafts: [],
  medicalEquipments: [],
  user_id: '',
  token: '',
};

// Operator slice definition
const operatorSlice = createSlice({
  name: 'operator',
  initialState,
  reducers: {
    showModals(state) {
      state.showModal = !state.showModal;
    },
    showUpdateModal(state) {
      state.showUpdateModal = !state.showUpdateModal;
    },
    showNav(state) {
      state.showNav = !state.showNav;
    },
    setIdToBeUpdated(state, action) {
      state.idToBeUpdated = action.payload;
    },
    setUpdatedata(state, action) {
      state.updateData = action.payload;
    },
    setEmailAddress(state, action) {
      state.email_address = action.payload;
    },
    setOperatorAircrafts(state, action) {
      state.operatorAircrafts = action.payload;
    },
    setMedicalEquipments(state, action) {
      state.medicalEquipments = action.payload;
    },
    addMedicalEquipment(state, action) {
      state.medicalEquipments.push(action.payload);
    },

    setUserId(state, action) {
      state.user_id = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const {
  showModals,
  showNav,
  showUpdateModal,
  setIdToBeUpdated,
  setUpdatedata,
  setEmailAddress,
  setOperatorAircrafts,
  setMedicalEquipments,
  addMedicalEquipment,
  setUserId,
  setToken,
} = operatorSlice.actions;
export default operatorSlice.reducer;

