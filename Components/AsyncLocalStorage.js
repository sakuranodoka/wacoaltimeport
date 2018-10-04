import {AsyncStorage} from 'react-native'

export default class AsyncLocalStorage {
    static setItem = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value)
            return true
        } catch (error) {
            console.error('imagepathstatus', `Error saving data ${err}`)
            return false
        }
    }

    static getItem = async (key) => {
        try {
            return await AsyncStorage.getItem(key)
        } catch (err) {
            console.error('imagepathstatus', `Error get item ${err}`)
            return null
        }
    }

    static removeItem = async (key) => {
        try {
            await AsyncStorage.removeItem(key)
            return true
        } catch (err) {
            console.error('imagepathstatus', `The error is: ${err}`)
            return false
        }
    }
}