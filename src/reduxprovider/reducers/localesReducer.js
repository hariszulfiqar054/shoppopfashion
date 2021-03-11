import type from "../types";

const initialState = { isLoading: true, message: "" };

const login = (state = initialState, action) => {
  return Object.assign({}, state, action.payload);
};

export default login;
