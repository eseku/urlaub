import { AsyncStorage } from "react-native"

const get = async (key, callback) => {
    try {
       let item = await AsyncStorage.getItem(key)
       callback(undefined, item)
    } catch (e) {
        callback('Error')
    }
}

export default get