import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Linking,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import VectorIcon from './VectorIcon';
import Colors from '../Theme/Colors';
import {AuthContext} from '../context/AuthContextProvider';
import DrawerProfile from './DrawerProfile';
import DrawerBookmark from './DrawerBookmark';
import {openInbox} from 'react-native-email-link';

const CustomDrawer = (props, {navigation}) => {
  const [showModel, setShowModel] = useState('');
  const {handleLogout} = useContext(AuthContext);
  const {currentUser} = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeaderView}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require('../images/logo.png')}
        />
        <Text style={styles.drawerHeaderTitle}>Prem Seva</Text>
      </View>
      <View style={styles.line}></View>
      {currentUser ? (
        <>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('BottomStack')}
            style={styles.dropdownOpenScreensView}>
            <View style={styles.iconView}>
              <VectorIcon
                family={'AntDesign'}
                name="home"
                color={Colors.darkGrey}
                size={27}
              />
            </View>
            <Text style={styles.screenNameTitle}>Home</Text>
          </TouchableOpacity>
          <DrawerProfile
            pressGiver={() => props.navigation.navigate('CaregiverProfile')}
            pressRecevier={() =>
              props.navigation.navigate('CareReceiverProfile')
            }
          />
          <DrawerBookmark
            pressSheet={() => props.navigation.navigate('BookmarkCareSheet')}
            pressVideo={() => props.navigation.navigate('BookmarkCareVideo')}
          />
          <TouchableOpacity
            onPress={() => props.navigation.navigate('FeedBackScreen')}
            style={styles.dropdownOpenScreensView}>
            <View style={styles.iconView}>
              <VectorIcon
                family={'Feather'}
                name="edit"
                color={Colors.darkGrey}
                size={26}
              />
            </View>
            <Text style={styles.screenNameTitle}>Feedback</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownOpenScreensView}>
            <View style={styles.iconView}>
              <Image source={require('../images/fourm.png')} />
            </View>
            <Text style={styles.screenNameTitle}>Forum</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dropdownOpenScreensView}
            onPress={() => {
              Linking.openURL('mailto:ritikchhipa5@gmail.com');
            }}>
            <View style={styles.iconView}>
              <Image source={require('../images/con.png')} />
            </View>
            <Text style={styles.screenNameTitle}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownOpenScreensView}>
            <View style={styles.iconView}>
              <VectorIcon
                family={'Ionicons'}
                name="settings-sharp"
                color={Colors.darkGrey}
                size={26}
              />
            </View>
            <Text style={styles.screenNameTitle}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => {
              let status = await handleLogout();
              if (status) {
                props.navigation.navigate('Login');
              }
            }}
            style={styles.logoutButton}>
            <View style={{paddingRight: 30}}>
              <VectorIcon
                family={'Ionicons'}
                name="log-out-outline"
                color={Colors.darkGrey}
                size={27}
              />
            </View>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Home2')}
            style={styles.dropdownOpenScreensView}>
            <View style={styles.iconView}>
              <VectorIcon
                family={'AntDesign'}
                name="home"
                color={Colors.darkGrey}
                size={27}
              />
            </View>
            <Text style={styles.screenNameTitle}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('LoginScreen')}
            style={styles.dropdownOpenScreensView}>
            <View style={styles.iconView}>
              <VectorIcon
                family={'SimpleLineIcons'}
                name="login"
                color={Colors.darkGrey}
                size={27}
              />
            </View>
            <Text style={styles.screenNameTitle}>Login</Text>
          </TouchableOpacity>
        </>
      )}
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
const styles = StyleSheet.create({
  drawerHeaderView: {
    paddingLeft: 34,
    flexDirection: 'row',
    marginBottom: 10,
  },
  line: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: Colors.grey,
  },
  logo: {
    width: 90,
    height: 90,
  },
  drawerHeaderTitle: {
    fontSize: 25,
    fontWeight: '600',
    color: Colors.black,
    alignSelf: 'center',
  },
  logoutButton: {
    paddingLeft: 20,
    paddingTop: 20,
    flexDirection: 'row',
  },
  logoutText: {
    alignSelf: 'center',
    fontSize: 17,
    color: Colors.darkGrey,
    fontWeight: '500',
    paddingLeft: 5,
  },
  // {}
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '90%',
    backgroundColor: Colors.white,
    borderRadius: 20,
    paddingVertical: 40,
  },
  button: {
    borderRadius: 10,
    elevation: 2,
    marginLeft: 30,
  },
  buttonClose: {
    backgroundColor: Colors.darkPrimary,
    marginRight: 35,
  },
  textStyle: {
    color: Colors.white,
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 19,
    paddingVertical: 13,
    paddingHorizontal: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '500',
    color: Colors.black,
  },
  popupButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  // screen
  dropdownOpenScreensView: {
    backgroundColor: Colors.white,
    marginHorizontal: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    flexDirection: 'row',
    marginTop: 15,
    paddingVertical: 7,
    alignItems: 'center',
    paddingLeft: 10,
  },
  iconView: {
    paddingRight: 30,
  },
  screenNameTitle: {
    fontSize: 18,
    fontWeight: '500',
    paddingLeft: 5,
    color: Colors.darkGrey,
  },
});
