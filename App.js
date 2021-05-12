import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import UsersListPage from './app/pages/UsersListPage';
import UserPage from './app/pages/UserPage';

const navigator = createStackNavigator(
  {
    UsersList: UsersListPage,
    User: UserPage,
  },
  {
    initialRouteName: 'UsersList',
  }
);

export default createAppContainer(navigator);
