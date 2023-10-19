import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView, FlatList } from "react-native"
const ApiFlatList = () => {
    const [data, setData] = useState([])
    const getAPIData = async () => {
        const url = "http://jsonplaceholder.typicode.com/posts"
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }
    useEffect(() => {
        getAPIData();

    }, []);

    return (
        <View>
            <Text style={{ fontSize: 40, marginLeft:130 }}>Flat List</Text>
            {
                data.length ?
                    <FlatList
                        data={data}
                        renderItem={({ item }) =>
                            <View style={{ borderWidth:3,borderBottomColor:'blue', borderBottomWidth:2, margin:10}}>
                                <Text style={{ fontSize: 40, backgroundColor:'khaki' }}>{item.id}</Text>
                                <Text style={{ fontSize: 20 }}>{item.title}</Text>
                                <Text style={{ fontSize: 20, borderWidth:1, backgroundColor:'khaki'}}>{item.body}</Text>

                            </View>
                        }
                    /> : null
            }
        </View>
    )
}
export default ApiFlatList