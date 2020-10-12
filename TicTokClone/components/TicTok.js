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
        <Tab.Navigator tabBarOptions={{ style: { height:90,backgroundColor:"black", borderColor:"black"}}}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={HomeScreen} />
            <Tab.Screen name="Post" component={HomeScreen} />
            <Tab.Screen name="DM" component={HomeScreen} />
            <Tab.Screen name="Profile" component={HomeScreen} />
        </Tab.Navigator>
    </NavigationContainer>
    );
}

export default TicTok;