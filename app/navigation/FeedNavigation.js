import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TransitionPresets} from '@react-navigation/stack';

import ListingScreen from '../screens/ListingScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const Stack = createNativeStackNavigator();

function FeedNavigation(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: 'card',
      }}>
      <Stack.Screen
        name="Listitng"
        component={ListingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListingDetails"
        component={ListingDetailsScreen}
        options={{title: 'Listing Details'}}
      />
    </Stack.Navigator>
  );
}

export default FeedNavigation;
