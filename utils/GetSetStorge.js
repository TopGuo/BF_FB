import {
    AsyncStorage,
} from 'react-native';

// 一个工具类
class GetSetStorge {
    /**
     * 异步保存
     */
    setStorgeAsync(key, value) {
        return new Promise((resolve, reject) => {
            AsyncStorage.setItem(key, value, (error) => {
                if (error) {
                    console.log('==========================');
                    console.log(`设置${key}失败${error}`);
                    console.log('==========================');
                    reject(`设置${key}失败${error}`);
                } else {
                    console.log('==========================');
                    console.log(`设置${key}成功`);
                    console.log('==========================');
                    resolve(true);
                }
            });
        });
    }
    /**
     * 异步获取
     */
    getStorgeAsync(key) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(key, (error, result) => {
                if (error) {
                    console.log('==========================');
                    console.log(`读取${key}失败` + error);
                    console.log('==========================');
                    reject(`读取${key}失败${error}`);
                } else {
                    console.log('==========================');
                    console.log(`读取${key}成功`);
                    console.log('==========================');
                    resolve(result);
                }
            });
        });

    }

}
export default new GetSetStorge();