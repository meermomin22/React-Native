import React, { useState, useEffect } from "react";
import { Text, View, Button, Alert } from 'react-native';
const Effect = () => {
    const [count, setCount] = useState(1);
    const [book, setBook] = useState(101);

    // useEffect(() => {
    //     console.warn('You just clicked Count Button')
    // }, [count]);
    // useEffect(() => {
    //     console.warn('You just clicked Book Button')
    // }, [book])

    return (
        <View>
            <Text style={{ fontSize: 40, color: 'black' }}>{count} UseEffect as Component {book}</Text>
            <Button title="Count" onPress={() => setCount(count + 1)} />
            <Button title="Book" onPress={() => setBook(book + 1)} />
            <User info={{ book, count}} />

        </View>
    )
}
const User = (props) => {
    useEffect(() => {
        console.warn('Run this code when book prop is updated')

    }, [props.info.book])
    useEffect(() => {
        console.warn('Run this code when count prop is updated')

    }, [props.info.count])
    return (
        <View>
            <Text style={{ fontSize: 40, color: 'blue' }}>Book {props.info.book}</Text>
            <Text style={{ fontSize: 40, color: 'blue' }}>Count {props.info.count}</Text>



        </View>
    )
}

export default Effect