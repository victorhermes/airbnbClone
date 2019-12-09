import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, InputContainer, TInput } from './styles';

export default function SearchBar() {
  return (
    <Container>
      <InputContainer>
        <Icon name="search" size={25} color="#5c5c5c" />
        <TInput placeholder="Pesquisar algo" />
      </InputContainer>
    </Container>
  );
}
