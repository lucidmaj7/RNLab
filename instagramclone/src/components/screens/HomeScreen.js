import React from 'react';
import {View,Text,Image, StyleSheet,Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import COLORS from '../../color';
import HeaderButton from '../presentation/HeaderButton';
import DMMainScreen from './DMScreen';
import HomeMainScreen from './HomeMainScreen';
const HomeStack = createStackNavigator();
const Assets ={
    HeaderLogo : require('../../../assets/instagram-logo.png')
};


const style = StyleSheet.create({
    header:{
        backgroundColor: COLORS.LightGray,
    },
    headerLogo:{
        height:30,
        width:135,
    },
    
});

const HomeScreen = ({navigation}) =>{
    return(
      <HomeStack.Navigator>
          <HomeStack.Screen 
            name= "Instagram"
            component = {HomeMainScreen}
            options = {{
                headerStyle : style.header,
                headerRight: ()=><HeaderButton onPress={()=>navigation.navigate('DM')} iconName='paper-plane-outline' iconSize={30} />,
                headerLeft: ()=><HeaderButton iconName='camera-outline' iconSize={30} />,
                headerTitle: ()=><Image style={style.headerLogo} source={Assets.HeaderLogo}/>
            } }
        
          />
          <HomeStack.Screen
            name="DM"
            component = {DMMainScreen}
            options = {{
                headerStyle : style.header,
                headerLeft: ()=><HeaderButton iconName='chevron-back-outline' onPress={()=> navigation.goBack()} iconSize={30} />,
                headerTitle: "Message" }}
            />
    
      </HomeStack.Navigator>
    );

}
export default HomeScreen;