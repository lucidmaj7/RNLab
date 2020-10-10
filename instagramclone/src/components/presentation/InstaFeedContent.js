import React,{Dimensions,} from 'react';
import {View,Text,Image, StyleSheet,Button,ScrollView ,TouchableOpacity} from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import COLORS from '../../color';
import HeaderButton from './HeaderButton';


const style = StyleSheet.create({
    instaFeedContent:{
        
    },
    instaFeedContentHeader:{
        paddingLeft:10,
        paddingRight:10,
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

    },
    likeContainer:{
        marginHorizontal:10,
        flex:1,
        flexDirection:'row',
        alignItems:"center",
    },
    likeProfileImage:{
        marginRight:10,
        width:24,
        height:24,
        borderRadius:12,
    },
    contentMsgContainer:{
        flex:1,
        flexDirection:"row",
        marginHorizontal:10,
        marginTop:8,
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
const FeedHeader = (props) =>{
    return (
        <View style={style.instaFeedContentHeader}>
            <Image style={style.headerProfileImage} source={props.profileImagePath} />
            <View style={style.headerProfileAccoutTextContainer}>
                <Text style={style.headerProfileAccoutText}>{props.account}</Text>
            </View>
            <HeaderButton iconName="ellipsis-horizontal" iconSize={22} horizontalPadding={8}></HeaderButton>
        </View>
    );
}
const Likes = (props) => {
    return (
        <View style={style.likeContainer} >
            <Image style={style.likeProfileImage} source={require('../../../assets/profiles/profile_1.png')}></Image>
            <Text>
            <Text style={{
                fontWeight:"700",
            }}>{`jerry` }</Text>
            <Text>{`님 외` }</Text>
            <Text style={{
                fontWeight:"700",
            }}>{`127명`}</Text>
            <Text>{`이 좋아합니다.` }</Text>
            </Text>
        </View>
    );
}
const ContentMsg = (props) =>{
    return(
        <View style={style.contentMsgContainer}>
            <Text>
                <Text style={{
                    fontSize:14,
                    fontWeight:'600',
                 
                }}>{`jerry_jerry `}</Text>
                <Text
                 style={{
                    fontSize:14,
                    fontWeight:'300',
                 
                }}
                >{`오늘 진짜 재미없는 하루가 지나갔네요. 리엑트네이티브로 인스타그램클론 코딩하기..어렵습니다.`}</Text>
            </Text>
        </View>
    );
}


const InstaFeedContent =(props) =>{
    return(
    <View style={style.instaFeedContent}>
        <FeedHeader account={`jerry_jerry`} profileImagePath={require('../../../assets/profiles/profile_1.png')}></FeedHeader>
        <View style={style.feedImageContainer}>
            <Image style={style.feedImage} source={require('../../../assets/feeds/feed1.png')} />
        </View>
        <FeedBack/>
        <Likes/>
        <ContentMsg/>
        <Text>
            8
        </Text>
    </View>
    );
}
export default InstaFeedContent ;