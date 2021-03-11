const initialState = {
    token: '',
    BrandSerch : ''
  }
  
  const Brandserch = (state = initialState, action) => {
    switch (action.type) {
      case 'BRAND_SERCH':
        return{...state, BrandSerch : action.payload , loading:false};

      
      default:
        return state;
    }
  };
  
  
  // const initialState = { isLoading: true, message: "" };
  
  // const userdetail = (state = initialState, action) => {
  //   return Object.assign({}, state, action.payload);
  // };
  
   export default Brandserch;
  
  