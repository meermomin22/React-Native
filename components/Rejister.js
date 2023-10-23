import React, { useEffect, useState } from "react";
import { View, Text, Button, ScrollView, FlatList, StyleSheet, TextInput } from "react-native"
const Register = () => {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [nameError, setNameError] = useState(false)
    const [addressError, setAddressError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [ageError, setAgeError] = useState(false)

    const RegisterUser = async () => {
        const url = "http://192.168.208.175:3000/users";
        if (!name) {
            setNameError(true)
        }
        if (!address) {
            setAddressError(true)
        }
        if (!email) {
            setEmailError(true)
        }
        if (!age) {
            setAgeError(true)
        }
        if (!name) {
            return (false)
        }
        if (!address) {
            return (false)
        }
        if (!email) {
            return (false)
        }
        if (!age) {
            return (false)
        }

        // let data = {
        //     name: name,
        //     address: address,
        //     email: email,
        //     age: age
        // }
        // data = JSON.stringify(data)
        let result = await fetch(url, {
            method: "Post",
            body: JSON.stringify({ name, address, email, age }),
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
    //If we can use above {let data method} then we have to write {data} in place of json.stringfy({name, address, email, age})
    return (
        <View>
            <Text style={{ fontSize: 40, color: "black" }}>Post Data Manually</Text>


            <View style={{ borderBottomWidth: 3 }}>
                <TextInput placeholder="Enter Name" style={styles.text} onChangeText={(text) => setName(text)}></TextInput>
                {
                    nameError ? <Text style={styles.error}>Please enter valid name !</Text> : null
                }

                <TextInput placeholder="Enter Address" style={styles.text} onChangeText={(text) => setAddress(text)}></TextInput>
                {
                    addressError ? <Text style={styles.error}>Please enter valid address !</Text> : null
                }

                <TextInput placeholder="Enter Email" style={styles.text} onChangeText={(text) => setEmail(text)}></TextInput>
                {
                    emailError ? <Text style={styles.error}>Please enter valid email !</Text> : null
                }

                <TextInput placeholder="Enter Age" style={styles.text} onChangeText={(Number) => setAge(Number)}></TextInput>
                {
                    ageError ? <Text style={styles.error}>Please enter valid age !</Text> : null
                }
                
                <Button title="submit" onPress={() => RegisterUser()} />
            </View>


        </View>

    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'black',
        borderWidth: 2,
        marginTop: 10
    },
    text2: {
        fontSize: 30,
        color: 'red'
    },
    error: {
        fontSize: 20,
        color: 'red',
        marginLeft: 10
    }
})

export default Register