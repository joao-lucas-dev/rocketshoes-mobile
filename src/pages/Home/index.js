import React, { useState, useEffect } from 'react';

import ProductItem from '../../components/ProductItem';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { Container, List } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

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
