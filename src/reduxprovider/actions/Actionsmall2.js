import { Alert, AsyncStorage } from 'react-native';
import { Pages } from 'react-native-pages';
import { Actions } from 'react-native-router-flux';
import * as RootNavigation from '../../navigationRef';

export const mallSearchtwo = (Key2) => { 
 
  // }
  return async (dispatch) => {
    fetch(`https://spotpopfashion.com/affiliate/api/mall/${Key2}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',

      },
      // body: JSON.stringify(UserDetail),
    })
      .then((res) => res.json())
      .then((res) => {
        ('mall res2', res);
        if(res.success == true || res.success == 'true'){
      
        
         dispatch({ type:'MALL_SEARCH2', payload: res});
        } 
      })
      .catch((e) => {
      });
    }
  }
    
  