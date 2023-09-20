import React, { useState } from "react";
import Products from "./components/Products";
import Names from "./components/Names";
import Form from "./components/Form";
import { SafeAreaView, StyleSheet, Image, View, Text, Input, Button, ScrollView, StatusBar, useColorScheme } from "react-native";
import Icecream from "./components/Icecream";

const App = () => {
  const fruit = (hello) => {
    alert(hello)
  }
 let data = 20
  const apple = () => {
    console.warn('You pressed the button')
  }

  
  return (
    <View style={style.container}>
      <Text style={{ fontSize: 24, color: 'black' }}>Welcome to AwesomeProject</Text>
      <Text style={{ fontSize: 15, color: 'blue', backgroundColor: 'yellow' }}>{data}</Text>
      <Text style={{ fontSize: 15, color: 'blue', backgroundColor: 'yellow' }}>Comment</Text>
      <Text style={{ fontSize: 15, color: 'blue', backgroundColor: 'yellow' }}>Shareee</Text>
      <Text>Enter Your Password</Text>
      <Button title="Press Here" onPress={apple} />
      <Text>Re-Enter Your Password</Text>
      <Button title="Press Here To See More" onPress ={()=> fruit('Hello Welcome To AwesomeProject')} color={'black'}></Button>
      <Icecream />
      <Form />
      <App1 />
      <PersonnelData />
      <Products />
      <Names />

    </View>
  )
}
const App1 = () => {
  const [Name, setName] = useState("Mudasir")
  let Address = "Ashpora"
  function setUpName(){
    if(Name == "Momin"){
      setName("Mudasir")
    } else{
      setName("Momin")
    }
      // Lname("Momin")
      // Address = "Handwara"
      // console.log({Fname})
  }
  return (
    <View>
      <Text style={{ fontSize: 20, color: 'black' }}>This is AwesomeProject</Text>
      <Text style={{ fontSize: 15, color: 'black' }}>This is AwesomeProject by Meer Momin</Text>
      <Button title="Touch Here"></Button>
      <Button onPress= {setUpName} title="Touch Me"></Button>
      <Text style={{ fontSize: 15, color: 'black' }}>Name is {Name}, Address is {Address}</Text>
      <PersonnelData />
      


    </View>
  )
}
const PersonnelData = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, color: 'green' }}>This is my Personnel Data</Text>
      <Text style={{ fontSize: 15, color: 'black' }}>This is Aadhar card of Meer Momin</Text>
      <Button title="Touch Here to save"></Button>


    </View>
  )
}

export default App;


const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },
});

