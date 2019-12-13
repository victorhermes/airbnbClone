import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import Logo from '~/public/airbnb.svg';

const LogoTabIcon = ({ tintColor }) => (
  <Logo width={25} height={25} fill={tintColor} />
);

LogoTabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default function Trips() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Trips</Text>
    </View>
  );
}

Trips.navigationOptions = {
  tabBarLabel: 'Viagens',
  tabBarIcon: LogoTabIcon,
};
