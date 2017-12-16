/* @flow */

import React from 'react';
import { ScreenOrientation } from 'expo';

ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);

import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { SafeAreaView, StackNavigator } from 'react-navigation';

import Banner from './Banner';
import CustomTabs from './CustomTabs';
import CustomTransitioner from './CustomTransitioner';
import Drawer from './Drawer';
import MultipleDrawer from './MultipleDrawer';
import TabsInDrawer from './TabsInDrawer';
import ModalStack from './ModalStack';
import StacksInTabs from './StacksInTabs';
import StacksOverTabs from './StacksOverTabs';
import SimpleStack from './SimpleStack';
import SimpleTabs from './SimpleTabs';
import TabAnimations from './TabAnimations';

const ExampleRoutes = {
  SimpleStack: {
    name: 'stack 案例',
    description: '一个卡片式 stack',
    screen: SimpleStack,
  },
  SimpleTabs: {
    name: 'Tabs 案例',
    description: 'Tabs 底部下划线移动',
    screen: SimpleTabs,
  },
  Drawer: {
    name: '抽屉 案例',
    description: 'Android样式的抽屉导航',
    screen: Drawer,
  },
  MultipleDrawer: {
    name: '抽屉里有多个导航选项',
    description: '添加任意你需要的抽屉',
    screen: MultipleDrawer,
  },
  TabsInDrawer: {
    name: '抽屉+tab 案例',
    description: '抽屉和tab的组合',
    screen: TabsInDrawer,
  },
  CustomTabs: {
    name: '自定义tab选项卡',
    description: '自定义tab选项卡',
    screen: CustomTabs,
  },
  // CustomTransitioner: {
  //   name: 'Custom Transitioner',
  //   description: 'Custom transitioner with stack router',
  //   screen: CustomTransitioner,
  // },
  ModalStack: {
    name:
      Platform.OS === 'ios'
        ? 'modal 模式案例 动态头部 ios'
        : 'modal 模式案例 动态头部 android',
    description:
      Platform.OS === 'ios'
        ? 'modal 模式案例 动态头部 ios'
        : 'modal 模式案例 动态头部 android',
    screen: ModalStack,
  },
  StacksInTabs: {
    name: 'Stacks in Tabs',
    description: 'Nested stack navigation in tabs',
    screen: StacksInTabs,
  },
  StacksOverTabs: {
    name: 'Stacks over Tabs',
    description: 'Nested stack navigation that pushes on top of tabs',
    screen: StacksOverTabs,
  },
  LinkStack: {
    name: 'Link in Stack',
    description: 'Deep linking into a route in stack',
    screen: SimpleStack,
    path: 'people/Jordan',
  },
  LinkTabs: {
    name: 'Link to Settings Tab',
    description: 'Deep linking into a route in tab',
    screen: SimpleTabs,
    path: 'settings',
  },
  TabAnimations: {
    name: 'Animated Tabs Example',
    description: 'Tab transitions have custom animations',
    screen: TabAnimations,
  },
};

const MainScreen = ({ navigation }) => (
  <ScrollView style={{ flex: 1 }} contentInsetAdjustmentBehavior="automatic">
    <Banner />
    {Object.keys(ExampleRoutes).map((routeName: string) => (
      <TouchableOpacity
        key={routeName}
        onPress={() => {
          const { path, params, screen } = ExampleRoutes[routeName];
          const { router } = screen;
          const action = path && router.getActionForPathAndParams(path, params);
          navigation.navigate(routeName, {}, action);
        }}
      >
        <SafeAreaView
          style={styles.itemContainer}
          forceInset={{ vertical: 'never' }}
        >
          <View style={styles.item}>
            <Text style={styles.title}>{ExampleRoutes[routeName].name}</Text>
            <Text style={styles.description}>
              {ExampleRoutes[routeName].description}
            </Text>
          </View>
        </SafeAreaView>
      </TouchableOpacity>
    ))}
  </ScrollView>
);

const AppNavigator = StackNavigator(
  {
    ...ExampleRoutes,
    Index: {
      screen: MainScreen,
    },
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',

    /*
   * Use modal on iOS because the card mode comes from the right,
   * which conflicts with the drawer example gesture
   */
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);

export default () => <AppNavigator />;

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  description: {
    fontSize: 13,
    color: '#999',
  },
});
