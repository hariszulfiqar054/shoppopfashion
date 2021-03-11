import type from "../types";

export const notifyNetworkChanged = isInternetAvailable => {
  return {
    type: type.NETWORK_CONNECTION_CHANGED,
    payload: { isInternetAvailable }
  };
};
