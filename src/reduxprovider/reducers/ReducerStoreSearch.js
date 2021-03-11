const initialState = {
    token: '',
    storesSearch : ''
  }
  
  const brandsearch = (state = initialState, action) => {
    switch (action.type) {
      case 'STORE_SERCH':
        return{...state, storesSearch : action.payload , loading:false};

      
      default:
        return state;
    }
  };
  
  
  
   export default brandsearch;
  
  