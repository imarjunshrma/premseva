import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import CustomHeader from '../../component/CustomHeader';
import Colors from '../../Theme/Colors';
import SheetCategories from '../../component/SheetCategories';

const CareSheetsScreen = ({navigation}) => {
  let category = [
    {
      name: 'Health',
      icon: require('../../images/hartonhand.png'),
      id: 'healthcare',
      categoryId: '11',
    },
    {
      name: 'Equipment',
      icon: require('../../images/bed.png'),
      id: 'equipment',
      categoryId: '12',
    },
    {
      name: 'Environment',
      icon: require('../../images/persioninhome.png'),
      id: 'environment',
      categoryId: '13',
    },
    {
      name: 'Social needs',
      icon: require('../../images/threepeople.png'),
      vicon: '',
      id: 'social needs',
      categoryId: '14',
    },
    {
      name: 'Miscellaneous',
      icon: require('../../images/qr.png'),
      vicon: '',
      id: 'miscellaneous',
      categoryId: '16',
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
        <Text style={styles.haderText}>Care sheet categories</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {category.map((category, index) => (
            <SheetCategories
              key={index}
              image={category.icon}
              title={category.name}
              iconFamily="Entypo"
              iconName="chevron-small-right"
              iconSize={28}
              iconColor={Colors.darkGrey}
              careSheetPress={() =>
                navigation.navigate('CareCategoriesSheet', {
                  categoryId: category.categoryId,
                })
              }
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default CareSheetsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },
  haderText: {
    fontSize: 22,
    color: Colors.black,
    marginTop: 15,
    fontWeight: '600',
    marginBottom: 10,
  },
});
