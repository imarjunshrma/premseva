import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import CustomHeader from '../../component/CustomHeader';
import Colors from '../../Theme/Colors';
import SheetCategories from '../../component/SheetCategories';

const CareVideoScreen = ({navigation}) => {
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
        <Text style={styles.haderText}>Care Videos categories</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
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
                navigation.navigate('CareCategoriesVideo', {
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

export default CareVideoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },
  haderText: {
    fontSize: 22,
    color: Colors.black,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 10,
  },
});
