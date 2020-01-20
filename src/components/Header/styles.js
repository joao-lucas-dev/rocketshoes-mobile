import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #141419;
`;

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  background: #141419;
`;

export const ButtonLogo = styled.TouchableOpacity``;

export const Logo = styled.Image`
  width: 185px;
  height: 24px;
`;

export const ViewAmount = styled.View`
  background: #7159c1;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -5px;
  top: -6px;
`;

export const Amount = styled.Text`
  font-size: 12px;
  color: #fff;
`;

export const ButtonBasket = styled.TouchableOpacity``;
