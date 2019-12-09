import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { View, ScrollView, Text, Image } from 'react-native';
import {
  SafeAreaView,
  TextTop,
  CategoryContainer,
  CategoryImg,
  CategoryText,
} from './styles';
import food from '~/public/food.jpg';

import SearchBar from '~/components/SearchBar';

export default function Explore() {
  return (
    <View>
      <SearchBar />
      <SafeAreaView>
        <ScrollView>
          <TextTop>O que você deseja encontrar, Victor?</TextTop>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <CategoryContainer>
              <CategoryImg source={food} />
              <CategoryText>Aventuras</CategoryText>
            </CategoryContainer>
            <CategoryContainer>
              <CategoryImg source={food} />
              <CategoryText>Experiências</CategoryText>
            </CategoryContainer>
            <CategoryContainer>
              <CategoryImg source={food} />
              <CategoryText>Estadias</CategoryText>
            </CategoryContainer>
            <CategoryContainer>
              <CategoryImg source={food} />
              <CategoryText>Culinária</CategoryText>
            </CategoryContainer>
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

Explore.navigationOptions = {
  tabBarLabel: 'Explorar',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="search" size={25} color={tintColor} />
  ),
};
