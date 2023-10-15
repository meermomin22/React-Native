import React, { useEffect, useState, Component } from "react";
import { Text, View, Button, Alert } from 'react-native'
const Hook = () => {
    const [count, setCount] = useState(0);
    useEffect(() => (
        console.warn("Welcome to Hook")
    ), [])
    return (
        <View>
            <Text style={{ fontSize: 30, color: 'red' }}>Thiss is Hook {count}</Text>
            <Button title='update count' onPress={() => setCount(count + 1)} />

        </View>
    )
}
export default Hook