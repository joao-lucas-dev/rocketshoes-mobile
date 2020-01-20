import React, { useState } from 'react';
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
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'Tênis de Caminhada Leve Confortável',
      price: 179.9,
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
    },
    {
      id: 2,
      title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
      price: 139.9,
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
    },
    {
      id: 3,
      title: 'Tênis Massa',
      price: 229.9,
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
    },
    {
      id: 4,
      title: 'Tênis Massa',
      price: 229.9,
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
    },
  ]);

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
        <List
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => <CartItem item={item} />}
        />

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
