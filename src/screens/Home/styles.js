import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

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
  margin-top: 4px;
  text-align: center;
`;

export const Price = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0 20px;
`;

export const ProductButton = styled(RectButton)`
  justify-content: space-between;
  align-content: space-between;
  margin: 10px;
  background: #7159c1;
  color: #fff;
  border: 0;
  border-radius: 4px;
`;

export const ButtonIconContainer = styled.View`
  flex: 1;
`;

export const ProductButtonAdded = styled.Text`
  text-align: center;
`;

export const ProductButtonText = styled.Text`
  text-align: center;
`;
