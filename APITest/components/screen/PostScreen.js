import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    TextInput,
    Header,
    ActivityIndicator,
    Text,
    StatusBar,Button
  } from 'react-native';
const URL = "http://192.168.111.148:8888/blogs/";
  const PostScreen= ()=>{
      const [title, setTitle] =useState("");
      const [author, setAutor] = useState("");
      const [text, setText] = useState("");
      const onPost= ()=>{
            fetch(URL,{
                method:'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json',
                },body: JSON.stringify({
                    "author": title,
                    "title": author,
                    "text": text
                })
            } ).then((res)=>res.json())
            .then((json)=>{
                console.log(json);
                setTitle("");
                setAutor("");
                setText("");
                alert("성공!");
                
            }).catch((error)=>{
                alert(error);
            })
      };
     
      return (
          <SafeAreaView>
          <View>
            <Text style={{fontSize:20, fontWeight:"bold"}}>작성하기</Text>
              <Text>제목</Text>
              <TextInput onChangeText={ text => setTitle(text)} value={title} style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} ></TextInput>
              <Text>작성자</Text>
              <TextInput  onChangeText={ text => setAutor(text)} value={author} style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} ></TextInput>
              <Text>내용</Text>
              <TextInput onChangeText={ text => setText(text)} value={text} style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} ></TextInput>
              <Button onPress={()=>   onPost()} title="작성 완료"></Button>
          </View>
          </SafeAreaView>
      );
  };

  export default PostScreen;

