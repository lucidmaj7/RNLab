import React from 'react';
import {View,Text,Image, StyleSheet,Button ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';


const HeaderButton = (props)=>{
    return (
        <TouchableOpacity onPress={props.onPress}
            style = {{paddingHorizontal:15}}
            >
            <Icon name= {props.iconName} size={props.iconSize}/>
        </TouchableOpacity>
    );
}

export default HeaderButton;