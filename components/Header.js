import React from "react";
import {View, Text, Button, StyleSheet, ScrollView} from "react-native";
const Header =()=>{
    return(
        <View>
            <Text style={styles.text}>0</Text>
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1
    },
    text:{
        fontSize:20,
        color:'black',
        textAlign:'right',
        padding:10,
        backgroundColor:'orange'
    }
})
export default Header