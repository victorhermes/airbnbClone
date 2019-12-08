import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { View, Text } from 'react-native';

export default function Messages() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Messages</Text>
    </View>
  );
}

Messages.navigationOptions = {
  tabBarLabel: 'Mensagens',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="message-square" size={25} color={tintColor} />
  ),
};
