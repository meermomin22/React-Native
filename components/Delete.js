import React, { useEffect, useState } from "react";
import { View, Text, Button, ScrollView, FlatList, StyleSheet, TextInput } from "react-native";
const Delete = () => {
    const DeleteUser = async () => {
        const url = "http://192.168.208.175:3000/users/9";
        let result = await fetch(url, {
            "method": "Delete"
        })
    }
    return (
        <View >
            <Text style={{fontSize:30, color:"blue"}}>This is delete Api</Text>
            <Button title="Delete" onPress={() => DeleteUser()} />
        </View>
    )
}

export default Delete