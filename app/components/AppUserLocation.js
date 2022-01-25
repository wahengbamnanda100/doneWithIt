import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../config/colors';

import useLocation from '../hooks/useLocation';

function AppUserLocation(props) {
  const locationData = useLocation();
  return (
    <View style={styles.container}>
      <Text>hello</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log(locationData)}>
        <Text>touch here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
  },
});

export default AppUserLocation;
