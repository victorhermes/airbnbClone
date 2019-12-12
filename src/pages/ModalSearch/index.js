import React from 'react';
import { View, Text } from 'react-native';

export default function ModalSearch() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ModalSearch</Text>
    </View>
  );
}

ModalSearch.navigationOptions = {
  header: null,
};
