import React, {useState} from "react";
import {View, Text, ScrollView, Image, Button} from "react-native";
const Names = ()=>{
    const [oldP, newP] = useState("")
    function setUpName(){
        if(oldP == ""){
            newP("Mushtaq Sir")
        } else{
           newP("")
        }
    }
    return(
        <View>
            <Text style={{fontSize:20, color:'red'}}>Name of our Principal is::: {oldP}</Text>
            <Button  title="Show name" onPress ={setUpName}></Button>
        </View>
    )
}
export default Names