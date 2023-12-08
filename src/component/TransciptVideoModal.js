import React, {useState} from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../Theme/Colors';
import VectorIcon from './VectorIcon';

const TransciptVideoModal2 = () => {
  const [showModel, setShowModel] = useState(false);
  return (
    <>
      <TouchableOpacity
        style={styles.videoButton}
        onPress={() => setShowModel(true)}>
        <VectorIcon
          family={'FontAwesome'}
          name="file-sound-o"
          color={Colors.white}
          size={28}
        />
        <View>
          <Text style={styles.videoButtonText}>Transcript of video</Text>
          <Text style={styles.videoButtonText}>What is Prem Seva?</Text>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModel}
        onRequestClose={() => {
          setShowModel(!showModel);
        }}>
        <View style={styles.centeredView}>
          <ScrollView
            style={styles.modalView}
            showsVerticalScrollIndicator={false}>
            <View style={styles.popupButtonView}>
              <Text style={styles.textStyle}>PremSeva Transcript</Text>
              <TouchableOpacity
                onPress={() => {
                  setShowModel(!showModel);
                }}>
                <VectorIcon
                  family={'Entypo'}
                  name="cross"
                  color={Colors.black}
                  size={28}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.text}>
              Dr Sanjay Suri:{'\n'}Hello, it's great that you're watching this
              video about Prem Seva, an initiative to support senior care at
              home. My name is Doctor Sanjay Suri, and I am a Paediatrician
              working in the National Health Service in the UK.{'\n'}
              {'\n'}Dr Shubhada Suri:{'\n'}We set up Prem Seva in the memory of
              our dear mother, Doctor Prem Suri, who sadly passed away in
              November 2020 in the middle of the Covid pandemic. She was a
              dedicated and caring doctor in India who inspired me to study
              medicine. I recall how during her ward rounds, she was meticulous
              about the nursing aspects of patient care. Unfortunately, she
              herself became ill and bed bound in the last few months of her
              life. One of the most distressing aspects of her illness was
              developing bed sores and this is one of the main reasons that
              prompted us to start this project.{'\n'}
              {'\n'}Dr Shubhada Suri:{'\n'}So what is Prem Seva? Prem Seva is an
              online information, education and training resource. The aim of
              Prem Seva is to help and support families look after senior people
              in their own homes. As you will see in the care sheets and the
              care videos on this online resource, the emphasis is on practical
              care delivered in a compassionate manner. The content has been
              carefully put together by healthcare professionals. The care
              sheets are based on the common needs of senior people. The care
              videos show how to perform tasks commonly needed in looking after
              senior people. The content is classified into four main headings:
              healthcare, environment, equipment, and social needs.{'\n'}
              {'\n'}Dr Sanjay Suri:{'\n'}India, like many countries, has a
              demographic of an ageing population. World class medical and
              technological healthcare is available in India. It is equally
              important that care at home, provided by families and carers, is
              well-informed and of high quality. Paid carers are often employed
              by agencies or bureaus and there is a need for skills training for
              these carers. Families often find themselves in a caring role and
              feel helpless. Prem Seva hopes to help you look after your senior
              relatives.{'\n'}
              {'\n'}Dr Shubhada Suri:{'\n'}We hope you find this resource useful
              in providing care in a kind and compassionate manner. Caring can
              be a challenging and lonely task, and this can be made more
              difficult when you are unsure how to help or fear that you may not
              be doing things correctly. Once you use this resource, please take
              a few minutes to give us feedback about the content. We invite you
              to participate in the online discussion forum to build a community
              of people in similar caring roles. Thank you.
            </Text>
          </ScrollView>
        </View>
      </Modal>
    </>
  );
};

export default TransciptVideoModal2;

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    lineHeight: 20,
    paddingBottom: 20,
    color: '#000000',
  },
  // model style
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: 70,
    paddingBottom: 40,
  },
  modalView: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  textStyle: {
    color: Colors.black,
    fontWeight: '500',
    fontSize: 19,
  },
  modalText: {
    textAlign: 'center',
    fontSize: 17,
    color: Colors.black,
  },
  popupButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  videoButton: {
    flexDirection: 'row',
    backgroundColor: Colors.darkPrimary,
    borderRadius: 30,
    marginTop: 50,
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  videoButtonText: {
    color: Colors.white,
    fontSize: 20,
    paddingLeft: 10,
  },
});
