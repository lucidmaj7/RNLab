import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

function SecondHome({navigation}){
  return(
    <View>
       <Text>SecondHome!</Text>
    </View>
  );
}
function HomeMain({navigation}){
  return ( 
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

  <Text>Home!</Text>
  <Button title="gogogo" onPress={()=>navigation.push('HomeMain')}></Button>
  </View>)
  ;
}
function HomeScreen({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain" component={HomeMain}></Stack.Screen>
      
    </Stack.Navigator>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
