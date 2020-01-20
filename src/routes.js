import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './pages/Home';
import Cart from './pages/Cart';

const routes = createAppContainer(
  createSwitchNavigator({
    Home,
  }),
);

export default routes;
