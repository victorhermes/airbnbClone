import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { View, Text } from 'react-native';

export default function Saves() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>User</Text>
    </View>
  );
}

Saves.navigationOptions = {
  tabBarLabel: 'Salvos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="hearto" size={25} color={tintColor} />
  ),
};
