import type from "../types";

const initialState = { isRefreshHomeScreen: false };

const onRefreshScreen = (state = initialState, action) => {
  return Object.assign({}, state, action.payload);
};

export default onRefreshScreen;
