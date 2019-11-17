import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';

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

const Cart = ({ cart, total, removeFromCart, updateAmount }) => {
  const handleDeleteProduct = id => {
    removeFromCart(id);
  };

  const increment = product => {
    updateAmount(product.id, product.amount + 1);
  };

  const decrement = product => {
    updateAmount(product.id, product.amount - 1);
  };

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
                      <ProductSubtotal>
                        {product.priceFormatted}
                      </ProductSubtotal>
                    </ProductDetails>
                    <DeleteProduct
                      onPress={() => handleDeleteProduct(product.id)}
                    >
                      <Icon name="delete-forever" size={20} color="#6C6C6C" />
                    </DeleteProduct>
                  </ProductInfo>
                  <Control>
                    <ControlButton onPress={() => decrement(product)}>
                      <Icon
                        name="remove-circle-outline"
                        size={20}
                        color="#6C6C6C"
                      />
                    </ControlButton>
                    <ProductAmountTextInput>
                      {product.amount}
                    </ProductAmountTextInput>
                    <ControlButton onPress={() => increment(product)}>
                      <Icon
                        name="add-circle-outline"
                        size={20}
                        color="#6C6C6C"
                      />
                    </ControlButton>
                    <ProductSubtotal>{product.subtotal}</ProductSubtotal>
                  </Control>
                </Product>
              </>
            ))}
          </Products>
          <TotalContainer>
            <TotalText>TOTAL</TotalText>
            <TotalValue>{total}</TotalValue>
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
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
