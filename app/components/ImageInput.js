import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'react-native-image-picker';
import colors from '../config/colors';

function ImageInput({imageUri, onChangeImage}) {
  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert('Delete', 'Are you sure you want to delete thid iamge?', [
        {text: 'Yes', onPress: () => onChangeImage(null)},
        {text: 'No'},
      ]);
  };

  const selectImage = () => {
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      mediaType: 'photo',
      quality: 0.5,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
        Alert.alert('You did not select any image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = response.assets[0].uri;
        console.log('image source', source);
        onChangeImage(source);
      }
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera-plus-outline"
            size={50}
            color="#ccc"
            style={styles.icon}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.darkGrey,
    borderRadius: 15,
    height: 100,
    marginLeft: 10,
    marginTop: 10,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 100,
  },
  icon: {padding: 10},
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageInput;
