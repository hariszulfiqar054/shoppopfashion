// import type from "../types";

// const initialState = { isLoading: true, message: "" };

// const login = (state = initialState, action) => {
//   return Object.assign({}, state, action.payload);
// };

// export default login;
//
const initialState = {
  country: [],
  countryCodes: [],
  errorMassage: "",
  loading: false,
  token: "",
  isLoggedin: false,
  userNameErrorMessage: "",
  emailErrorMessage: "",
};

const ReducerLogin = (state = initialState, action) => {
  ("Loginaction", action);
  switch (action.type) {
    case "add_error":
      return { ...state, errorMassage: action.payload, loading: false };
    case "LOGIN":
      return {
        errorMassage: "",
        loading: false,
        isLoggedin: true,
        token: action.data,
      };

    case "clear":
      return { ...state, errorMassage: "", userNameErrorMessage: "" };
    case "emailClear":
      return { ...state, emailErrorMessage: "" };
    case "signout":
      return { errorMassage: "", token: null };
    case "requestsent":
      return { loading: false };
    case "Country":
      return { ...state, country: action.payload };
    case "CheckMail":
      return { ...state, checkMail: action.payload };
    case "checkUserName":
      return { ...state, checkUsername: action.payload };
    case "add_user_name_error":
      return { ...state, userNameErrorMessage: action.payload, loading: false };
    case "add_email_error":
      return { ...state, emailErrorMessage: action.payload, loading: false };
    case "LOGOUT": {
      return {
        ...state,
        token: "",
        isLoggedin: false,
      };
    }
    default:
      return state;
  }
};

export default ReducerLogin;
