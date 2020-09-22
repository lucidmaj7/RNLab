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


function HomeScreen({navigation}){

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#BDD1DC' }}>
      <View style={{ flexDirection:'row', borderColor:'gray',borderBottomWidth:1,borderRightWidth:1,borderRadius:10,alignItems:'center' , justifyContent:'center', backgroundColor:'white', width: 200, height: 100}}>
        <Text style={{fontSize:20 , fontWeight:'bold'}}>hello</Text>
      </View>
      <Button
        title="Go to Details... "
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailScreen({navigation}){
  return (
    <View>
      <Text>Detail Screen</Text>
      <Button title="go to details again" onPress={()=>navigation.push('Details')}></Button>
      <Button title="go to back" onPress={()=>navigation.goBack()}></Button>
      <Button title="go to first screen" onPress={()=>navigation.popToTop()}></Button>
    </View>
  );
}

const Stack = createStackNavigator();
function App(){
  return(
 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}  options={{title: 'Overview'}}>
         
          </Stack.Screen>
          <Stack.Screen name="Details" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
 
  );
}

export default App;
