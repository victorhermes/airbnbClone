import React from 'react';
import { View, Text } from 'react-native';

import Input from '~/components/Input';

export default function ModalSearch({ navigation }) {
  return (
    <>
      <Input navigation={navigation} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ModalSearch</Text>
      </View>
    </>
  );
}

ModalSearch.navigationOptions = {
  header: null,
};
