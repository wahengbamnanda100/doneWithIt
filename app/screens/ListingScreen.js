import React from 'react';
import {FlatList, SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';

const listing = [
  {
    id: 1,
    title: 'Jang Nara',
    price: 999,
    image: require('../assets/image/card-img1.jpg'),
  },
  {
    id: 2,
    title: 'Son Ye Jin',
    price: 10000,
    image: require('../assets/image/card-img5.jpeg'),
  },
  {
    id: 3,
    title: 'song hae Jin',
    price: 10000,
    image: require('../assets/image/card-img4.webp'),
  },
  //   {
  //     id: 3,
  //     title: 'Son Ye',
  //     price: 10000,
  //     image: require('../assets/image/card-img1.jpg'),
  //   },
];

function ListingScreen({navigation, route}) {
  const listData = route.params;

  let newListData = {...listData};
  console.log('!!!! Images !!!!', newListData.images);

  let _data = {};
  _data.id = listing.length + 2;
  _data.title = newListData.title;
  _data.price = newListData.price;
  // _data.image = newListData.images;
  let updatedList = [];
  if (_data.title === undefined) {
    updatedList = [...listing];
  } else {
    updatedList = [...listing, _data];
  }

  return (
    <SafeAreaView style={styles.screen}>
      {console.log('Added post', updatedList)}
      <FlatList
        scrollEnabled
        data={updatedList}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.black,
    flex: 1,
  },
});

export default ListingScreen;
