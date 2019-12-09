import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { SafeAreaView, View, ScrollView, Text } from 'react-native';
import {
  Container,
  TextInformation,
  TextDescription,
  CategoryContainer,
  CategoryImg,
  CategoryTextCont,
  CategoryText,
  CardsContainer,
  CardsImg,
  CardsText,
} from './styles';
import food from '~/public/food.jpg';

import SearchBar from '~/components/SearchBar';

export default function Explore() {
  return (
    <>
      <SearchBar />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Container>
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
            <TextDescription>
              Reserve atividades guiadas por anfitriões locais em sua próxima
              viagem
            </TextDescription>

            <CardsContainer>
              <CardsImg source={food} />
              <CardsText>Trufas - caçada e degustação</CardsText>
            </CardsContainer>
          </Container>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

Explore.navigationOptions = {
  tabBarLabel: 'Explorar',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="search" size={25} color={tintColor} />
  ),
};
