const initialState = {
    token: '',
    showDeletedProduct : '',
    }
  
  const Delete = (state = initialState, action) => {
    switch (action.type) {
      case 'add_error':
        return { ...state, errorMassage: action.payload, loading: false };
      case 'signin':
        return { errorMassage: '', loading: false, isLoggedin: true, token: action.data };
      case 'clear':
        return { ...state, errorMassage: '', userNameErrorMessage: '', };
      case 'emailClear':
        return { ...state, emailErrorMessage: '', };
      case 'signout':
        return { errorMassage: '', token: null };
      case 'requestsent':
        return { loading: false };
      case 'Country':
        return { ...state, country: action.payload };
      case 'CheckMail':
        return { ...state, checkMail: action.payload };
      case 'checkUserName':
        return { ...state, checkUsername: action.payload };
      case 'add_user_name_error':
        return { ...state, userNameErrorMessage: action.payload, loading: false };
      case 'add_email_error':
        return { ...state, emailErrorMessage: action.payload, loading: false };
        case 'Delete_Product' :
          return{...state, showDeletedProduct : action.payload , loading:false};
      default:
        return state;
    }
  };
  
  
  // const initialState = { isLoading: true, message: "" };
  
  // const userdetail = (state = initialState, action) => {
  //   return Object.assign({}, state, action.payload);
  // };
  
   export default Delete;
  
  