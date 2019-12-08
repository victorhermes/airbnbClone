import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { View, Text } from 'react-native';

export default function Profile() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile</Text>
    </View>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="user" size={25} color={tintColor} />
  ),
};
