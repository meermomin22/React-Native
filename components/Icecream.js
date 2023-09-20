import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native"
const Icecream = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [display, setDisplay] = useState(false);
    const resetData = () => {
        setDisplay(false);
        setName("")
        setEmail("")
        setPassword("")
    }




    return (
        <View>
            <Text style={{ fontSize: 30 }}>Welocme to Icecream Section</Text>
            <Text style={{ fontSize: 20, fontFamily: 'cursive', color: 'blue', }}>Name Details</Text>
            <TextInput
                style={style.TextInput}
                placeholder="Enter Users Name"
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <Text style={{ fontSize: 20, fontFamily: 'cursive', color: 'blue', }}>Email Address</Text>
            <TextInput
                style={style.TextInput}
                placeholder="Enter Email"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <Text style={{ fontSize: 20, color: 'blue', fontFamily: 'cursive' }}>Password Details</Text>
            <TextInput
                style={style.TextInput}
                placeholder="Enter Password"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            <View style={{ marginBottom: 6 }}>

                <Button color={'red'}
                    title="Print details"
                    onPress={() => setDisplay(true)} />
            </View>
            <Button color={'red'} title="Clear details" onPress={() => resetData()} />

            <View>
                {


                    display ?
                        <View>
                            <Text style={{ fontSize: 20 }}>User Name Is: {name}</Text>
                            <Text style={{ fontSize: 20 }}>User Email Is: {email}</Text>
                            <Text style={{ fontSize: 20 }}>User Password Is: {password}</Text>

                        </View> : null
                }
            </View>



        </View>
    )
}
const style = StyleSheet.create({
    TextInput: {
        borderRadius: 18,
        fontSize: 20,
        color: 'blue',
        borderWidth: 2,
        borderColor: 'red',
        margin: 5
    }
})
export default Icecream