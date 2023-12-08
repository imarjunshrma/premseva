import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../Theme/Colors';

const CustomHeader = props => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.secContainer}>
        <View style={styles.headerTtleView}>
          <View style={styles.headerNameMainView}>
            <Image
              source={require('../images/logo.png')}
              style={styles.headerLogo}
            />
            <View style={styles.textView}>
              <Text style={styles.text}>{props.title}</Text>
              <Text style={styles.subTitle}>{props.subTitle}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={props.drawerOnPress} style={styles.icon}>
            <Ionicons name={props.logo} size={33} color={Colors.darkPrimary} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  mainContainer: {},
  container: {
    backgroundColor: Colors.primary,
  },
  secContainer: {
    marginHorizontal: 20,
    marginTop: Platform.OS === 'ios' ? 50 : 20,
  },
  icon: {
    paddingTop: 5,
  },
  headerTtleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLogo: {
    width: 90,
    height: 90,
  },
  textView: {
    alignSelf: 'center',
  },
  text: {
    color: Colors.darkPrimary,
    fontSize: 27,
    paddingBottom: 5,
    fontWeight: '600',
  },
  subTitle: {
    color: Colors.darkPrimary,
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: Platform.OS === 'ios' ? 15 : 12,
  },
  headerNameMainView: {
    flexDirection: 'row',
  },
});
