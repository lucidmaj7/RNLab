import React,{Dimensions,} from 'react';
import {View,Text,Image, StyleSheet,Button,ScrollView ,TouchableOpacity} from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import COLORS from '../../color';
import HeaderButton from './HeaderButton';


const style = StyleSheet.create({
    instaFeedContent:{
        
    },
    instaFeedContentHeader:{
        paddingLeft:15,
        paddingRight:15,
        height:64,
        borderBottomWidth:1,
        borderBottomColor: COLORS.BorderGray,
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"

    },
    headerProfileImage:{
        width:40,
        height:40,
        borderRadius:20,
        borderColor:COLORS.BorderGray,
        borderWidth:1
    },
    headerProfileAccoutTextContainer:{
        flex:1,
    },
    headerProfileAccoutText:{
        fontSize:15,
        fontWeight:'500',
        marginLeft:10,
    },
   
    feedImage:{
        width: '100%',
        height: undefined,
        aspectRatio: 1,
   

    },
    feedBack:{
        flex: 1,
        height:60,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
        
    },
    feedBackLeftButtonsContainer:{
        flexDirection:"row",

    }
});
const FeedBack = () =>{
    return (
        <View style ={style.feedBack}>
            <View style={style.feedBackLeftButtonsContainer}>
                <HeaderButton iconName="heart-outline" iconSize={28} horizontalPadding={8}></HeaderButton>
                <HeaderButton iconName="chatbubble-outline" iconSize={28} horizontalPadding={8}></HeaderButton>
                <HeaderButton iconName="paper-plane-outline" iconSize={28} horizontalPadding={8}></HeaderButton>
            </View>
            <HeaderButton iconName="bookmark-outline" iconSize={28}></HeaderButton>
        </View>
    );
}
const InstaFeedContent =(props) =>{
    return(
    <View style={style.instaFeedContent}>
        <View style={style.instaFeedContentHeader}>
            <Image style={style.headerProfileImage} source={require('../../../assets/profiles/profile_1.png')} />
            <View style={style.headerProfileAccoutTextContainer}>
                 <Text style={style.headerProfileAccoutText}>jerry_jerry</Text>
            </View>
            <HeaderButton iconName="ellipsis-horizontal" iconSize={22} horizontalPadding={8}></HeaderButton>
        </View>
        <View style={style.feedImageContainer}>
            <Image style={style.feedImage} source={require('../../../assets/feeds/feed1.png')} />
        </View>
        <FeedBack></FeedBack>
    </View>
    );
}
export default InstaFeedContent ;