import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #fff;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Product = styled.View`
  justify-content: flex-start;
  align-content: center;
  width: 260px;
  height: 300px;
  margin: 30px 10px;
  border-radius: 4px;
  border: 1px solid #eee;
`;

export const Header = styled.View`
  align-items: center;
`;

export const ProductImage = styled.Image`
  align-content: center;
  width: 250px;
  height: 150;
  border-radius: 4px;
  background: #eee;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin: 10px 0;
  text-align: center;
`;

export const Price = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0 20px;
`;

export const AddButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  background: #7159c1;
  border: 0;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  background: ${darken(0.03, '#7159c1')};
`;

export const ProductAmountText = styled.Text`
  margin: 0px 4px 0px 10px;
  color: #fff;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  color: #fff;
  font-weight: bold;
`;
