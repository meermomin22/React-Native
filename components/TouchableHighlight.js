import React, { useState } from "react";
import { Text, View, Button, Alert, StyleSheet, TouchableHighlight } from 'react-native';
const Hightlight = () => {
    return (
        <View style={Styles.main}>
            <TouchableHighlight>
                <Text style={Styles.button}>Button</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[Styles.button, Styles.submit]}>Submit</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[Styles.button, Styles.login]}>Submit</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[Styles.button, Styles.enter]}>Submit</Text>
            </TouchableHighlight>
        </View>
    )
}
const Styles = StyleSheet.create({
    main: { flex: 0.5, backgroundColor: 'blue' },
    button: {
        backgroundColor: 'red',
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        padding: 20,
        margin: 15,
        borderRadius: 20,
        shadowColor: 'blue',
        elevation: 400
    },
    submit: { backgroundColor: 'black' },
    login: { backgroundColor: 'khaki' },
    enter: { backgroundColor: 'gray' }
})
export default Hightlight