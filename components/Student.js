import React, {Component} from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList, SectionList } from "react-native"

class Student extends Component{
    constructor(){
        super()
        this.state={
            name: 'Momin'
        }
    }
    Momin(){
        this.setState({name:'Shahzaib'})
    }
    render(){
        return(
            <View style={{}}>
                <Text style={styles.style} >Student Component</Text>
                <TextInput placeholder="Enter your new name" onChangeText={()=> this.Momin()}></TextInput>
                <Button onPress={this.Momin} style={styles.style}  title={this.state.name}/>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    style:{
        fontSize:30,
        borderWidth: 5,
        borderColor: 'red',
        

    }
})
export default Student