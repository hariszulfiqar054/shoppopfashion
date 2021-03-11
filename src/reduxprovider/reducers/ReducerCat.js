const initialState = {
    category : ''
    }
    
    const Cat = (state = initialState, action) => {
      switch (action.type) {
        case 'CAT_NAME':
          return{...state, category : action.payload , loading:false};
  
        
        default:
          return state;
      }
    };
    
    
    // const initialState = { isLoading: true, message: "" };
    
    // const userdetail = (state = initialState, action) => {
    //   return Object.assign({}, state, action.payload);
    // };
    
     export default Cat;
    
    