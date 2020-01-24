import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';

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

export default function ProductItem({ item }) {
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  function handleAddToCart(id) {
    dispatch(CartActions.addToCartRequest(id));
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
