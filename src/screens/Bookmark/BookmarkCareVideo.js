import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import CustomHeader from '../../component/CustomHeader';
import Colors from '../../Theme/Colors';
import SheetCategories from '../../component/SheetCategories';
import BackButton from '../../component/BackButton';

const BookmarkCareVideo = ({navigation}) => {
  let category = [
    {
      name: 'Health',
      icon: require('../../images/hartonhand.png'),
      vicon: '#B19DE5',
      bg: '#F1ECFF',
      id: '11',
    },
    {
      name: 'Equipment',
      icon: require('../../images/bed.png'),
      vicon: '#F88B6F',
      bg: '#FFF3EC',
      id: '12',
    },
    {
      name: 'Environment',
      icon: require('../../images/persioninhome.png'),
      vicon: '#4FD490',
      bg: '#ECFFF0',
      id: '13',
    },
    {
      name: 'Social needs',
      icon: require('../../images/threepeople.png'),
      vicon: '#F9C26F',
      bg: '#FFFDEC',
      id: '14',
    },
    {
      name: 'Miscellaneous',
      icon: require('../../images/qr.png'),
      vicon: '#8B8279',
      bg: '#FFF4EC',
      id: '16',
    },
  ];
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <BackButton backPress={() => navigation.goBack('')} />
          <Text style={styles.headerText}>Back</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
          {category.map((category, index) => (
            <SheetCategories
              key={index}
              image={category.icon}
              title={category.name}
              iconFamily="AntDesign"
              iconName="playcircleo"
              iconSize={30}
              iconColor={category.vicon}
              careSheetPress={() =>
                navigation.navigate('BookmarkCategoriesVideo', {
                  categoryId: category.id,
                })
              }
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default BookmarkCareVideo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
    // paddingTop: 20,
    // paddingBottom: 30,
    color: Colors.black,
  },
});
