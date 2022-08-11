
import React, { useEffect, useState } from 'react';
import { ScrollView,ActivityIndicator, FlatList, StatusBar, Text, View, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';

import Appscreen from './alternativescreen';


export default function HomeScreen() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
      const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f7a94c818a804c3180eab5880c60c424');
      const json = await response.json();
      setData(json.articles);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);



  
    

  return (

    <SafeAreaView style={{ backgroundColor:"lightgray",}}>

<ScrollView style={styles.backgrud} horizontal= {true} >
<TouchableOpacity >
        <Text style={styles.textDesigns}>Latest</Text>
      </TouchableOpacity>
   
      <TouchableOpacity>
        <Text style={styles.textDesigns}>Top New</Text>
      </TouchableOpacity>
 
  
      <TouchableOpacity>
      <Text style={styles.textDesigns}>Video</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.textDesigns}></Text>
      </TouchableOpacity>

      <TouchableOpacity>
      <Text style={styles.textDesigns}>Entertaiment</Text>
      </TouchableOpacity>
  
      <TouchableOpacity>
      <Text style={styles.textDesigns}>Trending</Text>
      </TouchableOpacity>

 
</ScrollView> 

      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
        horizontal={true}
          renderItem={({ item }, index) => (
            <View>
                 <Image source={{uri: item.urlToImage}}
            style={styles.imagedesign} 
            
            />
            <Text style={styles.ImageText}>{item.description}</Text>
            </View>
     
            
          )}

        />
      )}




    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
 
      textdesign:{
        color:"#fff"  ,
        fontWeight:'bold',
        width:"50%",
        padding:2,
        fontSize:20,
        letterSpacing:2,
        textTransform:'uppercase',
        marginLeft:10,
        fontFamily:'sans-serif',
        
      },
      
      textDesigns:{
      color:"#f5f5DC",
      padding:2,
      fontSize:20,
      fontWeight:'bold',
      padding:20,
      
      },
      backgrud:{
      backgroundColor:"#b80f0a",
      borderStyle:'outset',
      borderColor:"#910d09",
      borderStyle: "solid",
      },
      onpree:{
          color:"green"
      },
      imagedesign:{

        width:390,
         height:300,
         padding:20,
        margin:10,
      },
      ImageText:{
color:"#fff",
fontSize:20,
padding:10,
position:'absolute',
fontWeight:'bold',
top:200,
width:"100%"
      },
      
})


