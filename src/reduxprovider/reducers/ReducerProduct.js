const initialState = {
    token: '',
    showProduct: '',
    
  }
  
  const Product = (state = initialState, action) => {
    switch (action.type) {
     
      case 'SHOW_PRODUCTS' :
        return{...state, showProduct : action.payload , loading:false};
      default:
        return state;
    }
  };
  
  
  // const initialState = { isLoading: true, message: "" };
  
  // const userdetail = (state = initialState, action) => {
  //   return Object.assign({}, state, action.payload);
  // };
  
   export default Product;
  
  