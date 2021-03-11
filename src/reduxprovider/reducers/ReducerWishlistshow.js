const initialState = {
    token: '',
    showWishList : '',
  }
  
  const wishlistShow = (state = initialState, action) => {
    switch (action.type) {
      case 'SHOW_WISHLIST':
        return{...state, showWishList : action.payload , loading:false};
        default:
          return state;
    }
  };
  
  
  // const initialState = { isLoading: true, message: "" };
  
  // const userdetail = (state = initialState, action) => {
  //   return Object.assign({}, state, action.payload);
  // };
  
   export default wishlistShow;
  
  