
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    ActivityIndicator,
    Text,
    StatusBar,Button
  } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const Item = ({ title, author,text }) =>(
    <View style={{flex:1 , backgroundColor:"green",marginVertical:10}}> 
        <Text>{`title: ${title}`}</Text>
        <Text>{`author: ${author}`}</Text>
        <Text>{`text: ${text}`}</Text>
    </View>
);
const URL = "http://192.168.111.148:8888/blogs/";
const HomeScreen = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [nextPage, setNextPage] = useState(null)
    const [prevPage, setPrevPage] = useState(null);
    const [curPage, setCurPage] = useState(URL);
    const renderItem = ( {item } ) =>(
        <Item  title={item.title} author={item.author} text={item.text} />
    );
    const refeshData = (url)=>{
        console.log("refeshing..");
        if (url==undefined)
        {
            alert("끝페이지..");
            return;
        }
        setLoading(false);
        fetch(url)
        .then((res)=>res.json())
        .then((json)=>{
            console.log(json);
            setPrevPage(json.previous);
            setNextPage(json.next);
            setCurPage(url);
            setData(json.results);
        }).finally(()=>{
            setLoading(false);
        });
    };
    useEffect(()=>{
        refeshData(URL);
    },[]);
    return (
       <SafeAreaView>
        <View >
            <View style={{  flexDirection:"row" }}>
                <Button title="새로고침" onPress={()=>refeshData(curPage)} ></Button>
                <Button title="이전" onPress={()=>refeshData(prevPage)} ></Button>
                <Button title="다음" onPress={()=>refeshData(nextPage)} ></Button>
            </View>
           <Text>dd</Text>  
                <FlatList
                    inverted = {false}
                    data = {data}
                    contentContainerStyle={{ alignSelf: 'stretch' }}
                    keyExtractor={(item,index)=> index +item.title}
                    renderItem = {renderItem}
                  
                    onRefresh = {()=>{
                        refeshData(curPage);
                    }}
                    refreshing={isLoading}
                />
        

      
           
        </View>  
        </SafeAreaView>
      
    );
}

export default HomeScreen;