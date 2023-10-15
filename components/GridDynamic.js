import React from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView, FlatList } from "react-native"
const Dynamic = () => {
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
                <Text  style={{ fontSize: 50, fontWeight: 200, color: "blue", textAlign: "center" }}>Dynamic Grid</Text>
                <View style={{ flexWrap: 'wrap', flex: 1, flexDirection: "row", justifyContent: 'center' }}>
                    {
                    details.map((item) => <Text style={styles.show}>{item.Name}____{item.Qualification}</Text>)
                    }
                </View>

            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    show: {
        fontSize: 40,
        fontWeight: "bold",
        color: 'white',
        backgroundColor: "black",
        padding: 5,
        margin: 4,
        width: 180,
        height: 150,
        textAlignVertical: 'center',
        textAlign: "center"
    }
})
export default Dynamic