import styled from 'styled-components/native';

export const BoxCart = styled.View`
  width: 100%;
  background: #fff;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const TitleCart = styled.Text`
  font-size: 24px;
  color: #000;
  font-weight: bold;
  margin-top: 10px;
`;

export const Container = styled.View`
  flex: 1;
  background: #191919;
  padding: 20px;
`;

export const BoxProducts = styled.View`
  width: 100%;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
  max-height: 420px;
`;

export const TotalBox = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

export const TotalTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #999;
`;

export const TotalPrice = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #000;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 42px;
  background: #7159c1;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const ButtonTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;
