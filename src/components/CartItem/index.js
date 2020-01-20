import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

export default function CartItem({ item }) {
  return (
    <Box>
      <ViewTop>
        <Image source={{ uri: item.image }} />

        <Info>
          <Title>{item.title}</Title>
          <Price>{item.price}</Price>
        </Info>

        <ViewButtonDelete>
          <ButtonDelete>
            <Icon name="delete-forever" size={24} color="#7159c1" />
          </ButtonDelete>
        </ViewButtonDelete>
      </ViewTop>
      <ViewBottom>
        <ViewAmount>
          <TouchableOpacity>
            <Icon name="remove-circle-outline" size={20} color="#7159c1" />
          </TouchableOpacity>
          <Input value="1" />
          <TouchableOpacity>
            <Icon name="add-circle-outline" size={20} color="#7159c1" />
          </TouchableOpacity>
        </ViewAmount>

        <ViewSubtotal>
          <SubtotalText>R$ 523,60</SubtotalText>
        </ViewSubtotal>
      </ViewBottom>
    </Box>
  );
}
