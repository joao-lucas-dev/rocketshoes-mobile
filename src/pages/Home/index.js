import React, { Component } from 'react';

import ProductItem from '../../components/ProductItem';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { Container, List } from './styles';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <List
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => <ProductItem item={item} />}
        />
      </Container>
    );
  }
}
