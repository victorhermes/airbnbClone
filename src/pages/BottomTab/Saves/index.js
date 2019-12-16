import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from 'react-native';
import {
  Container,
  SavesContainer,
  SavesText,
  SavesImg,
  Description,
} from './styles';

import aventura from '~/public/aventura.jpg';
import food from '~/public/food.jpg';

const HeartTabIcon = ({ tintColor }) => (
  <Icon name="hearto" size={25} color={tintColor} />
);

HeartTabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default function Saves() {
  return (
    <SafeAreaView>
      <Container showsVerticalScrollIndicator={false}>
        <SavesText>Salvos</SavesText>
        <SavesContainer>
          <SavesImg source={aventura} />
          <Description>Penha, Santa Catarina</Description>
        </SavesContainer>

        <SavesContainer>
          <SavesImg source={food} />
          <Description>Santos, São Paulo</Description>
        </SavesContainer>

        <SavesContainer>
          <SavesImg source={aventura} />
          <Description>Navegantes, Santa Catarina</Description>
        </SavesContainer>
      </Container>
    </SafeAreaView>
  );
}

Saves.navigationOptions = {
  tabBarLabel: 'Salvos',
  tabBarIcon: HeartTabIcon,
};
