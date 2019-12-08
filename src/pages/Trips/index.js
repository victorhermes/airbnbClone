import React from 'react';

import { View, Text } from 'react-native';

import Logo from '~/public/airbnb.svg';

export default function Trips() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Trips</Text>
    </View>
  );
}

Trips.navigationOptions = {
  tabBarLabel: 'Viagens',
  tabBarIcon: ({ tintColor }) => (
    <Logo width={25} height={25} fill={tintColor} />
  ),
};
