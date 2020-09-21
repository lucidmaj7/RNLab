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
  Text,
  StatusBar, Button
} from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function MyComponent(props){
  let [count, setCount]  = useState(0);
  return(
  <View>
      <Button style={{fontSize:100 }} onPress={
        ()=>{
          if(props.onClickButton)
          {
            props.onClickButton();
          }
          setCount(++count);
        }
      } title={props.title}color="red"></Button>
      <Text style={{fontSize:100 }}>{count}</Text>
  </View >);
}

function MyCounter(props){
  let [count,setCount] = useState(0);
  useEffect(()=>{
    const id = setInterval(()=> setCount(++count),1000);
    return ()=> clearInterval(id);
  },[]);
  return(
    <View>
        <Text  style= { { fontSize:100, color:"red", textAlign:"center"}} >{count}</Text>
        <Button title="reset" onPress={()=>setCount(0)}></Button>
    </View>
  );
}

function BoxUI(props){
  const style = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    box:{
      width:150,
      height: 150,
      backgroundColor: 'blue',
      borderColor: 'black',
      borderRadius: 10,
    }
  });
  return (
    <View style = {style.container} >
        <View style= {style.box}>
        </View>
    </View>
  );
}
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{backgroundColor:"pink"}}>
        <MyComponent title="hello! press!ff!"></MyComponent>
        <MyComponent title="32323" onClickButton={()=>{
           
        }}></MyComponent>
        <MyCounter></MyCounter>
        <BoxUI></BoxUI>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
