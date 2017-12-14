import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ListView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
export default class Friends extends Component {
  static navigationOptions = {
    title: '朋友',
    headerStyle: {
      backgroundColor: '#0269D3',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      alignSelf: 'center',
    },
    tabBarIcon: ({ focused, tintColor }) => {
      if (focused == true) {
        return (
          <Image source={require('../assets/image/icon2.png')} />
        )
      }
      else {
        return (
          <Image source={require('../assets/image/icon3.png')} />
        )
      }
    }
  }
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>朋友</Text>

        <Text>flexDirection:默认是让其子元素竖直轴排列</Text>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Ionicons name="md-checkmark-circle" size={32} color="black" />
            <Ionicons name="md-checkmark-circle" size={55} color="green" />
            <Ionicons name="md-checkmark-circle" size={66} color="yellow" />

          </View>
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
            <Ionicons name="md-checkmark-circle" size={77} color="green" />
            <Ionicons name="md-checkmark-circle" size={88} color="red" />
            <Ionicons name="md-checkmark-circle" size={99} color="green" />

          </View>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
            <Ionicons name="md-checkmark-circle" size={111} color="green" />
            <Ionicons name="md-checkmark-circle" size={133} color="blue" />
            <Ionicons name="md-checkmark-circle" size={155} color="gray" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});