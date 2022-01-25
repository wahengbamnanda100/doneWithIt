import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

import AppButton from '../components/AppButton';
import colors from '../config/colors';
import routes from '../navigation/routes';

function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require('../assets/image/background.jpg')}>
      <View style={styles.logoCntainer}>
        <Image
          style={styles.logo}
          source={require('../assets/image/logo-red.png')}
        />
        <Text style={styles.tagLine}>Sell What You Don't Want</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title="register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  logo: {
    width: 100,
    height: 100,
  },

  logoCntainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },

  buttonContainer: {
    padding: 20,
    width: '100%',
  },

  tagLine: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
    color: colors.black,
  },
});

export default WelcomeScreen;
