import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Col, Grid } from 'react-native-easy-grid';
import {
  SafeAreaView,
  Dimensions,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  ContainerSearch,
  InputContainer,
  TInput,
  Container,
  TextInformation,
  TextDescription,
  CategoryContainer,
  CategoryImg,
  CategoryTextCont,
  CategoryText,
  CardsText,
} from './styles';

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
      <ContainerSearch>
        <TouchableOpacity
          onPress={() => navigation.navigate('ModalSearchScreem')}>
          <InputContainer>
            <Icon name="search" size={25} color="#5c5c5c" />
            <TInput>Procurar algo...</TInput>
          </InputContainer>
        </TouchableOpacity>
      </ContainerSearch>
      <SafeAreaView onLayout={onLayout} style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Container>
            <TextInformation>
              O que você deseja encontrar, Victor?
            </TextInformation>
          </Container>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              onPress={() => navigation.navigate('FindTripsScreem')}>
              <CategoryContainer>
                <CategoryImg source={food} />
                <CategoryTextCont>
                  <CategoryText>Estadias</CategoryText>
                </CategoryTextCont>
              </CategoryContainer>
            </TouchableOpacity>

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

Explore.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
