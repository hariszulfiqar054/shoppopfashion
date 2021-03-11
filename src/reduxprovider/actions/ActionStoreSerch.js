import { Alert, AsyncStorage } from 'react-native';
import { Pages } from 'react-native-pages';
import { Actions } from 'react-native-router-flux';
import * as RootNavigation from '../../navigationRef';

export const Storesearch = (Store) => { 
    ("StoreAction",Store)
 
  return async (dispatch) => {
    fetch(`https://spotpopfashion.com/affiliate/api/search/brands/?search=${Store}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',

      },
      // body: JSON.stringify(UserDetail),
    })
      .then((res) => res.json())
      .then((res) => {
        ('Store res', res);
        if(res.success == true || res.success == 'true'){
     
         dispatch({ type:'STORE_SERCH', payload: res.data.data});

        } 
      })
      .catch((e) => {
      });
    }
  }
    
  