/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Button,
 } from 'react-native';
 import ToastModule from './Toast';
 
 function App() {
   const onPress = () => {
     console.log( ToastModule) ;
     ToastModule.show('Hello~~',ToastModule.SHORT);
   };
   const version = ToastModule.VERSION;
   console.log(version);
   return (
     <SafeAreaView>
       <Text>hello~~</Text>
       <Text>{version}</Text>
       <Button title="Press!!!" onPress={onPress} />
     </SafeAreaView>
   );
 }
 
 export default App;