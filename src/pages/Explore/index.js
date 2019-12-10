import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  SafeAreaView,
  Dimensions,
  Image,
  View,
  ScrollView,
  Text,
} from 'react-native';
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

import SearchBar from '~/components/SearchBar';

import food from '~/public/food.jpg';
import aventura from '~/public/aventura.jpg';
import house from '~/public/house.jpg';

const { width } = Dimensions.get('window');

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
          </Container>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <CategoryContainer>
              <CategoryImg source={food} />
              <CategoryTextCont>
                <CategoryText>Estadias</CategoryText>
              </CategoryTextCont>
            </CategoryContainer>

            <CategoryContainer>
              <CategoryImg source={aventura} />
              <CategoryTextCont>
                <CategoryText>Aventuras</CategoryText>
              </CategoryTextCont>
            </CategoryContainer>

            <CategoryContainer>
              <CategoryImg source={house} />
              <CategoryTextCont>
                <CategoryText>Estadias</CategoryText>
              </CategoryTextCont>
            </CategoryContainer>
          </ScrollView>

          <Container>
            <View>
              <TextInformation>
                Experiências com avaliações excelentes
              </TextInformation>
              <TextDescription>
                Reserve atividades guiadas por anfitriões locais em sua próxima
                viagem
              </TextDescription>
            </View>

            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              <View style={{ width: width / 2 - 30, height: width / 3 - 30 }}>
                <View style={{ flex: 1 }}>
                  <Image
                    source={house}
                    style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: 'cover',
                    }}
                  />
                </View>
              </View>
              <View style={{ width: width / 2 - 30, height: width / 3 - 30 }}>
                <View style={{ flex: 1 }}>
                  <Image
                    source={food}
                    style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: 'cover',
                    }}
                  />
                </View>
              </View>
            </View>
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
