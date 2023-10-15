import React, {Component} from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList, SectionList } from "react-native"
import Student from "./Student";

class Class extends Component{
    fruit =()=>{
        console.warn("Apple")
    }
    render(){
        return(
            <View>
                <Text style={{fontSize:30}}>Class Component</Text>
                <TextInput  placeholder="Enter your name" style = {{borderWidth: 2, marginTop:2, marginBottom:4}}/>
                <Button title="Press"  onPress={this.fruit}/>
                <Student />
            </View>
        )
    }
}
export default Class