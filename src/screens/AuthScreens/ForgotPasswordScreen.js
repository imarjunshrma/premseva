import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../component/CustomHeader';
import Colors from '../../Theme/Colors';
import BackButton from '../../component/BackButton';
import {Formik} from 'formik';
import * as Yup from 'yup';

import useRestAPI from '../../api/api';

const ForgotPasswordScreen = ({navigation}) => {
  const {verifyPassword, sendForgetApi} = useRestAPI();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  return (
    <>
      <StatusBar barStyle="default" />
      <CustomHeader
        title="PREM SEVA"
        subTitle="Supporting your caregiving"
        logo="ios-menu-outline"
        drawerOnPress={() => navigation.openDrawer('BottomStack')}
      />
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: -15,
              }}>
              <BackButton backPress={() => navigation.navigate('Login')} />
              <Text style={styles.headerTitle}>Forgot Password</Text>
              {/* <Text style={styles.headerText}>Back</Text> */}
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
                  .required('New Password is required')
                  .min(4, 'Password must be at least 4 characters long'),
              })}
              onSubmit={async values => {
                console.log(values);
                let data = {
                  ...values,
                  otp: Number(values.otp),
                };

                let status = await verifyPassword(data);
                if (status) {
                  navigation.navigate('LoginScreen');
                }
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
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={styles.textInputView}>
                      <TextInput
                        value={values.password}
                        onChangeText={handleChange('password')}
                        onBlur={() => setFieldTouched('password')}
                        placeholder="Enter New Password"
                        style={styles.textInput}
                        placeholderTextColor={Colors.darkGrey}
                        secureTextEntry={true}
                      />
                    </View>
                  </View>
                  {touched.password && errors.password && (
                    <Text style={{fontSize: 15, color: Colors.red}}>
                      {errors.password}
                    </Text>
                  )}
                  <View style={styles.textInputView}>
                    <TextInput
                      value={values.otp}
                      onChangeText={handleChange('otp')}
                      onBlur={() => setFieldTouched('otp')}
                      placeholder="Enter OTP"
                      style={styles.textInput}
                      placeholderTextColor={Colors.darkGrey}
                    />
                  </View>
                  {touched.otp && errors.otp && (
                    <Text style={{fontSize: 15, color: Colors.red}}>
                      {errors.otp}
                    </Text>
                  )}
                  <TouchableOpacity onPress={() => sendForgetApi(values.email)}>
                    <Text style={styles.forgortText}>Get OTP </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.loginButton}
                    onPress={handleSubmit}>
                    <Text style={styles.loginButtonText}>Submit</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>

            <View style={styles.DontAccountView}>
              <Text style={styles.DontAccountText}>Do you have account?</Text>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                <Text style={styles.registerText}>Login Here</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default ForgotPasswordScreen;

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
    fontWeight: '500',
  },
  forgortText: {
    textAlign: 'right',
    color: Colors.grey,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    paddingVertical: Platform.OS === 'ios' ? 15 : 7,
    paddingHorizontal: 20,
    color: Colors.black,
    fontSize: 16,
  },
  textInputPassword: {
    paddingVertical: Platform.OS === 'ios' ? 15 : 7,
    paddingHorizontal: 20,
    color: Colors.black,
    // marginRight: 10,
    fontSize: 16,
  },
  icon: {
    paddingRight: 10,
  },
});
