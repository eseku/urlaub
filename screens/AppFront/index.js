import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import Home from './Home'

// navigator
const {Navigator, Screen} = createStackNavigator()

const AppNavigator = () => (
    <Navigator
        initialRouteName={"Home"}
        screenOptions={{
            headerShown: false,
            gestureEnabled: true
        }}
    >
        <Screen name="Home" component={Home} />
    </Navigator>
)

export default AppNavigator