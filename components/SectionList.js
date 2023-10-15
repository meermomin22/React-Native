import React from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList, SectionList } from "react-native"
const Section = ()=>{
    const Users = [
        { Name: "Momin", Qualification: "BSc", data: ['CSS', 'JS', 'HTML'] },
        { Name: "Shahzaib", Qualification: "Graduate" , data: ['CSS', 'JS', 'TMLH']},
        { Name: "Ishfaq", Qualification: "12th", data: ['CSS', 'JS', 'HTML'] }
       
    ]
    return(
        <View>
            <Text style={{fontSize:40}}>This is Section List</Text>
            <SectionList 
            sections={Users}
            renderItem={({item})=> <Text style= {{fontSize:20, marginLeft: 50, color:'black'}}>{item}</Text>}
            renderSectionHeader={({section: {Name}})=> (
                <Text style={{fontSize:35, color: 'red'}}>{Name}</Text>
    )}
            />
        </View>
    )
}
export default Section