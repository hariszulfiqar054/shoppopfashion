// export const login = () => {
//   return dispatch({
//     type: type.IS_LOGGED_IN,
//     payload: { isLoading: false, message: "this is payload" }
//   });
// };
// import * as ActionTypes from '../constants/ActionTypes';
import * as types from "../types";
// import {BaseUrl} from '../constants/api';
import { Alert } from "react-native";
import { Actions } from "react-native-router-flux";
import AsyncStorage from "@react-native-community/async-storage";

export function loginRes(data) {
  return {
    type: types.LOGIN,
    data,
  };
}
export const onLogout = () => {
  return {
    type: types.LOGOUT,
  };
};

export function loginAPI(email, password, token) {
  const loginData = {
    email: email,
    password: password,
    token: token,
  };
  return (dispatch) => {
    fetch("https://spotpopfashion.com/affiliate/api/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((res) => {
        ("login res", res);
        if (res.success) {
          AsyncStorage.setItem("token", res.success.token);
          dispatch(loginRes(res));
          Actions.tabbar();
        } else if (res.error) {
          Alert.alert("Please enter valid email and password");
        }
      })
      .catch((e) => {
        console.warn(e);
      });
  };
}
// import { Alert, AsyncStorage } from 'react-native';
// import { Actions } from 'react-native-router-flux';
// // import notateeApi from '../../api/notatee';
// import * as RootNavigation from '../../navigationRef';
// // import types from '../types'

// export const signin = (email, password, token) => {

//   const loginData = {
//     email: email,
//     password: password,
//     token: token
//   }
//   return async (dispatch) => {
//     fetch(`https://spotpopfashion.com/affiliate/api/user/login`, {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(loginData),
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         ('login res', res);
//         if(res.success){
//           AsyncStorage.setItem('token',res.success.token)
//           Actions.tabbar();
//         } else if (res.error){
//           Alert.alert("Please enter valid email and password")
//         }
//       })
//       .catch((e) => {
//         ("kjfgdghdf",e);
//       });

// try {
//   dispatch({ type: 'requestsent' })
//   const response = await ('https://spotpopfashion.com/affiliate/api/user/login', formData)
//   ('response', response);

//   let err = response.error;
//   ("errrr",err);
//   if (response.status == true) {
//     ("Success");
//     RootNavigation.navigate('Mall');
//   } else {
//     ("Failure");

//     // RootNavigation.navigate('mainFlow');
//   }
//   // dispatch({ type: 'signin', payload: response.data.token });
// } catch (e) {
//   ('e.response', e.response);
//   dispatch({ type: 'add_error', payload: e.response.data.message })
// }
//   }
// };
// await AsyncStorage.setItem('token', response.data.data.token);
