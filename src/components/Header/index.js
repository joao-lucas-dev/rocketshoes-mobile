import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/logo.png';
import {
  Wrapper,
  Container,
  ButtonLogo,
  Logo,
  ButtonBasket,
  ViewAmount,
  Amount,
} from './styles';

export default function Header({ navigation }) {
  return (
    <Wrapper>
      <Container>
        <ButtonLogo onPress={() => navigation.navigate('Home')}>
          <Logo source={logo} />
        </ButtonLogo>

        <ButtonBasket onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" size={24} color="#FFF" />

          <ViewAmount>
            <Amount>3</Amount>
          </ViewAmount>
        </ButtonBasket>
      </Container>
    </Wrapper>
  );
}
