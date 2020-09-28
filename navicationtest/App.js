/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';


function HomeScreen({navigation, route}){
  useEffect(()=>{
    if(route.params?.post){

    }
  },[route.params?.post]);
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#BDD1DC' }}>
       <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
      <View style={{ flexDirection:'row', borderColor:'gray',borderBottomWidth:1,borderRightWidth:1,borderRadius:10,alignItems:'center' , justifyContent:'center', backgroundColor:'white', width: 200, height: 100}}>
        <Text style={{fontSize:20 , fontWeight:'bold'}}>hello</Text>
      </View>
      <Button
        title="Go to Details... "
        onPress={() => navigation.navigate('Details',{
          itemId: 83,
          otherParam: 'helllllloooo'
        })}
      />
      <Button title="Go Create Post.."
        onPress = {()=> navigation.navigate('CreatePost', {

        })}
      > </Button>
        <Button
        title="Set rTitle"
        onPress={() => navigation.setOptions({title:"set Title!~~"})}
      />

     
    </View>
  );
}

function DetailScreen({route,navigation}){
  const itemId = route.params.itemId;
  return (
    <View>
      <Text>Detail Screen {JSON.stringify(itemId)} {route.params.otherParam}</Text>
      <Button title="go to details again" onPress={()=>navigation.push('Details',{
        itemId: Math.floor(Math.random()*100)
      })}></Button>
      <Button title="go to back" onPress={()=>navigation.goBack()}></Button>
      <Button title="go to first screen" onPress={()=>navigation.popToTop()}></Button>
    </View>
  );
}
function CreatePostScreen({navigation, route}){
  const [postText, setPostText] = useState("");
  return(
    <View>
      <Button title="Done" onPress={()=>{
        navigation.navigate("Home",{ post:postText})
      }}></Button>
      <TextInput
        multiline
        placeholder = "크리에이트 포스트.."
        style= {{ height : 200, margin:10, padding:10 ,fontSize:20,backgroundColor:"white"}}
        value = {postText}
        onChangeText= {setPostText}
      >

      </TextInput>
      <Text style={{margin:10 , textAlign:"center",color:"red"}}>
        {postText}
      </Text>
    </View>
  );
}
const Stack = createStackNavigator();
function App(){
  return(
 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerStyle: {
            backgroundColor: '#f4511e',
          }, 
          headerTintColor:'yellow',
          headerTitleStyle: {
            fontWeight: 'bold',
            color:"yellow",
            fontSize:30
          },}}>
          <Stack.Screen name="Home" component={HomeScreen}  options={{title: 'Overview', headerRight:()=>(<Button title="헤더버튼입니다." onPress={()=>alert("hello")} ></Button>)}}>
         
          </Stack.Screen>
          <Stack.Screen name="Details" component={DetailScreen} initialParams={{itemId:33}} />
          <Stack.Screen name="CreatePost" component={CreatePostScreen} ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
 
  );
}

export default App;
