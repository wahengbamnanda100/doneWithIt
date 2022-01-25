import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TransitionPresets} from '@react-navigation/stack';

import ListingEditScreen from '../screens/ListingEditScreen';
import ListingScreen from '../screens/ListingScreen';

const Stack = createNativeStackNavigator();

function PostNavigator(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: 'card',
      }}>
      <Stack.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Listing"
        component={ListingScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default PostNavigator;
