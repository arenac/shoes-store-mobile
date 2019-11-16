import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin: 50px 15px 15px 15px;
  border: 1px solid #eee;
`;

export const Products = styled.View`
  margin-bottom: 10px;
`;

export const Product = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const Title = styled.Text``;

export const ProductSubtotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
  flex: 1;
  text-align: right;
`;

export const DeleteProduct = styled.TouchableOpacity`
  padding: 6px;
`;

export const Control = styled.View`
  flex-direction: row;
  align-items: center;
  background: #eee;
  padding: 8px;
  border-radius: 4px;
`;

export const ControlButton = styled.TouchableOpacity``;

export const ProductAmountTextInput = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 4px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 40px;
`;

export const TotalContainer = styled.View`
  margin-top: 30px;
`;

export const TotalText = styled.Text`
  text-align: center;
  color: #999;
  font-weight: bold;
`;

export const TotalValue = styled.Text`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: bold;
`;

export const SendOrderButton = styled.TouchableOpacity`
  background: #3598c2;
  padding: 12px;
  border-radius: 4px;
`;

export const SendOrderButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;

export const EmptyCartContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const EmptyCartText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 18px;
`;
