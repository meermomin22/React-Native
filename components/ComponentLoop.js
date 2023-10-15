import React from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList } from "react-native"
const Component = () => {
    const users = [
        {
            id: "100",
            name: "Meer Momin"
        },
        {
            id: "200",
            name: "Meer Shahzaib"
        },
        {
            id: "300",
            name: "Dar Faheem"
        },
        {
            id: "400",
            name: "Lone Firdous"
        },
        {
            id: "500",
            name: "Abu-Abdullah"
        }
    ]
    return (
        <View>
            <Text style={{ fontSize: 30, color: 'black', fontWeight: "bold", paddingLeft: 70 }}>Component in loop with Flatlist</Text>
            <FlatList
                data={users}
                renderItem={({ item }) => <UserData item={item} />} />
        </View>
    )
}
const UserData = (props) => {
    const item = props.item;
    return (
        <View style={styles.box}>
            <Text style={styles.style}>{item.name}</Text>
            <Text style={styles.style}>{item.id}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    style: {
        fontSize: 20,
        fontFamily: "normal",
        fontWeight: 'bold',
        marginLeft: 6,
        color: 'blue',
        flex: 1,
        flexDirection: 'row',
        textAlign: 'center'

    },
    box: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'red',
        margin: 3,
        backgroundColor: "khaki"
    }
})
export default Component

