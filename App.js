
import React from "react";
import { View, Text, StatusBar, SafeAreaView , StyleSheet,
 TouchableOpacity,
ScrollView} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import IconSet from "@expo/vector-icons/build/FontAwesome5";
import HomeScreen from "./screns/HomeView";


export default function App(){


return (
    <SafeAreaView>
<View style={styles.fontview}>
    <StatusBar/>
    <TouchableOpacity><IconSet  style={styles.iconSet1} name="bars"/></TouchableOpacity>

    <Text style={styles.textdesign}>Daily News</Text>
<TouchableOpacity>

<Ionicons style ={styles.iconSet2} name="search" size={23} />
</TouchableOpacity>
   <TouchableOpacity>
   <Ionicons style ={styles.iconSet3} name ="settings" size={23}/>
   </TouchableOpacity>
</View>

<HomeScreen />

<Appscreen />
    </SafeAreaView>
)


}
const styles =StyleSheet.create(

    {

fontview:{
    display:'flex',
    flexDirection:'row',
 
    width:"100%",
    padding:5,
    backgroundColor:"#910d09",
},
iconSet1:{
    color:"#D21404",
    padding:10,
    fontSize:30,

}, 

iconSet2:{
padding:10,
marginLeft:35,
color:"#D21404",
},

iconSet3:{
    padding:10,
    marginLeft:30,
    color:"#D21404",
},
textdesign:{
  color:"#fff"  ,
  fontWeight:'bold',
  width:"50%",
  padding:10,
  fontSize:20,
  letterSpacing:2,
  textTransform:'uppercase',
  marginLeft:10,
  fontFamily:'sans-serif',
  
},

textDesigns:{
color:"#f5f5DC",
padding:3,
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
}


}
)