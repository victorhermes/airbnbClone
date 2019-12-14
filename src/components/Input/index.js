import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  ContainerSearch,
  InputContainer,
  TInput,
  CancelButton,
} from './styles';

export default function Input({ navigation }) {
  return (
    <ContainerSearch>
      <InputContainer>
        <TInput
          returnKeyType="send"
          onSubmitEditing={() => {}}
          autoFocus
          autoCorrect
          placeholder="Para onde?"
        />
        <TouchableOpacity onPress={() => navigation.navigate('ExploreScreem')}>
          <CancelButton>Cancelar</CancelButton>
        </TouchableOpacity>
      </InputContainer>
    </ContainerSearch>
  );
}
