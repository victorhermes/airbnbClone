import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native';
import {
  Container,
  RecentSearches,
  Places,
  IconPlaces,
  NamePlaces,
} from './styles';
import Input from '~/components/Input';

export default function ModalSearch({ navigation }) {
  return (
    <>
      <Input navigation={navigation} />
      <ScrollView>
        <Container>
          <RecentSearches>Buscas Recentes</RecentSearches>
          <Places>
            <IconPlaces>
              <Icon name="md-time" size={25} color="#000" />
            </IconPlaces>
            <NamePlaces>Penha, Santa Catarina</NamePlaces>
          </Places>
          <Places>
            <IconPlaces>
              <Icon name="md-time" size={25} color="#000" />
            </IconPlaces>
            <NamePlaces>Piçarras, Santa Catarina</NamePlaces>
          </Places>
          <Places>
            <IconPlaces>
              <Icon name="md-time" size={25} color="#000" />
            </IconPlaces>
            <NamePlaces>São Paulo, São Paulo</NamePlaces>
          </Places>
          <Places>
            <IconPlaces>
              <Icon name="md-time" size={25} color="#000" />
            </IconPlaces>
            <NamePlaces>Navegantes, Santa Catarina</NamePlaces>
          </Places>
          <Places>
            <IconPlaces>
              <Icon name="md-time" size={25} color="#000" />
            </IconPlaces>
            <NamePlaces>Barra Velha, Santa Catarina</NamePlaces>
          </Places>
          <Places>
            <IconPlaces>
              <Icon name="md-time" size={25} color="#000" />
            </IconPlaces>
            <NamePlaces>BC, Santa Catarina</NamePlaces>
          </Places>
          <Places>
            <IconPlaces>
              <Icon name="md-time" size={25} color="#000" />
            </IconPlaces>
            <NamePlaces>Santa Catarina</NamePlaces>
          </Places>
          <Places>
            <IconPlaces>
              <Icon name="md-time" size={25} color="#000" />
            </IconPlaces>
            <NamePlaces>Vila Água Funda</NamePlaces>
          </Places>
          <Places>
            <IconPlaces>
              <Icon name="md-time" size={25} color="#000" />
            </IconPlaces>
            <NamePlaces>Rio de Janeiro</NamePlaces>
          </Places>
        </Container>
      </ScrollView>
    </>
  );
}

ModalSearch.navigationOptions = {
  header: null,
};

ModalSearch.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
