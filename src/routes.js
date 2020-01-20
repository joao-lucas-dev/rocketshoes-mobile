import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';

const routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      defaultNavigationOptions: {
        header: navigation => <Header {...navigation} />,
      },
    }
  )
);

export default routes;
