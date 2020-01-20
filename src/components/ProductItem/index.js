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

function ProductItem({ item, addToCart }) {
  function handleAddToCart(product) {
    addToCart(product);
  }

  return (
    <Box>
      <Image source={{ uri: item.image }} />
      <Title>{item.title}</Title>
      <Price>{item.priceFormatted}</Price>

      <Button onPress={() => handleAddToCart(item)}>
        <BasketArea>
          <Icon name="add-shopping-cart" size={16} color="#fff" />
          <Amount>1</Amount>
        </BasketArea>

        <Content>
          <TitleButton>ADICIONAR</TitleButton>
        </Content>
      </Button>
    </Box>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(ProductItem);
