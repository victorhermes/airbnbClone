import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Col, Row, Grid } from 'react-native-easy-grid';
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

export default function Explore() {
  const { width } = Dimensions.get('window');
  const [getWidth, setWidth] = useState(width);

  function onLayout() {
    setWidth(Dimensions.get('window').width);
  }

  return (
    <>
      <SearchBar />
      <SafeAreaView onLayout={onLayout} style={{ flex: 1 }}>
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

            <CategoryContainer style={{ paddingRight: 20 }}>
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

            <Grid>
              <Col style={{ backgroundColor: '#000', marginRight: 10 }}>
                <View style={{ flex: 1 }}>
                  <Image
                    source={food}
                    style={{
                      flex: 1,
                      width: null,
                      height: getWidth / 4,
                    }}
                  />
                </View>
              </Col>
              <Col style={{ backgroundColor: '#f33' }}>
                <View style={{ flex: 1 }}>
                  <Image
                    source={house}
                    style={{
                      flex: 1,
                      width: null,
                      height: getWidth / 4,
                    }}
                  />
                </View>
              </Col>
            </Grid>
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
