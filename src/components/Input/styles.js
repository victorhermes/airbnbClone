import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const ContainerSearch = styled.View.attrs({
  paddingTop: getStatusBarHeight(),
})`
  background-color: #ffffff;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput`
  margin: 0 25px 10px;
  padding: 0 15px;
  height: 50px;
  background-color: #fff;
  box-shadow: 0 0 5px #9c9c9c;
  border-radius: 10;
  elevation: 5;
  flex: 1;
  padding: 15px 20px;
  font-size: 18px;
  font-weight: bold;
  color: #5c5c5c;
`;

export const CancelButton = styled.Text`
  padding: 20px 0;
  font-size: 15px;
  margin-right: 20px;
`;
