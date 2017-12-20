import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
} from 'react-navigation';



import Sentry from 'sentry-expo';

// Remove this once Sentry is correctly setup.
Sentry.enableInExpoDevelopment = true;

Sentry.config('https://1fbe9120604646e98bd42e60b078eced:b5e4be77b1ca431f821d141128cad76c@sentry.io/261176').install();



import LoginView from './View/LoginView';
import Notices from './Component/Notices';
import Friends from './Component/Friends';
import Myself from './Component/Myself';
import Setup from './Component/Setup';

import StatueBarView from './TestExpo/StatueBarView';
import ApploadingView from './View/ApploadingView';

import NavigationDemo from './js/App';

//splash
import splashView from './View/splashView';
import guideView from './View/guideView';



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
  splashView:{screen:splashView},
  ApploadingView: { screen: ApploadingView },
  LoginView: { screen: LoginView },
  MainView: { screen: MainView },
  StatueBarView: { screen: StatueBarView },
  NavigationDemo: { screen: NavigationDemo },
  guideView:{screen:guideView},

  
})


export default App;