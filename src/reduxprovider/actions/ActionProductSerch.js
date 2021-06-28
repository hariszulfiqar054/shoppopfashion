import { Alert, AsyncStorage } from 'react-native';
import { Pages } from 'react-native-pages';
import { Actions } from 'react-native-router-flux';
// import notateeApi from '../../api/notatee';
import * as RootNavigation from '../../navigationRef';
// import types from '../types'

export const ProductsSerch = (token ,page) => { 
  // const UserDetail = {
  //   token: token
  // }
  return async (dispatch) => {
    fetch(`https://spflaunchpad.com/affiliate/api/search/products/${page}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token

      },
      // body: JSON.stringify(UserDetail),
    })
      .then((res) => res.json())
      .then((res) => {
        ('Products res', res);
        if(res.success == true || res.success == 'true'){
       // ("image",res.data.data.id)

       
          //   AsyncStorage.setItem("title",res.data.title);
          //   AsyncStorage.setItem("price",res.data.price);
          //   AsyncStorage.setItem("image_link",res.data.image_link);
          //   AsyncStorage.setItem ("link",res.data.link);
          //   AsyncStorage.setItem ("id",JSON.stringify(res.data.id));
        
          dispatch({ type:'PRODUCT_SERCH', payload: res.data.data});
          ("saerch product success")
          //  ('id',res.data.id)
           // Alert.alert('Products serch here');
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
    
  