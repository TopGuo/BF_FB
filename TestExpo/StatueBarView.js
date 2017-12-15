//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Constants } from 'expo';
// create a component
class StatueBarView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>MyClass</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#C2185B",
        height: Constants.statusBarHeight,
    },
});

//make this component available to the app
export default StatueBarView;
