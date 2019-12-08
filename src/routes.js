import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Explore from './pages/Explore';
import Trips from './pages/Trips';
import Saves from './pages/Saves';

export default createAppContainer(
  createSwitchNavigator({
    App: createBottomTabNavigator(
      {
        Explore,
        Saves,
        Trips,
      },
      {
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
    ),
  })
);
