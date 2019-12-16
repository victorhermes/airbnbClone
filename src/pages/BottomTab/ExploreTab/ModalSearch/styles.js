import styled from 'styled-components';

export const Container = styled.View`
  margin: 25px;
`;

export const RecentSearches = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Places = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
  border-bottom-color: #d0d0d0;
  border-bottom-width: 1px;
`;

export const NamePlaces = styled.Text`
  margin-left: 20px;
  font-size: 18px;
`;

export const IconPlaces = styled.View`
  border: 1px solid #d0d0d0;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: #f1f1f1;
`;
