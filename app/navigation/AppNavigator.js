import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ListingEditScreen from '../screens/ListingEditScreen';
import NewListingButton from './NewListingButton';
import colors from '../config/colors';
import FeedNavigation from './FeedNavigation';
import AccountNavigator from './AccountNavigator.';
import routes from './routes';
import PostNavigator from './PostNavigator';

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.darkGrey},
        headerTintColor: colors.white,
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 10,
        },
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedNavigation}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostNavigator}
        options={({navigation}) => ({
          title: 'Listing Edit',
          tabBarButton: () => (
            <NewListingButton onPress={() => navigation.navigate('Post')} />
          ),
        })}
      />
      <Tab.Screen
        name="AccountNavigator"
        component={AccountNavigator}
        options={{
          title: 'Account',
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
