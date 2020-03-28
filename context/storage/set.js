import { AsyncStorage } from "react-native"

const set = async (key, item, callback) => {
    try {
       let item = await AsyncStorage.setItem(key, item)
       callback(undefined, item)
    } catch (e) {
        callback('Error')
    }
}

export default set