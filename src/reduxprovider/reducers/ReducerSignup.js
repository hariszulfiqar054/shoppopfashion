const initialState = {
    country: [],
    countryCodes: [],
    errorMassage: '',
    loading: false,
    token: '',
    isLoggedin: false,
    userNameErrorMessage: '',
    emailErrorMessage: '',
  }
  
  const ReducerSignup = (state = initialState, action) => {
    switch (action.type) {
      case 'requestsent':
        return { loading: false };
     
      default:
        return state;
    }
  };
  
  export default ReducerSignup;
