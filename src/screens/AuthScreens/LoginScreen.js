import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import CustomHeader from '../../component/CustomHeader';
import Colors from '../../Theme/Colors';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {AuthContext} from '../../context/AuthContextProvider';
import VectorIcon from '../../component/VectorIcon';

const LoginScreen = ({navigation}) => {
  const {handleGoogleSignIn, handleLogin} = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <StatusBar barStyle="default" />
      <CustomHeader
        title="PREM SEVA"
        subTitle="Supporting your caregiving"
        logo="ios-menu-outline"
        drawerOnPress={() => navigation.openDrawer('BottomStack')}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {/* <BackButton backPress={() => navigation.goBack(' ')} /> */}
              <Text style={styles.headerTitle}>Please login if registered</Text>
            </View>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email('Invalid email address')
                  .required('Email is required'),
                password: Yup.string()
                  .required('Password is required')
                  .min(4, 'Password must be at least 4 characters long'),
              })}
              onSubmit={values => {
                console.log(values);
                handleLogin(values).then(data => {
                  console.log(data);
                  if (data) {
                    navigation.navigate('Home');
                  } else {
                    navigation.navigate('LoginScreen');
                  }
                });
              }}>
              {({
                handleChange,
                handleSubmit,
                setFieldTouched,
                values,
                touched,
                errors,
              }) => (
                <View>
                  <View style={styles.textInputView}>
                    <TextInput
                      value={values.email}
                      onChangeText={handleChange('email')}
                      onBlur={() => setFieldTouched('email')}
                      placeholder="Email Address"
                      style={styles.textInput}
                      placeholderTextColor={Colors.darkGrey}
                    />
                  </View>
                  {touched.email && errors.email && (
                    <Text style={{fontSize: 12, color: Colors.red}}>
                      {errors.email}
                    </Text>
                  )}
                  <View style={styles.passwordTextInputView}>
                    <TextInput
                      value={values.password}
                      onChangeText={handleChange('password')}
                      onBlur={() => setFieldTouched('password')}
                      placeholder="Enter Password"
                      placeholderTextColor={Colors.darkGrey}
                      style={[styles.textInput, {width: '90%'}]}
                      secureTextEntry={showPassword ? false : true}
                    />
                    <View>
                      {!showPassword ? (
                        <TouchableOpacity onPress={() => setShowPassword(true)}>
                          <VectorIcon
                            family={'Entypo'}
                            name="eye-with-line"
                            color={Colors.darkGrey}
                            size={20}
                            style={{paddingTop: 15, paddingLeft: 5}}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() => setShowPassword(false)}>
                          <VectorIcon
                            family={'Entypo'}
                            name="eye"
                            color={Colors.darkGrey}
                            size={20}
                            style={{paddingTop: 15, paddingLeft: 5}}
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>

                  {touched.password && errors.password && (
                    <Text style={{fontSize: 15, color: Colors.red}}>
                      {errors.password}
                    </Text>
                  )}
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ForgotPasswordScreen')}>
                    <Text style={styles.forgortText}>Forgot password?</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.loginButton}
                    onPress={handleSubmit}>
                    <Text style={styles.loginButtonText}>Login</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>

            <View style={styles.DontAccountView}>
              <Text style={styles.DontAccountText}>Don’t have an account?</Text>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => navigation.navigate('CreateAccount')}>
                <Text style={styles.registerText}>Register here</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.loginwidthGoogleView}>
              <Text style={styles.orText}>or</Text>
              <TouchableOpacity
                style={styles.googleButton}
                onPress={() =>
                  handleGoogleSignIn({
                    navigation: navigation,
                  })
                }>
                <Image
                  source={require('../../images/google.png')}
                  style={styles.googleImage}
                />
                <Text style={styles.loginWidthGoogleText}>
                  login with Google
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 30,
  },
  headerTitle: {
    fontSize: 18,
    paddingVertical: 30,
    color: Colors.black,
  },
  forgortText: {
    textAlign: 'right',
    color: Colors.grey,
    paddingTop: 20,
  },
  loginButton: {
    backgroundColor: Colors.darkPrimary,
    borderRadius: 10,
    marginTop: 50,
    alignItems: 'center',
    height: 65,
    justifyContent: 'center',
  },
  loginButtonText: {
    color: Colors.white,
    fontSize: 22,
  },
  DontAccountView: {
    marginTop: 40,
  },
  DontAccountText: {
    textAlign: 'center',
    fontSize: 17,
    color: Colors.black,
  },
  registerButton: {
    alignSelf: 'center',
  },
  registerText: {
    textAlign: 'center',
    fontSize: 17,
    color: Colors.darkPrimary,
    paddingTop: 10,
  },
  loginwidthGoogleView: {
    marginTop: 20,
  },
  orText: {
    textAlign: 'center',
    fontSize: 18,
    color: Colors.darkGrey,
  },
  googleButton: {
    backgroundColor: Colors.lightGrey,
    flexDirection: 'row',
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 40,
  },
  loginWidthGoogleText: {
    color: Colors.darkGrey,
    alignSelf: 'center',
    paddingLeft: 10,
    fontSize: 18,
  },
  // {}
  textInputView: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.black,
    marginBottom: Platform.OS === 'ios' ? 25 : 20,
    // flexDirection: 'row',
    paddingHorizontal: 10,
  },
  textInputMain: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.black,
    flexDirection: 'row',
  },
  passwordTextInputView: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput: {
    paddingVertical: Platform.OS === 'ios' ? 15 : 7,
    fontSize: 16,
    color: Colors.black,
  },
  icon: {
    paddingRight: 10,
  },
  googleImage: {
    width: 30,
    height: 30,
  },
});
