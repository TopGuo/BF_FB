import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';


export default class LoginView extends Component {
  static navigationOptions = {
    title: '登录',
    headerTitleStyle: {
      alignSelf: 'center',
      color: '#fff',
    },
    headerStyle: {
      backgroundColor: '#0269D3',
    },
  }
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pwd: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <View>
            <Image
              style={styles.Image}
              source={require('../assets/image/user.png')} />
          </View>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.TextInput}
            placeholder="登录名"
            onChangeText={(name) => this.setState({ name })} />
          <TextInput
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            style={styles.TextInput1}
            placeholder="密码"
            onChangeText={(pwd) => this.setState({ pwd })}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ marginLeft: 70, marginTop: 20 }}
            onPress={() => {
              this.props.navigation.navigate('ForPwd')
            }}>
            <Text style={{ color: '#C5C5C5', fontSize: 20 }}>忘记密码</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 110, marginTop: 20 }}
            onPress={() => {
              this.props.navigation.navigate('Zhuce')
            }}>
            <Text style={{ color: '#C5C5C5', fontSize: 20 }}>注册新用户</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <TouchableHighlight
            style={styles.Denglu}
            underlayColor="#A0EBDE"
            onPress={() => {
              this.onLoginCheck();
            }}
          >
            <Text style={{ color: 'white' }}>登录</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
  onLoginCheck() {
    if (this.state.name == '' || this.state.pwd == '') {
      ToastAndroid.show('登录名或密码不能为空', ToastAndroid.SHORT);
    }
    else {
      const name = this.state.name;
      const pwd = this.state.pwd;
      this.props.navigation.navigate('MainView');
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Image: {
    alignItems: 'center',
    marginTop: 120,
    width: 100,
    height: 100,
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
  TextInput: {
    width: 350,
    height: 50,
    borderColor: '#C5C5C5',
    borderWidth: 1,
    marginTop: 40,
    borderRadius: 8,
    fontSize: 24,
  },
  TextInput1: {
    width: 350,
    height: 50,
    borderColor: '#C5C5C5',
    borderWidth: 1,
    marginTop: 25,
    borderRadius: 8,
    fontSize: 24,
  },
  Denglu: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 40,
    marginTop: 40,
    borderRadius: 8,
    backgroundColor: '#0269D3',
  },
});
