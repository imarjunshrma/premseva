import React, {useContext, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomHeader from '../../component/CustomHeader';
import Colors from '../../Theme/Colors';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {TextInput} from 'react-native-gesture-handler';
import {AuthContext} from '../../context/AuthContextProvider';
import VectorIcon from '../../component/VectorIcon';

const CreateAccount = ({navigation}) => {
  const {handleRegister, handleGoogleSignIn} = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
                marginTop: -15,
              }}>
              {/* <BackButton backPress={() => navigation.goBack(' ')} /> */}
              <Text style={styles.headerTitle}>Create Account</Text>
            </View>
            <Formik
              initialValues={{
                email: '',
                name: '',
                password: '',
                confirmPassword: '',
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email('Invalid email address')
                  .required('Email is required'),

                name: Yup.string().required('Name  is required'),
                password: Yup.string()
                  .required('Password is required')
                  .min(8, 'Password must be at least 8 characters long'),
                confirmPassword: Yup.string()
                  .oneOf([Yup.ref('password'), null], 'Passwords must match')
                  .required('Confirm Password is required'),
              })}
              onSubmit={values => {
                console.log(values);
                handleRegister(values).then(data => {
                  console.log(data);
                  if (data) {
                    navigation.navigate('CaregiverProfileEdit');
                  } else {
                    navigation.navigate('LoginScreen');
                  }
                });
              }}>
              {({
                handleChange,
                handleBlur,
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
                    <Text style={{fontSize: 12, color: '#FF0D10'}}>
                      {errors.email}
                    </Text>
                  )}
                  <View style={styles.textInputView}>
                    <TextInput
                      value={values.name}
                      onChangeText={handleChange('name')}
                      onBlur={() => setFieldTouched('name')}
                      placeholder="Enter Name"
                      style={styles.textInput}
                      placeholderTextColor={Colors.darkGrey}
                    />
                  </View>

                  {touched.name && errors.name && (
                    <Text style={{fontSize: 12, color: '#FF0D10'}}>
                      {errors.name}
                    </Text>
                  )}
                  <View style={styles.passwordTextInputMainView}>
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
                    <Text style={{fontSize: 12, color: '#FF0D10'}}>
                      {errors.password}
                    </Text>
                  )}
                  <View style={styles.confirmPasswordTextInputMainView}>
                    <TextInput
                      value={values.confirmPassword}
                      onChangeText={handleChange('confirmPassword')}
                      onBlur={() => setFieldTouched('confirmPassword')}
                      placeholder="Confirm Password"
                      placeholderTextColor={Colors.darkGrey}
                      style={[styles.textInput, {width: '90%'}]}
                      secureTextEntry={showConfirmPassword ? false : true}
                    />
                    <View>
                      {!showConfirmPassword ? (
                        <TouchableOpacity
                          onPress={() => setShowConfirmPassword(true)}>
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
                          onPress={() => setShowConfirmPassword(false)}>
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
                  {touched.confirmPassword && errors.confirmPassword && (
                    <Text style={{fontSize: 12, color: '#FF0D10'}}>
                      {errors.confirmPassword}
                    </Text>
                  )}
                  <>
                    <TouchableOpacity
                      style={styles.loginButton}
                      onPress={handleSubmit}>
                      <Text style={styles.loginButtonText}>Create Account</Text>
                    </TouchableOpacity>
                  </>
                </View>
              )}
            </Formik>

            <View style={styles.DontAccountView}>
              <Text style={styles.DontAccountText}>
                Already have an account?
              </Text>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.registerText}>Login here</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.orText}>or</Text>
              <TouchableOpacity
                style={styles.googleButton}
                onPress={() =>
                  handleGoogleSignIn({isLogin: false, navigation: navigation})
                }>
                <Image
                  source={require('../../images/google.png')}
                  style={styles.googleImage}
                />
                <Text style={styles.loginWidthGoogleText}>
                  Register with Google
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 30,
  },
  headerTitle: {
    fontSize: 19,
    paddingVertical: 30,
    color: Colors.black,
    fontWeight: '500',
  },
  forgortText: {
    textAlign: 'right',
    color: Colors.grey,
  },
  loginButton: {
    backgroundColor: Colors.darkPrimary,
    borderRadius: 10,
    alignItems: 'center',
    height: 65,
    justifyContent: 'center',
  },
  loginButtonText: {
    color: Colors.white,
    fontSize: 22,
  },
  DontAccountView: {
    marginTop: 25,
    // marginBottom: 15,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  DontAccountText: {
    textAlign: 'center',
    fontSize: 17,
    color: Colors.black,
    alignSelf: 'center',
  },
  registerButton: {
    alignSelf: 'center',
  },
  registerText: {
    // textAlign: 'center',
    fontSize: 17,
    color: Colors.darkPrimary,
    paddingLeft: 10,
  },
  chackBoxView: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  chackBoxText: {
    color: Colors.black,
  },
  // {}
  textInputView: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.black,
    marginBottom: Platform.OS === 'ios' ? 25 : 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  passwordTextInputMainView: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  confirmPasswordTextInputMainView: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 30,
  },
  icon: {
    paddingRight: 10,
  },
  //
  orText: {
    textAlign: 'center',
    fontSize: 18,
    color: Colors.darkGrey,
    paddingVertical: 15,
  },
  googleButton: {
    backgroundColor: Colors.lightGrey,
    flexDirection: 'row',
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
    // marginTop: 20,
    marginBottom: 40,
  },
  loginWidthGoogleText: {
    color: Colors.darkGrey,
    alignSelf: 'center',
    paddingLeft: 10,
    fontSize: 18,
  },
  // {}
  textInput: {
    paddingVertical: Platform.OS === 'ios' ? 15 : 7,
    paddingHorizontal: 20,
    color: Colors.black,
    fontSize: 16,
  },
  icon: {
    paddingRight: 10,
  },
  googleImage: {
    width: 30,
    height: 30,
  },
});
