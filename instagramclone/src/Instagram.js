import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text } from 'react-native';


import HomeScreen from './components/screens/HomeScreen';
import ActivityScreen from './components/screens/ActivityScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import COLORS from './color'
const Tab = createBottomTabNavigator();

const TabScreenList = [
   {
      name : "Home",
      component : HomeScreen,
      inactiveIcon: 'home-outline',
      activeIcon : 'home-sharp',
   },
   {
      name : "Search",
      component : HomeScreen,
      inactiveIcon: 'search-outline',
      activeIcon : 'search',

   },
   {
      name : "Post",
      component : HomeScreen,
      inactiveIcon: 'add-circle-outline',
      activeIcon : 'add-circle',
   },
   {
      name : "Activity",
      component : ActivityScreen,
      inactiveIcon: 'heart-outline',
      activeIcon : 'heart',
   },
   {
      name : "Profile",
      component : ActivityScreen,
      inactiveIcon: 'person-circle-outline',
      activeIcon : 'person-circle',
   },
];

const Instagram = () =>{
   return (
      <NavigationContainer>
         <Tab.Navigator >
            {
               TabScreenList.map(screen =>(
                  <Tab.Screen 
                  key = {`screen--${screen.name}`}
                  name = {screen.name}
                  component = {screen.component}
                  options = {{
                  
                     tabBarLabel : () => null,
                     tabBarIcon: ({ focused })=>{
                     return( <Icon name={ focused ? screen.activeIcon : screen.inactiveIcon } size={28} color={'black'} />)
                  }}}
                  />
               ))
            }
         </Tab.Navigator>
      </NavigationContainer>
    );
    
  }


export default Instagram;