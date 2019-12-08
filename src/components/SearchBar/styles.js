import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #ffffff;
  height: 115px;
`;

export const InputContainer = styled.View`
  margin: 60px 30px;
  padding: 0 15px;
  height: 46px;
  background: transparent;
  border: 1px solid #000;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#000000',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #000000;
`;
