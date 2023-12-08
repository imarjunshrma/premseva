import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import VectorIcon from '../component/VectorIcon';
import Colors from '../Theme/Colors';

const ProfileList = (props, {navigation}) => {
  const {userDetail} = props;
  return (
    <View>
      <View style={styles.view}>
        <VectorIcon
          family={'MaterialCommunityIcons'}
          name="account-edit-outline"
          color={Colors.black}
          size={26}
          style={styles.emailLogo}
        />
        <Text style={styles.viewText}>{userDetail?.name}</Text>
      </View>
      <View style={styles.view}>
        <VectorIcon
          family={'Fontisto'}
          name="email"
          color={Colors.black}
          size={26}
          style={styles.emailLogo}
        />
        <Text style={styles.viewText}>{userDetail?.email}</Text>
      </View>
      <View style={styles.view}>
        <VectorIcon
          family={'Ionicons'}
          name="person-outline"
          color={Colors.black}
          size={26}
          style={styles.emailLogo}
        />
        <Text style={styles.viewText}>{userDetail?.emp_code}</Text>
      </View>
      <TouchableOpacity
        style={styles.view}
        onPress={() => navigation.navigate('Setting')}>
        <VectorIcon
          family={'Ionicons'}
          name="ios-lock-closed-outline"
          color={Colors.black}
          size={26}
          style={styles.emailLogo}
        />
        <Text style={styles.viewText}>Change Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileList;

const styles = StyleSheet.create({
  view: {
    width: '100%',
    backgroundColor: Colors.lightGrey,
    flexDirection: 'row',
    borderRadius: 20,
    marginVertical: Platform.OS === 'ios' ? 12 : 9,
  },
  viewText: {
    fontSize: 18,
    color: Colors.black,
    paddingVertical: Platform.OS === 'ios' ? 16 : 13,
  },
  emailLogo: {
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
});
