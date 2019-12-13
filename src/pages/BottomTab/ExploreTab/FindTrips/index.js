import React from 'react';
import { View, Text } from 'react-native';

export default function FindTrips() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>FindTrips</Text>
    </View>
  );
}

FindTrips.navigationOptions = {
  title: 'Encontre algo',
};
