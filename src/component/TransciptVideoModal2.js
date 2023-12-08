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
          <Text style={styles.videoButtonText}>Care plan approach</Text>
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
              <Text style={styles.textStyle}>Care Plan Transcript</Text>
              <TouchableOpacity
                // style={[styles.button, styles.buttonClose]}
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
              Hello, my name is Dr Shubhada Suri and I'm going to talk to you
              about creating a care plan for senior person using this app. By
              the end of this video, you will understand what a care plan is,
              who should create a care plan, why a care plan is needed and how
              to create and use it.{'\n'}
              {'\n'}So, what is a care plan? A care plan is a useful way of
              describing the care needs of the senior person, their wishes and
              the resources needed to complete the care needs. And who should
              create the care plan? The care plan should be created by the
              primary caregiver in discussion with the senior person, if they
              are able to take part in the discussion. They should do this in a
              kind and compassionate manner, using language that the senior
              person can understand. This process should not be rushed, so
              please make sure there's enough time for discussion. The care plan
              is likely to change over a period of time and should be reviewed
              regularly. This will help navigate the changing care needs of the
              senior person. The frequency of review will depend on the care
              needs of the senior person.{'\n'}
              {'\n'}So, why have a care plan? A care plan helps everyone
              understand the senior persons needs and wishes and how they can be
              met. It ensures continuity of care so that if the carer or the
              family member looking after the senior person changes, they can
              simply look at the care plan and understand their care needs. This
              can be helpful at handover from one shift to another. A care plan
              can help the senior person live as independently as possible and
              have more control over their life.{'\n'}
              {'\n'}And how should you create a care plan? You will first need
              to have registered on this app. On the home screen, tap on the
              “Create a care plan” button. You need to record the details of the
              senior person, their name and age and the name and relationship of
              the person who is creating the care plan with them. There's a box
              to ask where the senior person would like to be called. The date
              of the care plan and the date for review should also be noted
              down. A series of questions will appear on the screen. You need to
              fill out these to create the final care plan, which will appear on
              the screen at the end after all the questions have been answered.
              There are twenty questions and it will not take long to answer
              them. Each care need is posed as a question. There are multiple
              options that can be ticked. The boxes that best fit the correct
              response simply need to be ticked. All questions will need to be
              answered. You may choose “none” if there is no care need implied
              in that question. If any other option is selected apart from
              “none”, then you may use the comments box to give more information
              as to how that care need could be met. For example, the first
              question is about the senior person’s level of understanding. And
              the answer could be that they get easily confused. In that case,
              the support needed will be to explain instructions slowly and
              clearly in simple language and repeat it as necessary in a patient
              manner, which will be entered in the comments box. Another example
              is if their mobility care need suggests that they use a walking
              stick, then the comments box should say that they should have the
              stick available and ready to use in case of need. The final care
              plan will provide a link to the mobility care sheet and care video
              as appropriate. A completed care plan is available on this app as
              an example. I hope you found this video useful in creating a care
              plan and we would love to hear your feedback. Thank you.
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
    marginBottom: 40,
  },
  videoButtonText: {
    color: Colors.white,
    fontSize: 20,
    paddingLeft: 10,
  },
});
