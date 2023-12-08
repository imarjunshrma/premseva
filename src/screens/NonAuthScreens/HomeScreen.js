import {
  Alert,
  Button,
  Image,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {useContext, useState} from 'react';
import CustomHeader from '../../component/CustomHeader';
import Colors from '../../Theme/Colors';
import VectorIcon from '../../component/VectorIcon';
import Paragraph from '../../component/Paragraph';
import TransciptVideoModal from '../../component/TransciptVideoModal';
import TransciptVideoModal2 from '../../component/TransciptVideoModal2';
import YoutubePlayer from 'react-native-youtube-iframe';
import {AuthContext} from '../../context/AuthContextProvider';

const HomeScreen = ({navigation}) => {
  const [showModel, setShowModel] = useState('');
  const {currentUser} = useContext(AuthContext);
  return (
    <>
      <StatusBar barStyle="default" />
      <CustomHeader
        title="PREM SEVA"
        subTitle="Supporting your caregiving"
        logo="ios-menu-outline"
        drawerOnPress={() => navigation.openDrawer('BottomStack')}
      />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
          <View style={styles.topView}>
            <Text style={styles.topText1}>
              This app has been inspired by our dear mother Dr. Mrs Prem Suri
              who passed away in November 2020 during the Covid pandemic.
            </Text>
            <Text style={styles.topText2}>
              She was a dedicated doctor who was passionate about the nursing
              aspects of patient care. The irony is that she herself developed a
              severe pressure sore at the end of her life.
            </Text>
            <Text style={styles.topText2}>
              We hope that this app will support family and paid carers in
              looking after senior people in their homes.
            </Text>
            <Image
              source={require('../../images/Mother3.png')}
              style={styles.topImage}
            />
          </View>

          <View>
            {!currentUser && (
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginButtonText}>Login/Register</Text>
              </TouchableOpacity>
            )}

            <Paragraph
              title="What is Prem Seva?"
              paragraph="Prem Seva is an informational, educational and training resource to empower and support families and paid carers to provide compassionate and practical care for senior people at home. The content of the app has been carefully curated and drawn from reputable sources."
            />
            <View style={styles.youtubeMainView}>
              <View>
                <YoutubePlayer
                  height={220}
                  play={false}
                  videoId={'kf_Vm1-DheY'}
                />
              </View>
            </View>

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
                    <Text style={styles.textStyle}>Prem Seva Transcript</Text>
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
                  <TransciptVideoModal />
                </ScrollView>
              </View>
            </Modal>

            <TransciptVideoModal />
          </View>
          <View style={styles.grandMotherMainView}>
            <Image
              source={require('../../images/sm1.png')}
              style={styles.motherImage}
            />
            <Paragraph
              title="Contents of the app"
              paragraph="This app consists of care sheets and care videos which are
              arranged under several categories"
            />
            <Image
              source={require('../../images/anim.png')}
              style={[styles.contentImage, {marginBottom: 60}]}
            />
          </View>
          <View>
            <Paragraph
              title="Care Plan approachs"
              paragraph="When starting to use the app, the first step is to create a care plan"
              paragraph2="The video below will help you create a care plan for the senior person."
            />
            <View style={styles.youtubeMainView2}>
              <View>
                <YoutubePlayer
                  height={220}
                  play={false}
                  videoId={'mZb4LK5v26c'}
                />
              </View>
              {/* <View style={styles.docImageBottomView}>
                <Text style={styles.docImageBottomTitle}>Intro:</Text>
                <Text style={styles.docImageBottomSubTitle}>
                  Dr.Sanjay Suri & Dr Shubhada Suri
                </Text>
              </View> */}
            </View>
            <TransciptVideoModal2 />
            {currentUser ? (
              <TouchableOpacity
                style={styles.createCarePlaneButton}
                onPress={() => navigation.navigate('Care Plans')}>
                <Text style={styles.loginButtonText}>Create a Care Plan</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  topView: {
    backgroundColor: Colors.lightPrimary,
    paddingHorizontal: 20,
  },
  topText1: {
    textAlign: 'center',
    color: Colors.black,
    fontSize: 18,
    paddingTop: 13,
  },
  topText2: {
    textAlign: 'center',
    fontSize: 18,
    paddingVertical: 20,
    color: Colors.black,
  },
  topText3: {
    textAlign: 'center',
    fontSize: 18,
    color: Colors.black,
  },
  loginButton: {
    backgroundColor: Colors.darkPrimary,
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 50,
  },
  youtubeMainView: {
    marginHorizontal: 20,
  },
  youtubeMainView2: {
    marginHorizontal: 20,
    marginTop: 40,
  },
  loginButtonText: {
    color: Colors.white,
    paddingVertical: 20,
    paddingHorizontal: 30,
    fontSize: 20,
  },
  docImageBottomView: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingVertical: 10,
  },
  docImageBottomTitle: {
    color: Colors.darkPrimary,
    fontSize: 21,
  },
  docImageBottomSubTitle: {
    color: Colors.darkPrimary,
    fontSize: 17,
    paddingTop: 4,
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
  grandMotherMainView: {
    backgroundColor: Colors.lightPrimary,
    marginTop: 50,
  },
  motherImage: {
    width: '90%',
    height: 300,
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  contentImage: {
    // width: '100%',
    height: 250,
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 20,
  },
  createCarePlaneButton: {
    backgroundColor: Colors.darkPrimary,
    alignSelf: 'center',
    borderRadius: 30,
    marginBottom: 40,
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
});
