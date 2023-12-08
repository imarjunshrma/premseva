import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Colors from '../Theme/Colors';
import VectorIcon from '../component/VectorIcon';
import questions from '../screens/CarePlan/Quations/questions.json';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {SvgUri} from 'react-native-svg';
const PlansCard = ({value, CarePlans, que, navigation}) => {
  const data = JSON.parse(CarePlans[value]);
  const options = !data?.isRadio ? Object.keys(data?.checkboxAnswer) : [];
  const getCheckboxQuestion = option => {
    const question =
      questions[parseInt(que?.replace(/[^0-9]/g, ''), 10) - 1]
        ?.checkboxQuestion;

    return question ? question[option] : '';
  };
  console.log(options);
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardMainView}>
        <Text style={styles.cardHeaderText}>
          {questions[parseInt(que?.replace(/[^0-9]/g, ''), 10) - 1]?.title}
        </Text>
        <View style={styles.line}></View>
        <View style={styles.middleMainView}>
          <View style={styles.blueBox}>
            <SvgUri
              width={60}
              height={60}
              uri={`http://54.177.16.157:3031${
                questions[parseInt(que?.replace(/[^0-9]/g, ''), 10) - 1]?.image
              }`}
            />
          </View>

          <View style={styles.confusedTextView}>
            <View className="text-[#414042] font-medium">
              {data?.isRadio && (
                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: 15,
                    paddingRight: 20,
                  }}>
                  <VectorIcon
                    family={'Entypo'}
                    name="dot-single"
                    color={Colors.darkGrey}
                    size={23}
                  />
                  <Text style={styles.confusedText}>
                    {
                      questions[parseInt(que?.replace(/[^0-9]/g, ''), 10) - 1]
                        ?.radioQuestion
                    }
                  </Text>
                </View>
              )}
              {options.map((option, index) => (
                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: 15,
                    paddingRight: 20,
                  }}>
                  <VectorIcon
                    family={'Entypo'}
                    name="dot-single"
                    color={Colors.darkGrey}
                    size={23}
                  />
                  <Text style={styles.confusedText} key={index}>
                    {getCheckboxQuestion(option)}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        {data?.comment && (
          <Text style={styles.cardMassageBottom}>{data?.comment}</Text>
        )}

        {questions[parseInt(que?.replace(/[^0-9]/g, ''), 10) - 1]?.article ===
        null ? (
          <TouchableOpacity
            style={styles.docImageBottomView}
            onPress={() => {
              alert('Sheet no exist');
            }}>
            <Text style={styles.docImageBottomTitle}>
              {questions[parseInt(que?.replace(/[^0-9]/g, ''), 10) - 1]?.sheet}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.docImageBottomView}
            onPress={() => {
              let value = parseInt(
                questions[
                  parseInt(que?.replace(/[^0-9]/g, ''), 10) - 1
                ]?.article.split('/')[3],
              );

              navigation.navigate('AboutCareSheet', {
                articleId: value,
              });
            }}>
            <Text style={styles.docImageBottomTitle}>
              {questions[parseInt(que?.replace(/[^0-9]/g, ''), 10) - 1]?.sheet}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default PlansCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 20,
  },
  cardMainView: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    marginHorizontal: 20,
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  docImageBottomView: {
    backgroundColor: Colors.darkPrimary,
    paddingVertical: 10,
    marginTop: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  docImageBottomTitle: {
    color: Colors.white,
    fontSize: 21,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  cardHeaderText: {
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 10,
    color: Colors.black,
    fontWeight: '600',
  },
  line: {
    borderBottomWidth: 1,
    borderColor: Colors.grey,
  },
  middleMainView: {
    flexDirection: 'row',
  },
  blueBox: {
    borderWidth: 2,
    borderColor: Colors.darkPrimary,
    alignSelf: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 20,
    borderRadius: 10,
    marginLeft: 20,
  },
  cardImage: {
    width: 60,
    height: 60,
  },
  confusedTextView: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 20,
    flex: 0.9,
    // using flex for fix text overflow
  },
  confusedText: {
    fontSize: 20,
    color: Colors.black,
  },
  cardMassageBottom: {
    paddingTop: 20,
    textAlign: 'center',
    color: Colors.black,
  },
});
