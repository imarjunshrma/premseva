import {
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../../Theme/Colors';
import CustomHeader from '../../component/CustomHeader';
import BackButton from '../../component/BackButton';
import useRestAPI from '../../api/api';
import RenderHTML from 'react-native-render-html';
import VectorIcon from '../../component/VectorIcon';

const AboutCareSheet = ({route, navigation}) => {
  const {articleId} = route.params;
  const {getArticle, deleteBookmark, addBookmark} = useRestAPI();
  const [article, setArticle] = useState(null);
  const [isLoading, setLoading] = useState(false);
  console.log(articleId);

  useEffect(() => {
    getData();
  }, [articleId]);
  const getData = async () => {
    setLoading(true);
    let data = await getArticle(articleId);
    console.log(data[0], '#########################');
    setArticle(data[0]);
    setLoading(false);
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
        <ImageBackground
          source={{
            uri: `http://54.177.16.157/admin/article-images/${article?.image}`,
          }}
          resizeMode="cover"
          style={styles.backgroundImage}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <BackButton backPress={() => navigation.goBack('')} />
            <Text style={styles.headerText}>Back</Text>
          </View>
        </ImageBackground>
        <View style={styles.iconView}>
          {article?.is_bookmarked ? (
            <VectorIcon
              family="FontAwesome"
              name="bookmark"
              color={Colors.darkGrey}
              size={28}
              onPress={() => {
                setLoading(true);
                deleteBookmark(articleId)
                  .then(() => {
                    setArticle({
                      ...article,
                      is_bookmarked: false,
                    });
                    setLoading(false);
                  })
                  .catch(() => {
                    setLoading(false);
                  });
              }}
            />
          ) : (
            <VectorIcon
              family="FontAwesome"
              name="bookmark-o"
              color={Colors.darkGrey}
              size={28}
              onPress={() => {
                setLoading(true);
                addBookmark(articleId)
                  .then(() => {
                    setArticle({
                      ...article,
                      is_bookmarked: true,
                    });
                    setLoading(false);
                  })
                  .catch(() => {
                    setLoading(false);
                  });
              }}
            />
          )}
          <Text style={styles.bookmarkText}>Bookmark</Text>
        </View>
        <View style={styles.paragraph}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {!article && (
              <ActivityIndicator
                size="large"
                color={Colors.black}
                style={{paddingTop: 40}}
              />
            )}
            {article?.content ? (
              <RenderHTML
                source={{html: article?.content}}
                tagsStyles={{p: {color: '#000000'}}}
              />
            ) : null}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default AboutCareSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerText: {
    fontSize: 13,
    // fontWeight:'bold'
    color: Colors.black,
  },
  text: {
    fontSize: 30,
    fontWeight: '500',
    color: Colors.black,
  },
  backgroundImage: {
    height: 200,
    paddingHorizontal: 20,
  },
  iconView: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    paddingVertical: 20,
    flexDirection: 'row',
    display: 'flex',
    gap: 5,
    paddingHorizontal: 20,
  },
  paragraph: {
    paddingHorizontal: 20,
    marginBottom: 300,
  },
  bookmarkText: {
    color: Colors.black,
  },
});
