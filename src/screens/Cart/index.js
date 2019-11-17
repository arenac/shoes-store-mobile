import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  removeFromCart,
  updateAmountRequest,
} from '../../store/modules/cart/actions';

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

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((oldTotal, product) => {
        return oldTotal + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  const handleDeleteProduct = id => {
    dispatch(removeFromCart(id));
  };

  const increment = product => {
    dispatch(updateAmountRequest(product.id, product.amount + 1));
  };

  const decrement = product => {
    dispatch(updateAmountRequest(product.id, product.amount - 1));
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
}

Cart.navigationOptions = {
  title: 'Cart',
};
