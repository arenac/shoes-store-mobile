import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { FlatList } from 'react-native';

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

import { formatPrice } from '../../utils/format';

const Home = () => {
  const products = [
    {
      id: 1,
      title: 'Performance shoes',
      price: 1179.9,
      image:
        'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/xnvkdpbwtevczwlo1sbj/air-max-plus-older-shoe-7DdWK3.jpg',
    },
    {
      id: 2,
      title: 'Nice shoes for sports',
      price: 1539.9,
      image:
        'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/xnvkdpbwtevczwlo1sbj/air-max-plus-older-shoe-7DdWK3.jpg',
    },
    {
      id: 3,
      title: 'Addidas Shoes',
      price: 1599.99,
      image:
        'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/9920dfd3593b4e068696a9840160d43f_9366/SoleCourt_Clay_Shoes_Svart_G26293_01_standard.jpg',
    },
    {
      id: 5,
      title: 'GEL-NIMBUS™ 22',
      price: 1900,
      image:
        'https://asics.scene7.com/is/image/asics/1011A680_023_SR_RT?$zoom$',
    },
    {
      id: 6,
      title: 'GEL-NIMBUS™ 21 LS',
      price: 2000,
      image:
        'https://asics.scene7.com/is/image/asics/1012A540_001_SR_RT?$sfcc-product$',
    },
    {
      id: 4,
      title: 'GEL-NIMBUS™ 21 WINTERIZED',
      price: 1900,
      image:
        'https://asics.scene7.com/is/image/asics/1011A633_020_SR_RT?$zoom$',
    },
  ];

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
              <Price>{formatPrice(item.price)}</Price>
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
