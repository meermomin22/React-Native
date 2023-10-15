import React from "react";
import {View, Text,Button, StyleSheet, Platform} from "react-native"
const Plattforms = ()=>{
    return(
        <View>
            <Text style={{fontSize:30}}>Plattform: {Platform.OS}</Text>
            {
                Platform.OS ?
                <View style={{backgroundColor:'red', height:80, width:80, marginLeft:100}}></View>
                :
                <View style={{backgroundColor:'green', height:80, width:80, marginLeft:100}}></View>
            }
            <Text style={styles.text}>Hello</Text>
            <Text style={{fontSize:20}}>{JSON.stringify(Platform)}</Text>
        </View>
    )
}
const styles= StyleSheet.create({
    text:{
        color:Platform.OS =="android" ? "blue":"red",
        fontSize:40
    }
})
export default Plattforms