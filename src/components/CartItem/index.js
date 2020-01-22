import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';
import {
  Box,
  ViewTop,
  Image,
  Info,
  ViewButtonDelete,
  ButtonDelete,
  Title,
  Price,
  ViewBottom,
  ViewAmount,
  Input,
  ViewSubtotal,
  SubtotalText,
} from './styles';

function CartItem({ item, removeToCart, updateAmountRequest, subtotal }) {
  function handleRemoveToCart(id) {
    removeToCart(id);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  return (
    <Box>
      <ViewTop>
        <Image source={{ uri: item.image }} />

        <Info>
          <Title>{item.title}</Title>
          <Price>{item.priceFormatted}</Price>
        </Info>

        <ViewButtonDelete>
          <ButtonDelete onPress={() => handleRemoveToCart(item.id)}>
            <Icon name="delete-forever" size={24} color="#7159c1" />
          </ButtonDelete>
        </ViewButtonDelete>
      </ViewTop>
      <ViewBottom>
        <ViewAmount>
          <TouchableOpacity onPress={() => decrement(item)}>
            <Icon name="remove-circle-outline" size={20} color="#7159c1" />
          </TouchableOpacity>
          <Input value={String(item.amount)} />
          <TouchableOpacity onPress={() => increment(item)}>
            <Icon name="add-circle-outline" size={20} color="#7159c1" />
          </TouchableOpacity>
        </ViewAmount>

        <ViewSubtotal>
          <SubtotalText>{item.subtotal}</SubtotalText>
        </ViewSubtotal>
      </ViewBottom>
    </Box>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(CartItem);
