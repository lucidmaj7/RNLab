import React from 'react';
import {View,Text,Image, StyleSheet,Button,ScrollView } from 'react-native';
import HomeStory from '../presentation/HomeStory';

const style = StyleSheet.create({
  
  
    homeMainScreen:{
        backgroundColor:'white',
    },
});
const HomeMainScreen =({navigation})=>{
    return(
        <ScrollView style = {style.homeMainScreen}>
            <HomeStory></HomeStory>
            
        </ScrollView>
    );
}

export default HomeMainScreen ;