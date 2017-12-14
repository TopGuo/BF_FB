import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ListView,
    TextInput,
    Button,
} from 'react-native';



export default class Myself extends Component {
    static navigationOptions = {
        title: '我的',
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
                    <Image source={require('../assets/image/icon4.png')} />
                )
            }
            else {
                return (
                    <Image source={require('../assets/image/icon5.png')} />
                )
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>我的</Text>
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
    }
});