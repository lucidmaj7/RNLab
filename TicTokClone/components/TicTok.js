import React from 'react';
import {
 View,
 Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screen/HomeScreen';
import Icon from 'react-native-vector-icons/dist/Ionicons';
const Tab = createBottomTabNavigator();
const tabList =[{
    name: "home",
    label:"홈",
    component : HomeScreen,
    inactiveIcon: 'home-outline',
    activeIcon : 'home-sharp',

},
{
    name: "Search",
    label:"검색",
    component : HomeScreen,
    inactiveIcon: 'search-outline',
    activeIcon : 'search',

},
{
    name: "Post",
    label:"",
    component : HomeScreen,
    inactiveIcon: 'add-outline',
    activeIcon : 'add-sharp',

},
{
    name: "DM",
    label:"받은 내역",
    component : HomeScreen,
    inactiveIcon: 'home-outline',
    activeIcon : 'home-sharp',

},
{
    name: "Profile",
    component : HomeScreen,
    label:"나",
    inactiveIcon: 'home-outline',
    activeIcon : 'home-sharp',

},];
const TicTok = () =>{
    return (
    <NavigationContainer>
        <Tab.Navigator tabBarOptions={{ style: { height:90,backgroundColor:"black",borderTopWidth: 0}}}>
            {
                tabList.map(tab =>(
                    
                    <Tab.Screen  key = {`screen--${tab.name}`} name={tab.name} component={tab.component}
                    options = {{
                         tabBarLabel:()=>{return(<Text style={{color:"white", fontSize:10}}>{tab.label}</Text>)},         
                        tabBarIcon: ({ focused })=>{
                        return( 
                            <Icon name={ focused ? tab.activeIcon : tab.inactiveIcon } size={30} color={'white'} />
                        )
                     }}}
                    />
                ))
            }
          
        </Tab.Navigator>
    </NavigationContainer>
    );
}

export default TicTok;