import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { View, ScrollView } from 'react-native';
import {
  Container,
  TextInformation,
  CategoryContainer,
  CategoryImg,
  CategoryTextCont,
  CategoryText,
} from './styles';
import food from '~/public/food.jpg';

import SearchBar from '~/components/SearchBar';

export default function Explore() {
  return (
    <View>
      <SearchBar />
      <Container>
        <ScrollView>
          <TextInformation>
            O que você deseja encontrar, Victor?
          </TextInformation>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <CategoryContainer>
              <CategoryImg source={food} />
              <CategoryTextCont>
                <CategoryText>Estadias</CategoryText>
              </CategoryTextCont>
            </CategoryContainer>

            <CategoryContainer>
              <CategoryImg source={food} />
              <CategoryTextCont>
                <CategoryText>Aventuras</CategoryText>
              </CategoryTextCont>
            </CategoryContainer>

            <CategoryContainer>
              <CategoryImg source={food} />
              <CategoryTextCont>
                <CategoryText>Estadias</CategoryText>
              </CategoryTextCont>
            </CategoryContainer>
          </ScrollView>

          <TextInformation>
            Experiências com avaliações excelentes
          </TextInformation>
        </ScrollView>
      </Container>
    </View>
  );
}

Explore.navigationOptions = {
  tabBarLabel: 'Explorar',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="search" size={25} color={tintColor} />
  ),
};
