import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
} from 'react-navigation';

import LoginView from './View/LoginView';
import Notices from './Component/Notices';
import Friends from './Component/Friends';
import Myself from './Component/Myself';
import Setup from './Component/Setup';

const MainView = TabNavigator({
  Notices: { screen: Notices },
  Friends: { screen: Friends },
  Myself: { screen: Myself },
  Setup: { screen: Setup },
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    showIcon: true,
    activeTintColor: '#F4F5F7'
  });

const App = StackNavigator({
  LoginView: { screen: LoginView },
  MainView: { screen: MainView },
})


export default App;