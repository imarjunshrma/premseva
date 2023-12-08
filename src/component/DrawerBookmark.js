import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import VectorIcon from './VectorIcon';
import Colors from '../Theme/Colors';

const DrawerBookmark = props => {
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.container}>
      <View>
        {!open ? (
          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={styles.profileDropDownMainView}>
            <Image source={require('../images/bookmark.png')} />
            <View style={styles.bookmarkView}>
              <Text style={styles.bookmarkTitle}>Bookmark</Text>
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
              <Image source={require('../images/bookmark.png')} />
              <TouchableOpacity
                style={styles.bookmarkView}
                onPress={() => setOpen(false)}>
                <Text style={styles.bookmarkTitle}>Bookmark</Text>
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
              onPress={props.pressSheet}
              style={styles.dropdownOpenScreensView}>
              <View style={styles.iconView}>
                {/* <VectorIcon
                  family={'MaterialCommunityIcons'}
                  name="hand-heart-outline"
                  color={Colors.darkGrey}
                  size={27}
                /> */}
                <Image source={require('../images/hand.png')} />
              </View>
              <Text style={styles.screenNameTitle}>Care Sheets</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={props.pressVideo}
              style={styles.dropdownOpenScreensView}>
              <View style={styles.iconView}>
                <VectorIcon
                  family={'Ionicons'}
                  name="play-outline"
                  color={Colors.darkGrey}
                  size={27}
                />
              </View>
              <Text style={styles.screenNameTitle}>Care Videos</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default DrawerBookmark;

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
