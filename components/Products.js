import React, { useState } from "react";
import { View, Text, Image, Button } from "react-native";
const category = () =>{
    const [phone, setPhone] = useState(1233)
    return(

        <Product name={[{id:123, name: "Bilal"}, {id:1234, name: "Saqib"},{id:12345, name: "Hilal"}]} />
    )
}
const Product = (props) => {
    const press = () => {
        alert('You pressed it')
    }
    console.log('props', props)
    props.name.map(function(element, key){
        console.log("element", element.id, element.name)

    })
    
    const [age, setAge] = useState("Meer")
    function setUpAge() {
        if (age == "Meer") {
            setAge("70")
        } else {
            setAge("Meer")
        }

    }
    
    return (
        <View>
            <Text>Welcome to Us</Text>
            <Button title = "Press" onPress = {setUpAge} />
            <Text>Age is {age}</Text>
        </View>
    )
}
export default category