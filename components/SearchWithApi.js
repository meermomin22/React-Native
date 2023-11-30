import React, { useState } from "react";
import {View, Text, Button, TextInput, StyleSheet} from "react-native"
const Search = ()=>{
    const [data, setData]= useState([])
    const SearchUser= async(text)=>{
        const url = `http://192.168.220.175:3000/users?q=${text}`;
        let result = await fetch(url)
        result = await result.json();
        if(result){
            setData(result)
        }
    }
    return(
        <View style={{flex:1}}>
            <TextInput style={{borderColor:"skyblue", borderWidth:4, fontSize:30}} placeholder="Search"
              onChangeText={(text)=>SearchUser(text)}/>
            {
                data.length?
                data.map((item)=><View style={{justifyContent:'center', alignItems:'center', borderWidth:1,backgroundColor:"khaki", marginBottom:4}}>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text}>{item.address}</Text>
                    <Text style={styles.text}>{item.email}</Text>
                </View>) :null
            }
            
        </View>
    )
}
const styles= StyleSheet.create({
    text:{
        fontSize:20,
        color:'black'
    }
})
export default Search