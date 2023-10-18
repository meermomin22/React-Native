import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
const Api22 = () => {

    const [data, setData] = useState(undefined)
    const getAPIData =async () => {

        const daata = [
            {
                id:1,
                name:'Momin'
            },
            {
                id:2,
                name:'Momin Nabi'
            },
            {
                id:3,
                name:'Momin Nabi Mir'
            }
        ]
        let result = await fetch(daata)
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
                data ? <View style={{borderWidth:20,borderColor:'blue'}}></View>:null
            }
        </View>
    )
}
export default Api22
