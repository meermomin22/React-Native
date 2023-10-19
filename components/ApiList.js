import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native"
const ApiList = () => {
    const [data, setData] = useState(undefined)
    const APIData = async () => {
        const url = "http://jsonplaceholder.typicode.com/posts"
        let result = await fetch(url);
        result = await result.json();
        setData(result)
    }
    useEffect(() => {
        APIData()
    }, [])
    return (
        <ScrollView>
            <Text style={Styles.text} >List with API</Text>
            {
                data.length ?
                    data.map((item) =>
                        <View style={Styles.list}>
                            <Text style={{ color: 'blue', fontSize: 20, marginLeft: 20 }}> Id : {item.id}</Text>
                            <Text style={Styles.text1}> userIId : {item.userId}</Text>
                            <Text style={Styles.text1}> Title : {item.title}</Text>
                            <Text style={Styles.text1}> Body : {item.body}</Text>
                        </View>

                    )
                    : null
            }

        </ScrollView>
    )

}

const Info = () => {
    return (
        <View>
            <Text>Hiiiii</Text>
        </View>
    )
}
const Styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 60,
        marginLeft: 60
    },
    text1: {
        color: 'black',
        fontSize: 20,
        marginLeft: 40
    },
    list: {
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 20,
        borderBottomColor: 'blue',
        margin: 30
    }
})
export default ApiList