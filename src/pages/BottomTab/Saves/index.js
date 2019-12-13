import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/AntDesign';
import { View, Text } from 'react-native';

const HeartTabIcon = ({ tintColor }) => (
  <Icon name="hearto" size={25} color={tintColor} />
);

HeartTabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default function Saves() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Saves</Text>
    </View>
  );
}

Saves.navigationOptions = {
  tabBarLabel: 'Salvos',
  tabBarIcon: HeartTabIcon,
};
