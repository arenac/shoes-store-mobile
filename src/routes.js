import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from './screens/Home';
import Cart from './screens/Cart';

import CartIcon from './components/CartIcon';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Icon;
  let iconName;
  if (routeName === 'Home') {
    iconName = 'home';
  } else if (routeName === 'Cart') {
    IconComponent = CartIcon;
    iconName = 'shopping-cart';
  }

  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Home,
      Cart,
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: '#6C6C6C',
        inactiveTintColor: '#B6B1B1',
      },
    }
  )
);

export default Routes;
