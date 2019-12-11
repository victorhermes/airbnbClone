import React, { useState } from 'react';
import { Col, Grid } from 'react-native-easy-grid';
import {
  SafeAreaView,
  Dimensions,
  Image,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  TextInformation,
  TextDescription,
  CategoryContainer,
  CategoryImg,
  CategoryTextCont,
  CategoryText,
  CardsText,
} from './styles';

import SearchBar from '~/components/SearchBar';

import food from '~/public/food.jpg';
import aventura from '~/public/aventura.jpg';
import house from '~/public/house.jpg';

export default function Explore({ navigation }) {
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
              <TouchableOpacity onPress={() => navigation.navigate('Ftrips')}>
                <CategoryImg source={food} />
                <CategoryTextCont>
                  <CategoryText>Estadias</CategoryText>
                </CategoryTextCont>
              </TouchableOpacity>
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

            <Grid style={{ marginTop: 30, marginBottom: 30 }}>
              <Col style={{ marginRight: 15 }}>
                <View style={{ flex: 1 }}>
                  <Image
                    source={food}
                    style={{
                      flex: 1,
                      width: null,
                      height: getWidth / 4,
                    }}
                  />
                  <Button
                    title="Go go"
                    onPress={() => navigation.navigate('Ftrips')}
                  />
                  <CardsText>Acomocação na Praia</CardsText>
                </View>
              </Col>
              <Col>
                <View style={{ flex: 1 }}>
                  <Image
                    source={house}
                    style={{
                      flex: 1,
                      width: null,
                      height: getWidth / 4,
                    }}
                  />
                  <CardsText>Quarto só seu na praia</CardsText>
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
  header: null,
};
