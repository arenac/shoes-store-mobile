import React from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Products,
  Product,
  ProductImage,
  ProductInfo,
  ProductDetails,
  Title,
  ProductSubtotal,
  DeleteProduct,
  Control,
  ControlButton,
  ProductAmountTextInput,
  TotalContainer,
  TotalText,
  TotalValue,
  SendOrderButton,
  SendOrderButtonText,
  EmptyCartContainer,
  EmptyCartText,
} from './styles';

import { formatPrice } from '../../utils/format';

const Cart = ({ cart }) => {
  return (
    <Container>
      {cart.length > 0 ? (
        <>
          <Products>
            {cart.map(product => (
              <>
                <Product key={String(product.id)}>
                  <ProductInfo>
                    <ProductImage
                      source={{
                        uri: String(product.image),
                      }}
                    />
                    <ProductDetails>
                      <Title>{product.title}</Title>
                      <ProductSubtotal>{product.priceFormated}</ProductSubtotal>
                    </ProductDetails>
                    <DeleteProduct>
                      <Icon name="delete-forever" size={20} color="#6C6C6C" />
                    </DeleteProduct>
                  </ProductInfo>
                  <Control>
                    <ControlButton>
                      <Icon
                        name="add-circle-outline"
                        size={20}
                        color="#6C6C6C"
                      />
                    </ControlButton>
                    <ProductAmountTextInput>1</ProductAmountTextInput>
                    <ControlButton>
                      <Icon
                        name="remove-circle-outline"
                        size={20}
                        color="#6C6C6C"
                      />
                    </ControlButton>
                    <ProductSubtotal>{1000}</ProductSubtotal>
                  </Control>
                </Product>
              </>
            ))}
          </Products>
          <TotalContainer>
            <TotalText>TOTAL</TotalText>
            <TotalValue>{1000}</TotalValue>
            <SendOrderButton>
              <SendOrderButtonText>SEND ORDER</SendOrderButtonText>
            </SendOrderButton>
          </TotalContainer>
        </>
      ) : (
        <EmptyCartContainer>
          <Icon name="remove-shopping-cart" size={100} color="#6C6C6C" />
          <EmptyCartText>Your shopping cart is empty</EmptyCartText>
        </EmptyCartContainer>
      )}
    </Container>
  );
};

Cart.navigationOptions = {
  title: 'Cart',
};

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
