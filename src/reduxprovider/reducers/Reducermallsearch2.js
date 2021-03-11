const initialState = {
    mallSearch2 : ''
    }
    
    const Mallsearch2 = (state = initialState, action) => {
      switch (action.type) {
        case 'MALL_SEARCH2':
          return{...state, mallSearch2 : action.payload , loading:false};
  
        
        default:
          return state;
      }
    };
    
    
    // const initialState = { isLoading: true, message: "" };
    
    // const userdetail = (state = initialState, action) => {
    //   return Object.assign({}, state, action.payload);
    // };
    
     export default Mallsearch2;
    
    