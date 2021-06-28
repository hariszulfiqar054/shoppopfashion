import { Alert, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
// import notateeApi from '../../api/notatee';
import * as RootNavigation from '../../navigationRef';
// import types from '../types'
import * as types from '../types'

export function UserRes(data) {
  // return {
  //   type: types.USERDETAIL,
  //   data,
  // };
}
export const UserDetail = (token) => {

  // const UserDetail = {
  //   token: token
  // }
  return async (dispatch) => {
    fetch(`https://spflaunchpad.com/affiliate/api/user/details`, {
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
        ('UserDetail res', res);
        if(res.success){
          dispatch({ type:'SHOW_USERDETAIL', payload: res.success});
          ("name",res.success.name);
          AsyncStorage.setItem("name",res.success.name);
        //  Actions.tabbar();
        } 
      })
      .catch((e) => {
        ("kjfgdghdf",e);
      });
    }
  }
    
  