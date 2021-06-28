import { Alert, AsyncStorage } from 'react-native';
import { Pages } from 'react-native-pages';
import { Actions } from 'react-native-router-flux';
// import notateeApi from '../../api/notatee';
import * as RootNavigation from '../../navigationRef';
// import types from '../types'

export const Brandserch = (Brand) => { 
    ("BrandAction",Brand)
  // const UserDetail = { 
  //   token: token
  // }
  return async (dispatch) => {
    fetch(`https://spflaunchpad.com/affiliate/api/search/brands/?search=${Brand}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',

      },
      // body: JSON.stringify(UserDetail),
    })
      .then((res) => res.json())
      .then((res) => {
        ('Brand res', res);
        if(res.success == true || res.success == 'true'){
         dispatch({ type:'BRAND_SERCH', payload: res.data});

           
        } 

      })
      .catch((e) => {
      });
    }
  }
    
  