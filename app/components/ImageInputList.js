import React, {useRef} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({imageUri = [], onRemoveImage, onAddImage}) {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}>
        <View style={styles.container}>
          {imageUri.map(uri => (
            <ImageInput
              imageUri={uri}
              key={uri}
              onChangeImage={() => onRemoveImage(uri)}
            />
          ))}
          <ImageInput onChangeImage={uri => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default ImageInputList;
