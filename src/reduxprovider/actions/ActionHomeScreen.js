import type from "../types";

export const refreshHomeScreen = () => {
  return dispatch({
    type: type.REFRESH_HOME_SCREEN,
    payload: { isLoading: true }
  });
};
