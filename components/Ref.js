import React, {useRef} from "react";
import {View, Text, Button, StyleSheet, TextInput} from "react-native"
const Ref = ()=>{
    const Input= useRef();

    const UpdateInput =()=>{
        Input.current.focus();
        Input.current.setNativeProps({
            fontSize:30,
            backgroundColor:'khaki',
            color:"black"
        })
    }
    return(
        <View style={styles.container}>
           <TextInput placeholder="Enter Name" ref={Input} style= {styles.TextInput}/>
           <TextInput placeholder="Enter Password" ref={Input} style= {styles.TextInput}/>
           <Button title="Update Input" onPress={UpdateInput}/>
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        padding:15
    },
    TextInput:{
        borderWidth:3,
        borderColor:'red',
        marginBottom:10
        
    }
})
export default Ref