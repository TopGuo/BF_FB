import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Asset, AppLoading, Notifications } from 'expo';

export default class ApploadingView extends Component {
  state = {
    isReady: false,
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
        <Image source={require('../assets/images/rnicon.png')} />
        <Image source={require('../assets/images/user.png')} />
        <TouchableOpacity
          style={styles.qidongBtn}
          onPress={() => {

            this.props.navigation.navigate('LoginView');
          }}
        >
          <Text>启动应用程序</Text>
        </TouchableOpacity>
      </View>
    );
  }



  async _cacheResourcesAsync() {
    const images = [
      require('../assets/images/rnicon.png'),
      require('../assets/images/user.png'),
    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    let token = await Notifications.getExpoPushTokenAsync();
    
    const postnotifactionurl = "https://exp.host/--/api/v2/push/send";
    //拿到token发一个请求
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'accept-encoding': 'gzip',
    }
    const postValue = {
      to: "LQKDYONdXtWeE50Lr00Ouf",
      title: "问候",
      body: "你好",
    };
    const jsonData = JSON.stringify(postValue);
    fetch(postnotifactionurl, {
      method: 'POST',
      headers: headers,
      body: jsonData,
    })
      .then((respons) => {
        return respons.json();
      })
      .then((jsonData) => {
        console.log(jsonData);

      })
      .catch((error) => {
        console.log(error);

      })

    console.log('token:' + token)
    //token:ExponentPushToken[LQKDYONdXtWeE50Lr00Ouf]
    // console.log('异步加载资源');
    // for (let index = 0; index <=10 ; index++) {
    //  console.log('加载资源'+index)
    // }
    return Promise.all(cacheImages)

  }
}

const styles = StyleSheet.create({
  qidongBtn: {
    // width:30,
    // height:15,
    marginTop: 20,
    backgroundColor: 'green'
  }
});

