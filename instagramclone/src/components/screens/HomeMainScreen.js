import React from 'react';
import {View,Text,Image, StyleSheet,Button,ScrollView } from 'react-native';
import HomeStory from '../presentation/HomeStory';
import InstaFeedContent from '../presentation/InstaFeedContent';

const style = StyleSheet.create({
  
  
    homeMainScreen:{
        backgroundColor:'white',
    },
});
const HomeMainScreen =({navigation})=>{
    return(
        <ScrollView style = {style.homeMainScreen}>
            <HomeStory></HomeStory>
            <InstaFeedContent></InstaFeedContent>
            <InstaFeedContent></InstaFeedContent>
            <InstaFeedContent></InstaFeedContent>
            <InstaFeedContent></InstaFeedContent>
            <InstaFeedContent></InstaFeedContent>
        </ScrollView>
    );
}

export default HomeMainScreen ;