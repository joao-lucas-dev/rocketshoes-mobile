import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import CartItem from '../../components/CartItem';
import {
  BoxCart,
  TitleCart,
  Container,
  BoxProducts,
  List,
  TotalBox,
  TotalTitle,
  TotalPrice,
  Button,
  ButtonTitle,
} from './styles';

export default function Cart() {
  const booleana = false;

  if (booleana) {
    return (
      <Container>
        <BoxCart>
          <Icon name="remove-shopping-cart" color="#eee" size={60} />
          <TitleCart>Seu carrinho está vazio</TitleCart>
        </BoxCart>
      </Container>
    );
  }

  return (
    <Container>
      <BoxProducts>
        {/* <List
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => <CartItem item={item} />}
        /> */}

        <TotalBox>
          <TotalTitle>TOTAL</TotalTitle>
          <TotalPrice>R$ 1920,28</TotalPrice>
        </TotalBox>

        <Button>
          <ButtonTitle>FINALIZAR PEDIDO</ButtonTitle>
        </Button>
      </BoxProducts>
    </Container>
  );
}
