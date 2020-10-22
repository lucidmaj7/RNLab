import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    TextInput,
    Header,
    ActivityIndicator,
    Text,
    StatusBar,Button,Image
  } from 'react-native';
const URL = "http://192.168.111.148:8888/blogs/";

const showImagePicker=(setImage)=>{
    const options = {
        title: 'Load Photo',
   
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
    ImagePicker.showImagePicker(options, (response) => {
      //  console.log('Response = ', response);
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
          Alert.alert(response.customButton);
        } else {
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          //alert(response.uri)
          setImage(response.uri);
        }
      });
};
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  const PostScreen= ()=>{
      const [title, setTitle] =useState("");
      const [author, setAutor] = useState("");
      const [text, setText] = useState("");
      const [image, setImageSource] = useState("");
      const onPost= ()=>{
        let photo = { uri: image}
        let formdata = new FormData();
        formdata.append("author",`${title}`);
        formdata.append("title",`${author}`);
        formdata.append("text",`${text}`);
       
        formdata.append("img", {uri: photo.uri, name: `${uuidv4()}.jpg`, type: 'image/jpeg'});
            fetch(URL,{
                method:'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'multipart/form-data',
                },body: formdata
            } ).then((res)=>res.json())
            .then((json)=>{
                console.log(json);
                setTitle("");
                setAutor("");
                setText("");
                setImageSource("");
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
              
              <Button onPress={()=>   showImagePicker(setImageSource)} title="이미지 선택"></Button>
              <Button onPress={()=>   onPost()} title="작성 완료"></Button>
              <Image style={{width:100,height:100}} source={{url:`${image}`}}></Image>
          </View>
          </SafeAreaView>
      );
  };

  export default PostScreen;

