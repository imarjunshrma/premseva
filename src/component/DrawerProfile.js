import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import VectorIcon from './VectorIcon';
import Colors from '../Theme/Colors';

const DrawerProfile = props => {
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.container}>
      <View>
        {!open ? (
          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={styles.profileDropDownMainView}>
            <VectorIcon
              family={'FontAwesome5'}
              name="user-friends"
              color={Colors.darkGrey}
              size={23}
            />
            <View style={styles.bookmarkView}>
              <Text style={styles.bookmarkTitle}>Profile</Text>
              <VectorIcon
                family={'Entypo'}
                name="chevron-small-right"
                color={Colors.darkGrey}
                size={28}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
        ) : (
          <View>
            <View style={styles.profileDropDownMainView}>
              <VectorIcon
                family={'FontAwesome5'}
                name="user-friends"
                color={Colors.darkGrey}
                size={23}
              />
              <TouchableOpacity
                style={styles.bookmarkView}
                onPress={() => setOpen(false)}>
                <Text style={styles.bookmarkTitle}>Profile</Text>
                <VectorIcon
                  family={'Entypo'}
                  name="chevron-small-down"
                  color={Colors.darkGrey}
                  size={28}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={props.pressGiver}
              style={styles.dropdownOpenScreensView}>
              <View style={styles.iconView}>
                <VectorIcon
                  family={'AntDesign'}
                  name="idcard"
                  color={Colors.darkGrey}
                  size={27}
                />
              </View>
              <Text style={styles.screenNameTitle}>Caregiver</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={props.pressRecevier}
              style={styles.dropdownOpenScreensView}>
              <View style={styles.iconView}>
                {/* <VectorIcon
                  family={'Ionicons'}
                  name="ios-person-circle-outline"
                  color={Colors.darkGrey}
                  size={28}
                /> */}
                <Image source={require('../images/rounduser.png')} />
              </View>
              <Text style={styles.screenNameTitle}>Care Recevier</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownOpenScreensView}>
              <View style={styles.iconView}>
                {/* <VectorIcon
                  family={'Ionicons'}
                  name="ios-person-circle-outline"
                  color={Colors.darkGrey}
                  size={28}
                /> */}
                <Image source={require('../images/sus.png')} />
              </View>
              <Text style={styles.screenNameTitle}>Subscription</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default DrawerProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  bookmarkView: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    paddingLeft: 32,
    flex: 1,
    justifyContent: 'space-between',
  },
  bookmarkTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.darkGrey,
  },
  profileDropDownMainView: {
    flexDirection: 'row',
    marginTop: 25,
    marginLeft: 20,
  },
  icon: {
    marginRight: 20,
  },
  // disActive style

  // active style
  dropdownOpenScreensView: {
    backgroundColor: Colors.white,
    marginHorizontal: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    flexDirection: 'row',
    marginTop: 10,
    paddingVertical: 7,
    alignItems: 'center',
    paddingLeft: 30,
  },
  screenNameTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.darkGrey,
  },
  iconView: {
    paddingRight: 30,
  },
});
