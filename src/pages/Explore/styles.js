import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const ContainerSearch = styled.View.attrs({
  paddingTop: getStatusBarHeight() + 15,
})`
  background-color: #ffffff;
`;

export const InputContainer = styled.View`
  margin: 0 25px 10px;
  padding: 0 15px;
  height: 50px;
  background-color: #fff;
  box-shadow: 0 0 5px #9c9c9c;
  elevation: 5;
  border-radius: 10;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.Text`
  flex: 1;
  padding: 15px 10px;
  font-size: 18px;
  font-weight: bold;
  color: #5c5c5c;
`;

export const Container = styled.View`
  margin: 0 25px;
`;

export const TextInformation = styled.Text`
  margin: 50px 0 5px;
  font-size: 30px;
  font-weight: bold;
`;

export const TextDescription = styled.Text`
  font-size: 20px;
`;

export const CategoryContainer = styled.View`
  padding: 30px 0 30px 20px;
`;

export const CategoryImg = styled.Image`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 170px;
  height: 120px;
`;

export const CategoryTextCont = styled.View`
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 5px #9c9c9c;
  elevation: 5;
`;

export const CategoryText = styled.Text`
  padding: 15px 20px;
  font-size: 20px;
`;

export const CardsText = styled.Text`
  font-size: 20px;
  margin-top: 10px;
`;
