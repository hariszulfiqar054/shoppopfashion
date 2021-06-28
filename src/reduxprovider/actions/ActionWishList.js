import { Alert, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
// import notateeApi from '../../api/notatee';
import * as RootNavigation from '../../navigationRef';
 import types from '../types'
 export function WishlistRes(data) {
  return {
    type: types.WISHLISTCREATE,
    data,
  };
}

export const WishList = (token , product_id) => { 
('token',token)

  const List = {
    product_id : product_id
    
  }
  return async (dispatch) => {
    fetch(`https://spflaunchpad.com/affiliate/api/user/wishlist/create`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token , 
      },
      body: JSON.stringify(List),
    })
      .then((res) => res.json())
      .then((res) => {
        ('Wishlist res', res);
        if(res.success)
        {
          dispatch({ type:'WISHLIST', payload: res.data});
          AsyncStorage.setItem('id_del',JSON.stringify(res.success.id))
           ('id_del',res.success.id)
            Alert.alert('Product added to the wishlist');
        //  Actions.tabbar();
        } 
        else
        {
         Alert.alert('Failed');

        }
      })
      .catch((e) => {
        ("kjfgdghdf",e);
      });
    }
  }
    
  