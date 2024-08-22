// Endpoint object that contains all API routes related to operator actions
const Endpoint = {
  // Route for operator registration
  OPERATOR_REGISTER: '/operator/register',
  
  // Route for operator login
  OPERATOR_LOGIN: '/operator/login',
  
  // Route to add hotel details under an operator
  ADD_HOTEL: '/operator/addHotelDetails',
  
  // Route to update hotel details by its ID
  UPDATE_HOTEL: '/operator/editHotel/:id',
  
  // Route to get a list of all hotel operators
  GET_HOTEL_OPERATORS: '/operator/getHotelOperatorLists',
  
  // Route to delete hotel details by its ID
  DELETE_HOTEL: '/operator/deleteHotel/:id',
};

export default Endpoint;
