import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import * as CartActions from '../../store/modules/cart/actions';
import {
  Box,
  Image,
  Title,
  Price,
  Button,
  BasketArea,
  Amount,
  Content,
  TitleButton,
} from './styles';

function ProductItem({ item, addToCartRequest, amount }) {
  function handleAddToCart(id) {
    addToCartRequest(id);
  }

  return (
    <Box>
      <Image source={{ uri: item.image }} />
      <Title>{item.title}</Title>
      <Price>{item.priceFormatted}</Price>

      <Button onPress={() => handleAddToCart(item.id)}>
        <BasketArea>
          <Icon name="add-shopping-cart" size={16} color="#fff" />
          <Amount>{amount[item.id] || 0}</Amount>
        </BasketArea>

        <Content>
          <TitleButton>ADICIONAR</TitleButton>
        </Content>
      </Button>
    </Box>
  );
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
