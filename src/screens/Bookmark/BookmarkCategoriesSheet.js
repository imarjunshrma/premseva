import {
  ActivityIndicator,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeader from '../../component/CustomHeader';
import Colors from '../../Theme/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import VectorIcon from '../../component/VectorIcon';
import useRestAPI from '../../api/api';
import {API_ROUTE} from '../../network/config/config';
import BackButton from '../../component/BackButton';
import BookmarkBottomCategories from '../../component/BookmarkBottomCategories';

const BookmarkCategoriesSheet = ({route, navigation}) => {
  const [articles, setArticles] = useState(null);
  const {getCategories, getBookmarks} = useRestAPI();
  const {categoryId} = route.params;

  useEffect(() => {
    getData();
  }, [categoryId]);
  const getData = async () => {
    let data = await getBookmarks(categoryId);
    console.log(data);
    setArticles(data?.articles);
  };
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
            marginHorizontal: 20,
          }}>
          <BackButton backPress={() => navigation.goBack(' ')} />
          <Text style={styles.headerText}>Back</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.secContainer}>
            {!articles && (
              <ActivityIndicator size="large" color={Colors.black} />
            )}
            {articles?.map((article, index) => (
              <TouchableOpacity
                key={index}
                style={styles.cardMainView}
                onPress={() =>
                  navigation.navigate('AboutCareSheet', {
                    articleId: article.aid,
                  })
                }>
                <Image
                  source={{
                    uri: `http://54.177.16.157/admin/article-images/${article?.image}`,
                  }}
                  style={{width: '37%', height: 90}}
                />
                <View style={styles.textView}>
                  <View>
                    <Text style={styles.text}>{article.chapter_name}</Text>
                    <Text style={styles.dateText}>
                      Published date: {article.published_date}
                    </Text>
                    <Text style={styles.cardBottomhealthCareText}>
                      {article.category}
                    </Text>
                  </View>
                  <VectorIcon
                    family="Entypo"
                    name="chevron-small-right"
                    color={Colors.darkGrey}
                    size={28}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <BookmarkBottomCategories
            categoryId={categoryId}
            navigation={navigation}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default BookmarkCategoriesSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightEllipse,
  },
  secContainer: {
    marginHorizontal: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
    paddingTop: 20,
    color: Colors.black,
    marginBottom: 20,
  },
  cardMainView: {
    flexDirection: 'row',
    elevation: 5,
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.1,
    shadowRadius: 7,
    marginVertical: 14,
  },
  viewTitle: {
    fontSize: 16,
    alignSelf: 'center',
    color: Colors.black,
  },
  rightIconView: {
    flexDirection: 'row',
  },
  cardBottomhealthCareText: {
    color: Colors.ellipse,
  },
  dateText: {
    paddingVertical: 7,
    color: Colors.black,
  },
  textView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    flexDirection: 'row',
    backgroundColor: Colors.white,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.black,
  },
  bottomHeaderText: {
    fontSize: 22,
    fontWeight: '500',
    paddingTop: 20,
    color: Colors.black,
  },

  bottomContainer: {
    backgroundColor: Colors.white,
    // flex: 0.5,
    paddingHorizontal: 20,
    paddingBottom: 30,
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
  },
  bottomRoundImageMainView: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginTop: 20,
  },
  bottomRoundImageView: {
    paddingHorizontal: 25,
  },
});
