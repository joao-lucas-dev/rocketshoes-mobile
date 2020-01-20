import React, { Component } from 'react';

import ProductItem from '../../components/ProductItem';
import api from '../../services/api';
import { Container, List } from './styles';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    this.setState({ products: response.data });
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
