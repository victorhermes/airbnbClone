import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { View, Text } from 'react-native';

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
    <Icon name="paper-plane" size={25} color={tintColor} />
  ),
};
