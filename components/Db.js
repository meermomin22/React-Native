import React, { useEffect, useState } from "react";
import { View, Text, Button, ScrollView, FlatList, StyleSheet } from "react-native"
const Dbjs = () =>{
    const [data, setData] = useState([])
    const GetApiData= async()=>{
        const url = "http://192.168.114.175:3000/users"
        let result = await fetch(url);
        result = await result.json();
        setData(result)
    }
    useEffect(()=>{
        GetApiData();
    },[])
    return(
        <View>
            <Text style={{fontSize:40}}>Dbjson</Text>
            {
                data.length ?
                data.map((item)=>
                    <View style={{borderBottomWidth:3}}>
                        <Text>{item?.id}</Text>
                        <Text>{item?.name}</Text>
                        <Text>{item?.address}</Text>
                        <Text>{item?.email}</Text>
                    </View>
                ) 
                : null
            }
        </View>
        
    )
}
        
export default Dbjs