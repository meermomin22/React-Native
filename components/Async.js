import React, { useState } from "react";
import {View, Text, Button, TextInput, StyleSheet} from "react-native";
// import {AsyncStorage} from "@react-native-async-storage/async-storage";
const Async = ()=>{

    return(
        <View style={{marginLeft:30,marginRight:30, marginTop:40}}>
             <Text style={{fontSize:30, color:'black'}}>Async Storage with React Native</Text>
             <Button title="Set Data"/>
             <Button title="Get Data"/>
        </View>
    )
}
export default Async