import React from 'react';
import PropTypes from 'prop-types';
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

Input.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
