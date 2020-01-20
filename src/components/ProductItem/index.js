import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  return (
    <Box>
      <Image source={{ uri: item.image }} />
      <Title>{item.title}</Title>
      <Price>R$ {item.price}</Price>

      <Button>
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
