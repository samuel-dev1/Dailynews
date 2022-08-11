import React, {useState, useEffect} from "react";


import { View, Text, FlatList, Image, StyleSheet, SafeAreaView } from "react-native";






Appscreen= ()=>{
    const [mydata, useData] = useState([]);
    const [loading , setLoading] = useState(true)
  
    const getApi = async () => {
       try {
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=ng&apiKey=f7a94c818a804c3180eab5880c60c424")
               const json = await response.json();
        useData(json.articles);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      getApi();
    }, []);
  

    return(

        <FlatList
        style={styles.total}
          data={mydata}
          renderItem={({ item }, index) => (
            <View style ={{display:"flex", flexDirection:"row",
            padding:10,
            width:"100%",
            borderStyle:"solid",
            backgroundColor:"#fff",
            margin:4,


            }}>
                 <Image source={{uri: item.urlToImage}} 
            style ={styles.image}
            />
            <Text style={styles.text}>{item.title}</Text>

            </View>

     
            
          )}

        />


      )}


const styles = StyleSheet.create({

text:{
fontSize:20,  
width:"60%",
color:"#789",
fontWeight:'bold',
padding:10,
margin:5,
height:120,
},

image:{
height:120,
width:"40%",
padding:2,
},
})



export default  Appscreen;
