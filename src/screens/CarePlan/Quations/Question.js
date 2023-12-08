import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import questions from './questions.json';
import Colors from '../../../Theme/Colors';
import VectorIcon from '../../../component/VectorIcon';
import useRestAPI from '../../../api/api';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const questionLength = questions.length;
export default function Question({
  question,
  setState,
  State,
  name,
  navigation,
}) {
  const {carePlanQuestions, getCarePlanQuestions} = useRestAPI();
  const [isLoading, setloading] = useState(false);
  const [Answer, setAnswer] = useState({
    checkboxAnswer: {},
    isRadio: false,
    comment: '',
  });
  useEffect(() => {
    interval(1000);
  }, [name, State]);

  const interval = time => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, time);
  };
  useEffect(() => {
    const getData = async () => {
      let data = await getCarePlanQuestions();

      if (!JSON.parse(data['ques' + (State + 1)])) {
        setAnswer({
          checkboxAnswer: {},
          isRadio: false,
          comment: '',
        });
      } else {
        setAnswer({...Answer, ...JSON.parse(data['ques' + (State + 1)])});
      }
    };
    getData();
  }, [State]);

  const handleRadio = () => {
    if (!Answer.isRadio) {
      setAnswer({
        ...Answer,
        checkboxAnswer: {},
        isRadio: true,
      });
    } else {
      setAnswer({
        ...Answer,
        checkboxAnswer: {},
        isRadio: false,
      });
    }
    interval(1);
  };

  const isAnswerChecked = () => {
    if (!Answer.isRadio && (Answer.checkboxAnswer.length < 0 || isNullish)) {
      alert('Please select at least one  answer');
      return false;
    }
    return true;
  };
  const isNullish = Object.values(Answer.checkboxAnswer).every(value => {
    if (value === false) {
      return true;
    }
    return false;
  });

  return (
    <>
      {!name || isLoading ? (
        <ActivityIndicator size="large" color={Colors.black} />
      ) : (
        <View>
          <View style={styles.quationView}>
            <VectorIcon
              family={'Entypo'}
              name="dot-single"
              color={Colors.black}
              size={28}
            />
            <Text style={styles.quationTitle}>
              {question?.question?.replace(`{name}`, name)}
            </Text>
          </View>

          <View style={styles.squareChackMainView}>
            <BouncyCheckbox
              innerIconStyle={{borderRadius: 100, borderWidth: 1}}
              iconStyle={{borderRadius: 100}}
              fillColor={Colors.black}
              unfillColor="#FFFFFF"
              onPress={handleRadio}
              isChecked={Answer?.isRadio ? true : false}
            />

            <Text style={styles.quationTitle}>{question.radioQuestion}</Text>
          </View>

          <Text style={styles.orTitle}>or select from below</Text>

          {question?.checkboxQuestion?.map((val, index) => (
            <View style={styles.squareChackMainView}>
              <BouncyCheckbox
                innerIconStyle={{borderRadius: 4, borderWidth: 2}}
                iconStyle={{borderRadius: 4}}
                fillColor={Colors.primary}
                unfillColor="#FFFFFF"
                key={index}
                onPress={() => {
                  setAnswer({
                    ...Answer,
                    checkboxAnswer: {
                      ...Answer.checkboxAnswer,
                      [index]: !Answer.checkboxAnswer[index],
                    },
                    isRadio: false,
                  });
                  interval(100);
                }}
                isChecked={Answer?.checkboxAnswer[index]}
              />
              <Text style={styles.quationTitle}>{val}</Text>
            </View>
          ))}

          <View style={styles.textInputMainView}>
            <Text style={styles.commentsTitle}>Comments</Text>
            <TextInput
              placeholder=" Write your comments here "
              style={styles.textInput}
              multiline
              value={Answer?.comment}
              onChangeText={value => {
                setAnswer({
                  ...Answer,
                  comment: value,
                });
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            {State > 0 && (
              <TouchableOpacity style={styles.loginButton}>
                <Text
                  style={styles.loginButtonText}
                  onPress={() => {
                    if (State > 1) {
                      setState(State - 1);
                    } else {
                      setState(0);
                    }
                  }}>
                  Back
                </Text>
              </TouchableOpacity>
            )}
            {State == 19 && (
              <TouchableOpacity style={styles.loginButton}>
                <Text
                  style={styles.loginButtonText}
                  onPress={() => {
                    if (isAnswerChecked()) {
                      carePlanQuestions({
                        ['ques' + (State + 1)]: JSON.stringify(Answer),
                      });
                      navigation.goBack('');
                    }
                  }}>
                  Submit
                </Text>
              </TouchableOpacity>
            )}
            {State + 1 < questionLength && (
              <TouchableOpacity style={styles.loginButton}>
                <Text
                  style={styles.loginButtonText}
                  onPress={() => {
                    if (State + 1 == 19) {
                      if (Answer?.comment === '') {
                        alert('Please Add  comment ');
                      } else {
                        carePlanQuestions({
                          ['ques' + (State + 1)]: JSON.stringify(Answer),
                        });
                        setState(State + 1);
                      }
                    } else if (isAnswerChecked()) {
                      carePlanQuestions({
                        ['ques' + (State + 1)]: JSON.stringify(Answer),
                      });
                      setState(State + 1);
                    }
                  }}>
                  Next
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  textInput: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    color: Colors.black,
    fontSize: 16,

    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    height: 70,
  },
  quationView: {
    flexDirection: 'row',
    marginTop: 25,
  },
  quationTitle: {
    fontSize: 21,
    paddingHorizontal: 10,
    color: Colors.black,
  },
  roundChackMainView: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 40,
  },
  icon: {
    alignSelf: 'center',
    paddingLeft: 7,
  },
  orTitle: {
    textAlign: 'center',
    paddingVertical: 6,
    color: Colors.grey,
  },
  squareChackMainView: {
    flexDirection: 'row',
    marginLeft: 2,
    paddingVertical: 15,
    width: '90%',
  },
  textInputMainView: {
    marginTop: 25,
  },
  commentsTitle: {
    fontSize: 18,
    paddingLeft: 10,
    paddingBottom: 5,
    color: Colors.black,
  },
  loginButton: {
    backgroundColor: Colors.darkPrimary,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 40,
    width: 120,
  },
  loginButtonText: {
    color: Colors.white,
    paddingVertical: 20,
    fontSize: 20,
    textAlign: 'center',
  },
});
