const initialState = {
  mallSearch : ''
  }
  
  const Mallsearch = (state = initialState, action) => {
    switch (action.type) {
      case 'MALL_SEARCH':
        return{...state, mallSearch : action.payload , loading:false};

      
      default:
        return state;
    }
  };
  
  
  // const initialState = { isLoading: true, message: "" };
  
  // const userdetail = (state = initialState, action) => {
  //   return Object.assign({}, state, action.payload);
  // };
  
   export default Mallsearch;
  
  