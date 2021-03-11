import { Alert, AsyncStorage } from 'react-native';
import { Pages } from 'react-native-pages';
import { Actions } from 'react-native-router-flux';
// import notateeApi from '../../api/notatee';
import * as RootNavigation from '../../navigationRef';
// import types from '../types'

export const productCat =   (Category) => { 
    ("Category",Category)
  // const UserDetail = { 
  //   token: token
  // }
  return async (dispatch) => {
    fetch(`https://spotpopfashion.com/affiliate/api/products/category/${Category}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',

      },
      // body: JSON.stringify(UserDetail),
    })
      .then((res) => res.json())
      .then((res) => {
        ('productCategorys', res);
        if(res.success == true || res.success == 'true'){
       // ("image",res.data.data.id)

       
          //   AsyncStorage.setItem("title",res.data.title);
          //   AsyncStorage.setItem("price",res.data.price);
          //   AsyncStorage.setItem("image_link",res.data.image_link);
          //   AsyncStorage.setItem ("link",res.data.link);
          //   AsyncStorage.setItem ("id",JSON.stringify(res.data.id));
        
         // dispatch({ type:'PRODUCT_SERCH', payload: res.data.data});
         dispatch({ type:'PRODUCT_CAT', payload: res.data});

            //Alert.alert('All brands are here here');
        //Actions.tabbar();
        } 
        // else
        // {
        //  Alert.alert('Failed');

        // }
      })
      .catch((e) => {
      });
    }
  }
    
  