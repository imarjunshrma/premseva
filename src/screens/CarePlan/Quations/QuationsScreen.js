import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeader from '../../../component/CustomHeader';
import Colors from '../../../Theme/Colors';
import questions from './questions.json';
import Question from './Question';
import useRestAPI from '../../../api/api';
import BackButton from '../../../component/BackButton';

const QuationsScreen = ({navigation}) => {
  const [State, setState] = useState(0);
  const [careReciver, setCareReciver] = useState(null);

  const {getCareReceiver} = useRestAPI();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let data = await getCareReceiver();

    if (data) {
      setCareReciver(data[0]);
    } else {
      console.log(res.data.error);
      setCareReciver(null);
    }
  };

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
        <View style={styles.secContainer}>
          <View style={{paddingTop: 10}}>
            <BackButton backPress={() => navigation.goBack('Plan')} />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.headerText}>Question {State + 1}/20</Text>
            <View style={styles.line}></View>
            <Question
              question={questions[State]}
              setState={setState}
              State={State}
              name={
                careReciver?.cr_nicname != ''
                  ? careReciver?.cr_nicname
                  : careReciver?.cr_name
              }
              navigation={navigation}
            />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default QuationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightPrimary,
    paddingHorizontal: 20,
  },
  secContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 9,
    marginBottom: 30,
    height: '92%',
  },
  headerText: {
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
    paddingVertical: 10,
    color: Colors.black,
  },
  line: {
    borderBottomWidth: 0.5,
    width: 100,
    alignSelf: 'center',
    borderColor: Colors.grey,
  },
});
