import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Colors from '../Theme/Colors';
import useRestAPI from '../api/api';

const FeedBackTExtInput = () => {
  const {feedbackForm} = useRestAPI();
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          mobileNumber: 123456478,
          role: '',
          hear: '',
          findUseful: '',
          suggestion: '',
          rate: 4,
          isPublished: true,
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Name  is required'),
          email: Yup.string().required('Email is required'),
          role: Yup.string().required('Role is required'),
          findUseful: Yup.string().required('Find Useful is required'),
          suggestion: Yup.string().required('Suggestion is required'),
        })}
        onSubmit={values => {
          console.log(values);
          let data = {
            ...values,
            phone: values.mobileNumber,
            useful: values.findUseful,
            rating: values.rate,
            publish: values.isPublished,
          };
          feedbackForm(data);
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
          <KeyboardAvoidingView behavior="padding">
            <View>
              <Text style={styles.text}>Name</Text>
              <View style={styles.textInputView}>
                <TextInput
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={() => setFieldTouched('name')}
                  placeholder="Enter name"
                  style={styles.textInput}
                  placeholderTextColor={Colors.darkGrey}
                />
              </View>
              {touched.name && errors.name && (
                <Text style={{fontSize: 12, color: '#FF0D10'}}>
                  {errors.name}
                </Text>
              )}
            </View>
            <View>
              <Text style={styles.text}>Email</Text>
              <View style={styles.textInputView}>
                <TextInput
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                  placeholder="Enter email"
                  style={styles.textInput}
                  placeholderTextColor={Colors.darkGrey}
                />
              </View>
              {touched.email && errors.email && (
                <Text style={{fontSize: 12, color: '#FF0D10'}}>
                  {errors.email}
                </Text>
              )}
            </View>
            <View>
              <Text style={styles.text}>Mobile Number</Text>
              <View style={styles.textInputView}>
                <TextInput
                  value={values.mobileNumber}
                  onChangeText={handleChange('mobileNumber')}
                  onBlur={() => setFieldTouched('mobileNumber')}
                  placeholder="Enter mobileNumber"
                  keyboardType="numeric"
                  style={styles.textInput}
                  placeholderTextColor={Colors.darkGrey}
                />
              </View>
              {touched.mobileNumber && errors.mobileNumber && (
                <Text style={{fontSize: 12, color: '#FF0D10'}}>
                  {errors.mobileNumber}
                </Text>
              )}
            </View>
            <View>
              <Text style={styles.text}>What is you role?</Text>
              <View style={styles.textInputView}>
                <TextInput
                  value={values.role}
                  onChangeText={handleChange('role')}
                  onBlur={() => setFieldTouched('role')}
                  placeholder="Role"
                  style={styles.textInput}
                  placeholderTextColor={Colors.darkGrey}
                />
              </View>
              {touched.role && errors.role && (
                <Text style={{fontSize: 12, color: '#FF0D10'}}>
                  {errors.role}
                </Text>
              )}
            </View>
            <View>
              <Text style={styles.text}>How did you hear about us?</Text>
              <View style={styles.textInputView}>
                <TextInput
                  value={values.hear}
                  onChangeText={handleChange('hear')}
                  onBlur={() => setFieldTouched('hear')}
                  placeholder="How did you hear about us?"
                  style={styles.textInput}
                  placeholderTextColor={Colors.darkGrey}
                />
              </View>
              {touched.hear && errors.hear && (
                <Text style={{fontSize: 12, color: '#FF0D10'}}>
                  {errors.hear}
                </Text>
              )}
            </View>
            <View>
              <Text style={styles.text}>
                What did you find most useful in the prem Seva app?
              </Text>
              <View style={styles.textInputView}>
                <TextInput
                  value={values.findUseful}
                  onChangeText={handleChange('findUseful')}
                  onBlur={() => setFieldTouched('findUseful')}
                  placeholder="Most usefull things...."
                  style={styles.textInput}
                  placeholderTextColor={Colors.darkGrey}
                />
              </View>
              {touched.findUseful && errors.findUseful && (
                <Text style={{fontSize: 12, color: '#FF0D10'}}>
                  {errors.findUseful}
                </Text>
              )}
            </View>
            <View>
              <Text style={styles.text}>
                What are your suggestions for improving the Prem Seva app?
              </Text>
              <View style={styles.textInputView}>
                <TextInput
                  value={values.suggestion}
                  onChangeText={handleChange('suggestion')}
                  onBlur={() => setFieldTouched('suggestion')}
                  placeholder=" Write your suggestion"
                  style={styles.textInput}
                  placeholderTextColor={Colors.darkGrey}
                />
              </View>
              {touched.suggestion && errors.suggestion && (
                <Text style={{fontSize: 12, color: '#FF0D10'}}>
                  {errors.suggestion}
                </Text>
              )}
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
              <Text style={styles.loginButtonText}>Submit</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        )}
      </Formik>
    </>
  );
};

export default FeedBackTExtInput;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    paddingLeft: 10,
    paddingVertical: 8,
    color: Colors.black,
  },
  textInput: {
    paddingVertical: Platform.OS === 'ios' ? 15 : 7,
    paddingHorizontal: 20,
    color: Colors.black,
    fontSize: 16,
  },
  textInputView: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.black,
    marginBottom: Platform.OS === 'ios' ? 25 : 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: Colors.darkPrimary,
    borderRadius: 10,
    marginBottom: 50,
    marginTop: 40,
  },
  loginButtonText: {
    color: Colors.white,
    paddingVertical: 20,
    fontSize: 20,
    textAlign: 'center',
  },
});
