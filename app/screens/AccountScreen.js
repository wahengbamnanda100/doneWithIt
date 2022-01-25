import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import Icon from '../components/Icon';
import {ListItem, LIstItemSeparator} from '../components/list';
import colors from '../config/colors';

const menuItem = [
  {
    title: 'My Listings',
    icons: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My email',
    icons: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
    targetScreen: 'Messages',
  },
];

function AccountScreen({navigation}) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Nandakumar"
          subTitle="nandakumar@gmail.com"
          image={require('../assets/image/card-img1.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItem}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={LIstItemSeparator}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icons.name}
                  backgroundColor={item.icons.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <View>
        <ListItem
          title="Log Out"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.darkGrey,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
