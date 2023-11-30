import React from "react";
import {View, Text, Button, StyleSheet, Image, ScrollView} from "react-native";
const Product =(props)=>{
    const item =props.item
    return(
        <View style={{alignItems:'center', borderBottomColor:'black', borderBottomWidth:3,padding:15}}>
          <Text>{item.name}</Text>
          <Text>{item.color}</Text>
          <Text>{item.price}</Text>
          <Text>{item.ram}</Text>
          <Image style={{width:100, height:100}} source={{uri:item.image}}></Image>
          <Button title="Add to Cart"/>
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1
    },
    text:{
        fontSize:20,
        color:'black'
    }
})
export default Product