import { Alert, AsyncStorage } from 'react-native';
// import notateeApi from '../../api/notatee';
import * as RootNavigation from '../../navigationRef';
import { Actions } from "react-native-router-flux";
import * as types from '../types'


export function SignupRes(data) {
  return {
    type: types.SIGNUP,
    data,
  };
}

export const signup = (userName, email, password, confirmPassword) => {
  
  const data = {
    name: userName,
    email: email,
    password: password,
    c_password: confirmPassword
  }
  return async (dispatch) => {
    fetch(`https://spotpopfashion.com/affiliate/api/user/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        ('signUp res', res);
        if (res.success === true) {  
          // ("Token Signup", res.data.token);
           AsyncStorage.setItem('token', res.data.token);
           dispatch(SignupRes(res));
           Actions.Login();
           Alert.alert('Your account Registered successfully')
          // ("success");
          // dispatch(loginRes(res));
        } else if (res.success === false) {
          // Alert.alert(res.message)
          Alert.alert("The email has already been taken");
          // dispatch(loginRes(res));
        }
      })
      .catch((e) => {
        console.warn(e);
      });
    // try {
    //   dispatch({ type: 'requestsent' })
    //   const response = await ('https://spotpopfashion.com/affiliate/api/user/signup', JSON.stringify(data))
    //   ('response', response);
    //   (response.success);
    //   const token = response.data.token;
    //   ("Token", token);
    //   await AsyncStorage.setItem('token', token);
      
    //   dispatch({ type: 'signup', payload: response.data.token });
    //   let err = response.error;
    //   ("errrr",err);
    //   if (response.success == true) {
    //     ("Success");
        
    //     // RootNavigation.navigate('StoreDetails');
    //   } else {
    //     ("Failure");

    //     // RootNavigation.navigate('mainFlow');
    //   }
    //   // dispatch({ type: 'signin', payload: response.data.token });
    // } catch (e) {
    //   ('e.response', e.response);
    //   dispatch({ type: 'add_error', payload: e.response.data.message })
    // }
  }
};