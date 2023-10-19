import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
const Api = () => {
    const [data, setData] = useState(undefined)
    const getAPIData = async () => {
        const url = "http://jsonplaceholder.typicode.com/posts/1"
        let result = await fetch(url)
        result = await result.json();
        setData(result)
    }
    useEffect(() => {
        getAPIData();
    }, [])
    return (
        <View>
            <Text style={{ fontSize: 30, color: 'black' }}>Call API Data </Text>
            {
                data ? <View style={{ borderWidth: 20, borderColor: 'blue' }}><Text style={{ fontSize: 30, color: 'black' }}>This is Api insidie a coloured box= {data.id},     {data.userId} ,               {data.title},             {data.body}</Text></View> : null
            }
        </View>
    )
}
export default Api
