import React from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView, FlatList } from "react-native"
const MapList = () => {
    const details = [
        { Name: "Momin", Qualification: "BSc" },
        { Name: "Shahzaib", Qualification: "Graduate" },
        { Name: "Ishfaq", Qualification: "12th" },
        { Name: "Saqlain", Qualification: "MSc" },
        { Name: "Majid", Qualification: "MBBS" },
        { Name: "Showkat", Qualification: "PHd" },
        { Name: "Saqib", Qualification: "MSc" },
        { Name: "Shakir", Qualification: "2nd year" },
        { Name: "Salman", Qualification: "Ist year" },
        { Name: "Abu-Aslam", Qualification: "10th" },
        { Name: "Abu-Abdullah", Qualification: "6th" },
        { Name: "Abu-Salman", Qualification: "7th" },
        { Name: "Abu-Momin", Qualification: "8th" },
        { Name: "Bilal Ahmad", Qualification: "9th" },
        { Name: "Abu-Ahmad", Qualification: "11th" },
        { Name: "Abu-Mauaviyah", Qualification: "12th" }
    ]
    return (
        <View>
            <ScrollView>
            <Text style={{ fontSize: 30, fontWeight: 200, color: "blue" }}>List with map function</Text>
            
                {
                    details.map((item) => <Text style={styles.show}>{item.Name}</Text>)
                }
            
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    show: {
        fontSize: 25,
        fontWeight: "bold",
        borderWidth: 3,
        fontFamily: 'normal',
        padding: 8,
        margin:7,
        color: "white",
        backgroundColor: "black"
    }
})
export default MapList