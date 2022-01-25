import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';
import {ListItem} from '../components/list';

function ListingDetailsScreen({route}) {
  const listing = route.params;

  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailComponent}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/image/list-img.jpg')}
            title="Nandakumar Singh"
            subTitle="5 views"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailComponent: {
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: '500',
    color: colors.white,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.secondary,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
