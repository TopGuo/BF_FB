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