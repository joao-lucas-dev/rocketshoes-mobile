import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import CartItem from '../../components/CartItem';
import { formatPrice } from '../../util/format';
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

function Cart({ products, total }) {
  if (products.length === 0) {
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
        <List
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => <CartItem item={item} />}
        />

        <TotalBox>
          <TotalTitle>TOTAL</TotalTitle>
          <TotalPrice>{total}</TotalPrice>
        </TotalBox>

        <Button>
          <ButtonTitle>FINALIZAR PEDIDO</ButtonTitle>
        </Button>
      </BoxProducts>
    </Container>
  );
}

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
    priceFormatted: formatPrice(product.price),
  })),
  total: formatPrice(
    state.cart.reduce(
      (total, product) => total + product.price * product.amount,
      0
    )
  ),
});

export default connect(mapStateToProps)(Cart);
