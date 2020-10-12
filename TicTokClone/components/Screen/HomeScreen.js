import React from 'react';
import {
 View,
 Text,
 FlatList,
 StyleSheet, Dimensions,ImageBackground
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/*

<FlatList
  snapToAlignment={'top'}
  viewabilityConfig={{ itemVisiblePercentThreshold: 90 }}
  pagingEnabled={true}
  decelerationRate={'fast'}
  data={this.colorData}
  keyExtractor={(item, index) => `id_${index}`}
  initialNumToRender={maxVideosThreshold}
  style={inlineStyles.fullScreen}
  renderItem={this._renderItem}
  renderItem={({ item }) => <View style={[{ ...styles.fullHeight }, { backgroundColor: item }]} />}
/>



*/
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      image: require('../../assets/images/image1.jpg'),
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      image: require('../../assets/images/image2.jpg'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      image: require('../../assets/images/image3.jpg'),
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: 'Third Item',
        image: require('../../assets/images/image1.jpg'),
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d74',
        title: 'Third Item',
        image: require('../../assets/images/image1.jpg'),
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d62',
        title: 'Third Item',
        image: require('../../assets/images/image1.jpg'),
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d77',
        title: 'Third Item',
        image: require('../../assets/images/image1.jpg'),
      },
  ];
const Item = ({title, bgImage}) =>(
   
    <View style={{backgroundColor:"pink", height:HEIGHT,width:WIDTH,}}>
     
        <ImageBackground source={bgImage} style={{
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center",

        }}>
        <View style={{flex:1}}>

        </View>
        <View style={{flex:2}}>
            <View style={{flex:1 , flexDirection:"row"}}>
                <View style={{flex:4,  }}>
                    <View style={{flex :1, flexDirection:"column-reverse", paddingLeft:15, paddingRight:40}}>
                         <Text style={{color:"white",fontSize:18, marginBottom:40}}>
                            <Text style={{fontWeight:"600"}}>{`@helloWorld \n`}</Text>
                            <Text style={{fontWeight:"500"}}>우리는 떡상을 할 수 있을까요.. #떡상 #떡상 #떡상 #떡상 #떡상 #떡상 #떡상 #떡상 #떡상 </Text>
                         </Text>
                        
                    </View>

                </View>
                <View style={{flex:1, flexDirection:"column-reverse"}}>
                    <View style={{backgroundColor:"red", width:80,height:80,marginVertical:5,opacity:0.4}}></View>
                    <View style={{backgroundColor:"red", width:80,height:80,marginVertical:5,opacity:0.4}}></View>
                    <View style={{backgroundColor:"red", width:80,height:80,marginVertical:5,opacity:0.4}}></View>
                    <View style={{backgroundColor:"red", width:80,height:80,marginVertical:5,opacity:0.4}}></View>
                    <View style={{backgroundColor:"red", width:80,height:80,marginVertical:5,opacity:0.4}}></View>
                </View>
            </View>
         
        </View>
        </ImageBackground>
       
    </View>
    
);
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height-90;

const HomeScreen = () =>{
    return (
     
            <FlatList 
                   
                    snapToInterval={HEIGHT}
                    
                    decelerationRate={'fast'}
                    data = {DATA}
                    renderItem = { ({item})=> <Item title={item.title} bgImage={item.image}></Item>}
                    keyExtractor = {item =>item.id}
            />
 

      
    );
}

export default HomeScreen;