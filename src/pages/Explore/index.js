import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { View } from 'react-native';

import SearchBar from '~/components/SearchBar';

export default function Explore() {
  return (
    <View>
      <SearchBar />
    </View>
  );
}

Explore.navigationOptions = {
  tabBarLabel: 'Explorar',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="search" size={25} color={tintColor} />
  ),
};
