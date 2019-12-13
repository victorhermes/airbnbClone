import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { View, Text } from 'react-native';

const UserTabIcon = ({ tintColor }) => (
  <Icon name="user" size={25} color={tintColor} />
);

UserTabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default function Profile() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile</Text>
    </View>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: UserTabIcon,
};
