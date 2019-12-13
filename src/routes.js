import React from 'react';
import PropTypes from 'prop-types';
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
import ModalSearch from './pages/ModalSearch';

const SearchTabIcon = ({ tintColor }) => (
  <Icon name="search" size={25} color={tintColor} />
);

SearchTabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

const Tabs = createStackNavigator({
  ExploreScreem: Explore,
  FindTripsScreem: FindTrips,
  ModalSearchScreem: ModalSearch,
});

Tabs.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  for (let i = 0; i < navigation.state.routes.length; i++) {
    if (navigation.state.routes[i].routeName === 'ModalSearchScreem') {
      tabBarVisible = false;
    }
  }

  return {
    tabBarVisible,
  };
};

export default createAppContainer(
  createBottomTabNavigator(
    {
      Explore: {
        screen: Tabs,
      },
      Saves,
      Trips,
      Messages,
      Profile,
    },
    {
      defaultNavigationOptions: () => ({
        tabBarIcon: SearchTabIcon,
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
