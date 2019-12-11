import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Explore from './pages/Explore';
import Trips from './pages/Trips';
import Saves from './pages/Saves';
import Messages from './pages/Messages';
import Profile from './pages/Profile';

import FindTrips from './pages/FindTrips';

const SettingsStack = createStackNavigator({
  Explore: { screen: Explore },
  Ftrips: { screen: FindTrips },
});

export default createAppContainer(
  createBottomTabNavigator(
    {
      Explore: { screen: SettingsStack },
      Saves,
      Trips,
      Messages,
      Profile,
    },
    {
      defaultNavigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="search" size={25} color={tintColor} />;
        },
        tabBarLabel: 'Explorar',
      }),
      tabBarOptions: {
        activeTintColor: '#FF5A5F',
        labelStyle: {
          fontSize: 10,
          fontWeight: 'bold',
          textTransform: 'uppercase',
        },
        style: {
          height: 50,
          margin: 5,
          paddingTop: 5,
        },
      },
    }
  )
);
