import React, {useState, useEffect} from "react";
import {View, Button, Text, StyleSheet, SafeAreaViewComponent} from "react-native";
const Post = ()=>{
    const PostData= async()=>{
        const url ="http://192.168.11.175:3000/users";
        const data={
            name:"Khan Momin Khan",
            address:"Kashmir",
            email:"Khanmomin@gmail.com"
        }
        let result = await fetch(url, {
            "method":"POST",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(data)
        })
        result = await result.json()
        
    }

    return(
        <View>
            <Text style={style.text}>This is an Api where we can update data to our Api using code only</Text>
            <Button title="Post Data" onPress={PostData}/>
        </View>
    )
}
const style= StyleSheet.create({
    text:{
        fontSize:30,
        color:"black"
    }
}) 
export default Post