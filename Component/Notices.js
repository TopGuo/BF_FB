import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ListView,
  FlatList,
  Dimensions,

} from 'react-native';
import PubSub from 'pubsub-js';

import { Ionicons } from '@expo/vector-icons';

export default class Notices extends Component {
  static navigationOptions = {
    title: '信息',
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
          <Image source={require('../assets/image/icon.png')} />
        )
      }
      else {
        return (
          <Image source={require('../assets/image/icon1.png')} />
        )
      }
    }
  }
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    PubSub.subscribe('add', () => {
      console.log('发布信息');

    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>消息</Text>
        <Text>flexDirection:默认是让其子元素竖直轴排列</Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View>
            <Ionicons name="md-checkmark-circle" size={32} color="black" />
            <Ionicons name="md-checkmark-circle" size={55} color="green" />
            <Ionicons name="md-checkmark-circle" size={66} color="yellow" />

          </View>
          <View>
            <Ionicons name="md-checkmark-circle" size={77} color="green" />
            <Ionicons name="md-checkmark-circle" size={88} color="red" />
            <Ionicons name="md-checkmark-circle" size={99} color="green" />

          </View>
          <View>
            <Ionicons name="md-checkmark-circle" size={111} color="green" />
            <Ionicons name="md-checkmark-circle" size={133} color="blue" />
            <Ionicons name="md-checkmark-circle" size={155} color="gray" />
          </View>

        </View>



        {/* <Ionicons name="aircraft-landing" size={55} ></Ionicons> */}
        {/* <Image
          source={require('../assets/images/slack-icon.png')}
          fadeDuration={0}
          style={{ width: 20, height: 20 }}
        /> */}
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});