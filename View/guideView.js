import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';

let image1 = require('../assets/guide/splash.png');
let image2 = require('../assets/guide/splash2.png');
let image3 = require('../assets/guide/splash3.png');

const { width, height } = Dimensions.get('window');
export default class guideView extends Component {
    static navigationOptions = {
        header: null,
    }
    constructor() {
        super();
    };
    render() {
        return (
            <ScrollView
                contentContainerStyle={styles.contentContainer}
                bounces={false}
                pagingEnabled={true}
                horizontal={true}>
                <Image source={image1}
                    style={styles.backgroundImage} />
                <Image source={image2} style={styles.backgroundImage} />
                <Image source={image3} style={[styles.backgroundImage, styles.btnOut]} >
                    
                </Image>

            </ScrollView>);
    }
};
var styles = StyleSheet.create({
    contentContainer: {
        width: width * 3,
        height: height,
    },
    backgroundImage: {
        width: width,
        height: height,
    },
    btnOut: {
        alignItems: 'center',
    },
    btn: {
        width: 150,
        height: 50,
        backgroundColor: '#90ee90',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 550,

    },
    btnText: {
        fontSize: 18,
        color: '#fff'
    },
});

{/* <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        this.props.navigation.navigate('MyTabNavigator');
                    }}
                >
                    <Text style={styles.btnText}>启动应用</Text>
                </TouchableOpacity> */}