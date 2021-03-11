import { Alert, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
// import notateeApi from '../../api/notatee';
import * as RootNavigation from '../../navigationRef';
 import types from '../types'
 export function wishRes( ) {
  // return {
  //   type: types.WISHLIST,
  //   data,
  // };
}

export const WishListShow = (token) => {

  // const UserDetail = {
  //   token: token
  // }
  return async (dispatch) => {
    fetch(`https://spotpopfashion.com/affiliate/api/user/wishlist`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
      },
      // body: JSON.stringify(UserDetail),
    })
      .then((res) => res.json())
      .then((res) => {
        ('WishList res', res);
        if(res.success){
          dispatch({ type:'SHOW_WISHLIST', payload: res.success});
          dispatch(wishRes(res));

        Alert.alert('here is your WishList')
       
    
  } 
  else {
   }
(detailsList);
      })
      .catch((e) => {
        ("kjfgdghdf",e);
      });
    }
  }
    
  