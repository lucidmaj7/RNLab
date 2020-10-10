import React from 'react';
import {
 View,
 Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screen/HomeScreen';
const Tab = createBottomTabNavigator();
const TicTok = () =>{
    return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
    </NavigationContainer>
    );
}

export default TicTok;