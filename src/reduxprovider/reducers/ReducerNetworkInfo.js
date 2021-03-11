const initialState = { isInternetAvailable: true };

const reducerNetworkInfo = (state = initialState, action) => {
  return Object.assign({}, state, action.payload);
};

export default reducerNetworkInfo;
