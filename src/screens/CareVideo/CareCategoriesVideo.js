import {
  ActivityIndicator,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import CustomHeader from '../../component/CustomHeader';
import Colors from '../../Theme/Colors';
import useRestAPI from '../../api/api';
import VectorIcon from '../../component/VectorIcon';
import YoutubePlayer from 'react-native-youtube-iframe';
import BottomCategories from '../../component/BottomCategories';
import BackButton from '../../component/BackButton';

const CareCategoriesVideo = ({route, navigation}) => {
  const [articles, setArticles] = useState(null);
  // const [article, setArticle] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const {deleteVideoBookmark, addVideoBookmark} = useRestAPI();
  const {getVideos} = useRestAPI();
  const {categoryId} = route.params;
  const [Videos, setVideos] = useState(null);

  useEffect(() => {
    getData();
  }, [categoryId]);
  const getData = async () => {
    let data = await getVideos(categoryId);
    console.log(data);
    setVideos(data?.articles);
  };

  let category = [
    {
      name: 'Health',
      icon: process.env.PUBLIC_URL + '/images/categories/health.svg',
      vicon: '#B19DE5',
      bg: '#F1ECFF',
      id: '11',
    },
    {
      name: 'Equipment',
      icon: process.env.PUBLIC_URL + '/images/categories/equ.svg',
      vicon: '#F88B6F',
      bg: '#FFF3EC',
      id: '12',
    },
    {
      name: 'Environment',
      icon: process.env.PUBLIC_URL + '/images/categories/env.svg',
      vicon: '#4FD490',
      bg: '#ECFFF0',
      id: '13',
    },
    {
      name: 'Social needs',
      icon: process.env.PUBLIC_URL + '/images/categories/social.svg',
      vicon: '#F9C26F',
      bg: '#FFFDEC',
      id: '14',
    },
    {
      name: 'Miscellaneous',
      icon: process.env.PUBLIC_URL + '/images/categories/miscellaneous.svg',
      vicon: '#8B8279',
      bg: '#FFF4EC',
      id: '16',
    },
  ];

  let title = category.find(item => item.id == String(categoryId));

  const containerStyle = useMemo(() => {
    return {...styles.container, backgroundColor: title.bg};
  }, [title.bg]);
  return (
    <>
      <StatusBar barStyle="default" />
      <CustomHeader
        title="PREM SEVA"
        subTitle="Supporting your caregiving"
        logo="ios-menu-outline"
        drawerOnPress={() => navigation.openDrawer('BottomStack')}
      />
      <View style={containerStyle}>
        <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
          <View style={styles.secContainer}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <BackButton backPress={() => navigation.goBack(' ')} />
              <Text style={styles.headerText}>Care Videos - {title?.name}</Text>
            </View>
            {!Videos ? (
              <ActivityIndicator size="large" color={Colors.black} />
            ) : (
              Videos?.map((category, index) => (
                <View
                  style={styles.container}
                  key={index}
                  onPress={() => {
                    alert('SDJFHK');
                  }}>
                  <View
                    style={{
                      marginVertical: 15,
                      backgroundColor: Colors.white,
                      borderWidth: 1,
                      borderColor: '#00000050',
                      borderRadius: 4,
                    }}>
                    <YoutubePlayer
                      height={220}
                      play={false}
                      videoId={category?.video?.split('/')[4].split('?')[0]}
                      webViewStyle={{
                        opacity: 0.99,
                      }}
                      // onError={e => console.log(e, '########*************')}
                      // style={styles.docImage}
                    />
                    <View style={styles.contentMainView}>
                      <View style={styles.content}>
                        <Image
                          style={styles.image}
                          source={require('../../images/logo.png')}
                        />
                        <View>
                          <Text style={styles.title}>
                            {category.subcategory}
                          </Text>
                          <Text style={styles.description}>
                            {category.c_description?.substring(0, 30) + '...'}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.iconView}>
                        {category?.is_bookmarked ? (
                          <VectorIcon
                            family="FontAwesome"
                            name="bookmark"
                            color={Colors.darkGrey}
                            size={28}
                            onPress={() => {
                              setLoading(true);
                              deleteVideoBookmark(category.aid)
                                .then(() => {
                                  setVideos(prevVideos => {
                                    const updatedVideos = [...prevVideos];
                                    updatedVideos[index] = {
                                      ...updatedVideos[index],
                                      is_bookmarked: 0,
                                    };
                                    return updatedVideos;
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
                              addVideoBookmark(category.aid)
                                .then(() => {
                                  setVideos(prevVideos => {
                                    const updatedVideos = [...prevVideos];
                                    updatedVideos[index] = {
                                      ...updatedVideos[index],
                                      is_bookmarked: 1,
                                    };
                                    return updatedVideos;
                                  });
                                  setLoading(false);
                                })
                                .catch(() => {
                                  setLoading(false);
                                });
                            }}
                          />
                        )}
                        {/* <Text style={styles.bookmarkText}>Bookmark</Text> */}
                      </View>
                    </View>
                  </View>
                </View>
              ))
            )}
          </View>
          <BottomCategories
            categoryId={categoryId}
            navigation={navigation}
            isVideo={true}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default CareCategoriesVideo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  secContainer: {
    marginHorizontal: 20,
  },
  bookmarkText: {
    color: Colors.black,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
    color: Colors.black,
  },
  iconView: {
    paddingHorizontal: 20,
  },
  docImage: {
    width: 350,
    height: 200,
    alignSelf: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  docImageBottomView: {
    width: 350,
    backgroundColor: Colors.lightPrimary,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 20,
  },
  docImageBottomTitle: {
    color: Colors.darkPrimary,
    fontSize: 21,
  },
  docImageBottomSubTitle: {
    color: Colors.darkPrimary,
    fontSize: 17,
    paddingTop: 4,
  },
  description: {
    color: Colors.darkGrey,
  },
  //
  contentMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  image: {
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  title: {
    color: Colors.black,
    fontSize: 16,
  },
});
