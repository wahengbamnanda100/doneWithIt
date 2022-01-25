import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../../config/colors';
import AppText from '../AppText';

function ListItem({
  image,
  title,
  IconComponent,
  subTitle,
  onPress,
  renderRightAction,
}) {
  return (
    <Swipeable renderRightActions={renderRightAction}>
      <TouchableHighlight underlayColor={colors.darkGrey} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: '400',
    color: colors.white,
  },
  subTitle: {
    color: colors.medium,
  },
  detailsContainer: {
    paddingHorizontal: 10,
    marginLeft: 5,
    justifyContent: 'center',
  },
});

export default ListItem;
