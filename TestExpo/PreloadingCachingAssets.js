//import liraries
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import { AppLoading, Asset, Font } from 'expo';//引入expo
import { FontAwesome } from '@expo/vector-icons';//引入矢量图

function cacheImages(images) {
    return images.map(image => {
        if (typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });
}

function cacheFonts(fonts) {
    return fonts.map(font => Font.loadAsync(font));
}
// create a component
class PreloadingCachingAssets extends Component {
    state = {
        isReady: false,
    };
    async _loadAssetsAsync() {
        const imageAssets = cacheImages([
            'http://images.cnblogs.com/cnblogs_com/gdsblog/1129111/o_topbirds_1.jpg',
            require('../assets/images/circle.jpg'),
        ]);

        const fontAssets = cacheFonts([FontAwesome.font]);

        await Promise.all([...imageAssets, ...fontAssets]);
    }
    render() {
        if (!this.state.isReady) {
            console.log(this.state.isReady)
            return (
                <AppLoading
                    startAsync={this._loadAssetsAsync}
                    onFinish={() => this.setState({ isReady: true })}
                    onError={console.warn}
                />
            );
        }
        return (
            <View style={styles.container}>
                <Text>资源预加载和缓存</Text>
                {/* <View>
                    <Text>Hello world, this is my app.</Text>
                </View> */}
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default PreloadingCachingAssets;
