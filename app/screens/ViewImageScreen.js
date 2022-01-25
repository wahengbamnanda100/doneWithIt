import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import colors from '../config/colors';

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <FontAwesome5 name={'times'} color="white" size={30} />
      </View>
      <View style={styles.deleteIcon}>
        <FontAwesome5 name={'trash-alt'} color="white" size={30} />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/image/chair.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 20,
    left: 30,
  },
  deleteIcon: {
    position: 'absolute',
    top: 20,
    right: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },

  image: {
    width: '100%',
    height: '100%',
  },
});

export default ViewImageScreen;
