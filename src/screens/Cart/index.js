import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Products,
  Product,
  ProductImage,
  ProductInfo,
  Title,
  Price,
  DeleteProduct,
  SubTotal,
  ProductAmount,
  RemoveButton,
  ProductAmountTextInput,
  AddButton,
  TotalContainer,
  TotalText,
  TotalValue,
  SendOrderButton,
  SendOrderButtonText,
  EmptyCartContainer,
  EmptyCartText,
} from './styles';

import { formatPrice } from '../../utils/format';

const Cart = () => {
  const products = [];
  return (
    <Container>
      {products.length > 0 ? (
        <>
          <Products>
            {products.map(product => (
              <>
                <Product key={product.id}>
                  <ProductImage
                    source={{
                      uri: String(product.image),
                    }}
                  />
                  <ProductInfo>
                    <Title>{product.title}</Title>
                    <Price>{formatPrice(product.price)}</Price>
                  </ProductInfo>
                  <DeleteProduct>
                    <Icon name="delete-forever" size={20} color="#6C6C6C" />
                  </DeleteProduct>
                  <SubTotal>
                    <ProductAmount>
                      <RemoveButton>
                        <Icon
                          name="add-circle-outline"
                          size={20}
                          color="#6C6C6C"
                        />
                      </RemoveButton>
                      <ProductAmountTextInput>1</ProductAmountTextInput>
                      <AddButton>
                        <Icon
                          name="remove-circle-outline"
                          size={20}
                          color="#6C6C6C"
                        />
                      </AddButton>
                    </ProductAmount>
                    <Price>{formatPrice(1000)}</Price>
                  </SubTotal>
                </Product>
              </>
            ))}
          </Products>
          <TotalContainer>
            <TotalText>TOTAL</TotalText>
            <TotalValue>{formatPrice(1000)}</TotalValue>
            <SendOrderButton>
              <SendOrderButtonText>SEND ORDER</SendOrderButtonText>
            </SendOrderButton>
          </TotalContainer>
        </>
      ) : (
        <EmptyCartContainer>
          <Icon name="remove-shopping-cart" size={50} color="#6C6C6C" />
          <EmptyCartText>Your shopping cart is empty</EmptyCartText>
        </EmptyCartContainer>
      )}
    </Container>
  );
};

Cart.navigationOptions = {
  title: 'Cart',
};

export default Cart;
