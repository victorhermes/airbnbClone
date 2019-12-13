import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import { View, Text } from 'react-native';

const MessageTabIcon = ({ tintColor }) => (
  <Icon name="message-square" size={25} color={tintColor} />
);

MessageTabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default function Messages() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Messages</Text>
    </View>
  );
}

Messages.navigationOptions = {
  tabBarLabel: 'Mensagens',
  tabBarIcon: MessageTabIcon,
};
