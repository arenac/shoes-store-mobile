import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  List,
  Product,
  Header,
  ProductImage,
  Title,
  Price,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await api.get('products');
      const data = response.data.map(product => ({
        ...product,
        priceFormated: formatPrice(product.price),
      }));
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      <List
        data={products}
        horizontal
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => (
          <Product>
            <Header>
              <Title>{item.title}</Title>
              <ProductImage
                source={{
                  uri: String(item.image),
                }}
              />
              <Price>{item.priceFormated}</Price>
            </Header>
            <AddButton onPress={() => {}}>
              <ProductAmount>
                <Icon name="add-shopping-cart" size={20} color="#fff" />
                <ProductAmountText>1</ProductAmountText>
              </ProductAmount>
              <AddButtonText>ADD TO CART</AddButtonText>
            </AddButton>
          </Product>
        )}
      />
    </Container>
  );
};

Home.navigationOptions = {
  title: 'Shoes Store',
};

export default Home;
