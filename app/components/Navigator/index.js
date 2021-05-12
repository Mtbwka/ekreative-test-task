import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import UsersListPage from '../../pages/UsersListPage';
import UserPage from '../../pages/UserPage';

const Navigator = createAppContainer(
  createStackNavigator(
    {
      UsersList: UsersListPage,
      User: UserPage,
    },
    {
      initialRouteName: 'UsersList',
    }
  )
);

export default <Navigator />;
