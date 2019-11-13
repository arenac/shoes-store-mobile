import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  padding: 30px;
  background: #fff;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Product = styled.View`
  width: 260px;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  border: 1px solid #d2d3d3;
  background: #dcdcdc;
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
  margin-top: 10px;
`;

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: #3598c2;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  background: ${darken(0.03, '#3598C2')};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
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
