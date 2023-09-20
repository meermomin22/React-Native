import React, { useState } from "react";
import { View, Text, TextInput, Button, useAnimatedValue, StyleSheet } from "react-native"

const Form = () => {
    const [name, setName] = useState("")
    const [pname, setPname] = useState("")
    const [address, setAddress] = useState("")
    const [display, setDisplay] = useState(false)

    return (
        <View>

            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Welcome to Animal Husbandary</Text>
            <TextInput
                style={styles.TextInput}
                placeholder="Enter Your Name"
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <TextInput
                style={styles.TextInput}
                placeholder="Enter Parents Name"
                onChangeText={(text) => setPname(text)}
                value={pname}
            />
            <TextInput
                style={styles.TextInput}
                placeholder="Enter Your Address"
                onChangeText={(text) => setAddress(text)}
                value={address}
            />
            <View style={{ marginTop: 5 }}>
                <Button title="Print Admit Card"
                    color={'red'}
                    onPress={() => setDisplay(true)} />
            </View>

            <View>

                display ?

                <Text>Name of Candidate is {name}</Text>
                <Text>Candidate's Parents name {pname}</Text>
                <Text>Address of Candidate {address}</Text>





            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    TextInput: {
        color: 'blue',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'red',
        fontFamily: 'normal',
        fontWeight: '400',
        margin: 3
    }
})
export default Form

