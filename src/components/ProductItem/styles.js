import styled from 'styled-components/native';

export const Box = styled.View`
  width: 220px;
  height: 358px;
  background: #fff;
  margin: 0 7px;
  padding: 10px;
  border-radius: 5px;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 16px;
  margin-top: 10px;
`;

export const Price = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin-top: 5px;
`;

export const Button = styled.TouchableOpacity`
  background: #7159c1;
  flex-direction: row;
  align-items: center;
  margin-top: auto;
  height: 42px;
  border-radius: 5px;
`;

export const BasketArea = styled.View`
  width: 42px;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Amount = styled.Text`
  margin-left: 5px;
  font-size: 14px;
  color: #fff;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
`;

export const TitleButton = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
