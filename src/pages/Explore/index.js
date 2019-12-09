import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { SafeAreaView, View, ScrollView, Text } from 'react-native';
import {
  Container,
  TextTop,
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
          <TextTop>O que você deseja encontrar, Victor?</TextTop>

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
