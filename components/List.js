import React from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList } from "react-native"
const List = () => {
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
            <Text style={{ fontSize: 30, fontFamily: 'normal', fontWeight: "bold", color: 'red', marginTop: 30 }}>Let's make list in react-native</Text>

            <FlatList
                data={users}

                renderItem={({ item }) => <Text style={styles.item}>Id= {item.id} // Name= {item.name}</Text>}

                keyExtractor={(item) => item.id}


            />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        fontSize: 25,
        margin: 5,
        padding: 8,
        fontWeight: 'bold',
        color: "white",
        backgroundColor: 'black',
        borderColor: 'blue',
        borderWidth: 4,
        borderRadius: 8,


    }
})
export default List