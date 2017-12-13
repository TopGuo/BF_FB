import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ListView,
} from 'react-native';


export default class Friends extends Component {
  static navigationOptions={
    title:'朋友',
    headerStyle:{
      backgroundColor:'#0269D3',
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
  constructor(props){
    super(props);
    
  }
  
  render() {
    return (
      <View style={styles.container}>
       <Text>朋友</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});