import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View.attrs({
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
  border-radius: 10;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#5c5c5c',
})`
  flex: 1;
  padding: 15px 10px;
  font-size: 18px;
  font-weight: bold;
  color: #5c5c5c;
`;
