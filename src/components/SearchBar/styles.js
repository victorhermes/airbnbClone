import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View.attrs({
  paddingTop: getStatusBarHeight() + 15,
})`
  background-color: #ffffff;
`;

export const InputContainer = styled.View.attrs({})`
  margin: 0 25px 10px;
  padding: 0 10px;
  height: 50px;
  background: transparent;
  border: 1px solid #5c5c5c;
  border-radius: 10;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#5c5c5c',
})`
  flex: 1;
  padding: 15px 0;
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
  color: #5c5c5c;
`;
