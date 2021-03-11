const initialState = {
    token: '',
    ProductSerch : ''
  }
  
  const productserch = (state = initialState, action) => {
    switch (action.type) {
      case 'PRODUCT_SERCH':
        return{...state, ProductSerch : action.payload , loading:false};

      
      default:
        return state;
    }
  };
  
  
  // const initialState = { isLoading: true, message: "" };
  
  // const userdetail = (state = initialState, action) => {
  //   return Object.assign({}, state, action.payload);
  // };
  
   export default productserch;
  
  