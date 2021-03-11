const initialState = {
    
    Productsscat: '',
    
  }
  
  const ProductCAT = (state = initialState, action) => {
    switch (action.type) {
     
      case 'PRODUCT_CAT' :
        return{...state, Productsscat : action.payload , loading:false};
      default:
        return state;
    }
  };
  
  
  // const initialState = { isLoading: true, message: "" };
  
  // const userdetail = (state = initialState, action) => {
  //   return Object.assign({}, state, action.payload);
  // };
  
   export default ProductCAT;
  
  