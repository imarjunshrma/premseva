import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../Theme/Colors';

const BottomCategories = ({categoryId, isVideo = false, navigation}) => {
  let otherCategory = [
    {
      name: 'Health',
      icon: require('../images/hartonhand.png'),
      id: 'healthcare',
      categoryId: 11,
    },
    {
      name: 'Equipment',
      icon: require('../images/bed.png'),
      id: 'equipment',
      categoryId: 12,
    },
    {
      name: 'Environment',
      icon: require('../images/persioninhome.png'),
      id: 'environment',
      categoryId: 13,
    },
    {
      name: 'Social',
      icon: require('../images/threepeople.png'),
      vicon: '',
      id: 'social needs',
      categoryId: 14,
    },
    {
      name: 'Miscellaneous',
      icon: require('../images/qr.png'),
      vicon: '',
      id: 'miscellaneous',
      categoryId: 16,
    },
  ];

  return (
    <View style={styles.bottomContainer}>
      <Text style={styles.bottomHeaderText}>Other categories</Text>
      <View style={styles.bottomRoundImageMainView}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {otherCategory.map((category, index) => (
            <>
              {categoryId != category.categoryId && (
                <TouchableOpacity
                  style={styles.bottomRoundImageView}
                  key={index}
                  onPress={() => {
                    navigation.navigate(
                      isVideo ? 'CareCategoriesVideo' : 'CareCategoriesSheet',
                      {
                        categoryId: category.categoryId,
                      },
                    );
                  }}>
                  <Image source={category.icon} style={styles.image} />
                  <Text style={styles.imageBottomText}>{category.name}</Text>
                </TouchableOpacity>
              )}
            </>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default BottomCategories;

const styles = StyleSheet.create({
  bottomContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingBottom: 30,
    marginTop: 20,
  },
  bottomHeaderText: {
    fontSize: 22,
    fontWeight: '500',
    paddingTop: 20,
    color: Colors.black,
  },
  image: {
    borderRadius: 50,
    alignSelf: 'center',
  },
  imageBottomText: {
    fontSize: 16,
    fontWeight: '500',
    paddingTop: 5,
    color: Colors.black,
    textAlign: 'center',
  },
  bottomRoundImageMainView: {
    flexDirection: 'row',
    marginTop: 20,
  },
  bottomRoundImageView: {
    paddingHorizontal: 25,
  },
});
