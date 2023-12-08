import {createContext, useEffect, useState} from 'react';
import {API_ROUTE} from '../network/config/config';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SocialLogin} from './SocialLogin';

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      console.log(token);
      setCurrentUser(JSON.parse(token));
    }
  };
  const handleLogin = user => {
    return axios
      .post(API_ROUTE + '/api/user/signIn', {
        ...user,
      })
      .then(async res => {
        if (res.data.status) {
          setCurrentUser(res.data[0]);
          await AsyncStorage.setItem('token', JSON.stringify(res.data[0]));
          alert('You have successfully logged in.');

          return true;
        } else {
          setCurrentUser(null);
          alert(res.data.error);
          // await AsyncStorage.setItem('token', null);
          await AsyncStorage.removeItem('token');
          return false;
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleRegister = values => {
    return axios
      .post(API_ROUTE + '/api/user/signUp', {
        ...values,
      })
      .then(async res => {
        if (res.data.status) {
          setCurrentUser(res.data[0]);
          await AsyncStorage.setItem('token', JSON.stringify(res.data[0]));
          alert('You have registered successfully');
          return true;
        } else {
          setCurrentUser(null);
          // await AsyncStorage.setItem('token', null);
          await AsyncStorage.removeItem('token');
          alert(res.data.error);
          return false;
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  async function handleGoogleSignIn({isLogin = true, navigation}) {
    await SocialLogin.loginWithGoogle()
      .then(response => {
        console.log({
          name: response.user.displayName,
          email: response.user.email,
          google_id: response.user.uid,
        });
        if (isLogin) {
          handleLogin({
            email: response.user.email,
            google_id: response.user.uid,
          });
        } else {
          // handleRegister({
          //   name: response.user.displayName,
          //   email: response.user.email,
          //   google_id: response.user.uid,
          // });

          handleRegister({
            name: response.user.displayName,
            email: response.user.email,
            google_id: response.user.uid,
          }).then(data => {
            console.log(data);
            if (data) {
              navigation.navigate('CaregiverProfileEdit');
            } else {
              navigation.navigate('LoginScreen');
            }
          });
        }
        // TODO: Send the user ID to your server to store it in the MySQL database
      })
      .catch(err => {
        console.log(err);
      });
    // }
  }

  const handleLogout = async () => {
    setCurrentUser(null);
    alert('You have successfully logged out!');
    // await AsyncStorage.setItem('token', null);
    await AsyncStorage.removeItem('token');
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        handleLogin,
        handleRegister,
        handleGoogleSignIn,
        handleLogout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
