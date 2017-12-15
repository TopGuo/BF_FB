import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ListView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';


export default class Setup extends Component {
  static navigationOptions = {
    title: '设置',
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
          <Image source={require('../assets/image/icon6.png')} />
        )
      }
      else {
        return (
          <Image source={require('../assets/image/icon7.png')} />
        )
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>设置</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('StatueBarView');
          }}
        >
          <Text>进入状态栏</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ backgroundColor: 'red' }}
          onPress={() => {

            this.props.navigation.navigate('NavigationDemo');
          }}
        >
          <Text>NavigationDemo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  h: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  leftView: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  lineview: {
    height: 2,
    backgroundColor: '#CCCCCC',
    width: Dimensions.get('window').width,
  },
  text: {
    marginLeft: 30,
    fontSize: 20,
    width: 90,
  },
  i: {
    height: 45,
    width: 45,
    marginLeft: 20,
    borderRadius: 50,
  },
  rig: {
    width: 15,
    height: 20,
    marginTop: 2.5,
    marginLeft: 315,
    backgroundColor: 'black',
  },
  rigMyUserPic: {
    marginLeft: 305,
    width: 40,
    height: 40,
    borderRadius: 50
  },
});