import React, { useEffect, useState } from "react";
import { View, Text, Button, ScrollView, FlatList, StyleSheet } from "react-native"
const GetApi = () => {
    const [data, setData] = useState([])
    const getAPIData = async () => {
        const url = "http://172.24.192.1:3000/users";
        let result = await fetch(url);
        result = await result.json();
        setData(result)
    }
    useEffect(() => {
        getAPIData();
    })
    return (
        <ScrollView>
            <Text style={styles.text}>This is Get Api Data</Text>
            {
                data.length ?

                    <FlatList>
                        data = {data};
                        renderItem= {({ item }) => {
                            <View>
                                <Text>{item.name}</Text>
                            </View>
                        }}
                    </FlatList>
                    : null
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 50,
        color: 'black'
    }
})
export default GetApi