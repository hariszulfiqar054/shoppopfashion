import { Alert, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
// import notateeApi from '../../api/notatee';
import * as RootNavigation from '../../navigationRef';
import * as types from '../types'

// import types from '../types'
export function ProductRes(data) {
  // return {
  //   type: types.PRODUCT,
  //   data,
  // };
}
export const Products = (id) => { 

  // const UserDetail = {
  //   token: token
  // }
  return async (dispatch) => {
    fetch(`https://spflaunchpad.com/affiliate/api/products/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        
      },
      // body: JSON.stringify(UserDetail),
    })
      .then((res) => res.json())
      .then((res) => {
        ('Products res', res);
        if(res.success == true || res.success == 'true'){
          dispatch({ type:'SHOW_PRODUCTS', payload: res.data});

            AsyncStorage.setItem("title",res.data.title);
            AsyncStorage.setItem("price",res.data.price);
            AsyncStorage.setItem("image_link",res.data.image_link);
            AsyncStorage.setItem ("link",res.data.link);
           AsyncStorage.setItem ("id",JSON.stringify(res.data.id));
           ('id',res.data.id)
       //   Alert.alert('Products');
          // dispatch(ProductRes(res));
          
        //Actions.tabbar();
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
    
  