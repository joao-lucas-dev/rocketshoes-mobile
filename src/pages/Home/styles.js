import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #191919;
`;

export const List = styled.FlatList.attrs({
  horizontal: true,
})`
  flex: 1;
  margin: 20px 15px;
`;
