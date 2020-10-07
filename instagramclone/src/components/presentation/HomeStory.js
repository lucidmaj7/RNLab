import { Assets } from '@react-navigation/stack';
import React from 'react';
import {View,Text,Image, StyleSheet,Button,ScrollView ,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../color'

const StoryData = [
    {
        profileImage : require('../../../assets/profiles/profile_1.png'),
        account:'jerry_jerry',
    },
    {
        profileImage : require('../../../assets/profiles/profile_1.png'),
        account:'jerry_jerry2',
    },
    {
        profileImage : require('../../../assets/profiles/profile_1.png'),
        account:'jerry_jerry3',
    },
    {
        profileImage : require('../../../assets/profiles/profile_1.png'),
        account:'jerry_jerry4',
    },
    {
        profileImage : require('../../../assets/profiles/profile_1.png'),
        account:'jerry_jerry5',
    },
    {
        profileImage : require('../../../assets/profiles/profile_1.png'),
        account:'jerry_jerry',
    },
    {
        profileImage : require('../../../assets/profiles/profile_1.png'),
        account:'jerry_jerry',
    },
];

const style = StyleSheet.create({
  
    homeStory:{
        backgroundColor:'white',
        height: 112,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.BorderGray,
     
    },
    profileImage:{
        width:72,
        height:72,
        borderRadius: 72/2,
        borderColor:'white',
        borderWidth:2,
    },
    storyProfile:{
        flex: 1,
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:8,
        marginRight: 8,
    },
    profileImageContainer:{
        backgroundColor:"red",
        width:76,
        height:76,
        borderRadius: 78/2,
        justifyContent:"center",
        alignItems:"center"
    },
    prifileAccountText:{
        fontSize: 12,
        marginTop: 6
    }
});
const StoryProfile = (props)=>{

    return(
        <TouchableOpacity style={style.storyProfile}>
            <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} colors={['#950085', '#F8A100']} style={style.profileImageContainer}>
                <Image style={style.profileImage} source={props.profileImage}></Image>
            </LinearGradient>
            <Text style={style.prifileAccountText}>{props.account}</Text>
        </TouchableOpacity>
    );

}

const HomeStory =()=>{
    let key =0;
    return (
        <ScrollView horizontal={true} style = {style.homeStory}>
            {
                
                StoryData.map(story=>(
                    <StoryProfile 
                        key = {`story--${key++}`}
                        profileImage ={story.profileImage}
                        account = {story.account}
                    />
                ))
            }
            <StoryProfile />
        </ScrollView>
    );
}
export default HomeStory;