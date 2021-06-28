import { Alert, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
// import notateeApi from '../../api/notatee';
import * as RootNavigation from '../../navigationRef';
 import types from '../types'
 export function DeleteRes(data) {
  // return {
  //   type: types.DELETE,
  //   data,
  
}

export const DeleteProduct = (token,id_del) => {

  // const UserDetail = {
  //   token: token
  // }
  return async (dispatch) => {
    fetch(`https://spflaunchpad.com/affiliate/api/user/wishlist/${id_del} `, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
      },
      // body: JSON.stringify(UserDetail),
    })
      .then((res) => res.json())
      .then((res) => {
        ('WishListDel res', res);
        if(res.success){
          Alert.alert('Deleted')
          dispatch({ type:'Delete_Product', payload: res.success});          
          
        Alert.alert('Deleted')
        //  Actions.tabbar(); 
        } 
        else
        {
Alert.alert("Something went wrong")

        }
      })
      .catch((e) => {
        ("kjfgdghdf",e);
      });
    }
  }
    
  