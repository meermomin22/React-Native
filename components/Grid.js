import React from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native"
const Grid = () => {
    return (
        <View>
            <Text style={{ fontSize: 30, color: "black", textAlign: "center" }}>Grid with dynamic data</Text>
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: "wrap", justifyContent: 'center' }}>
                <Text style={style.styles}>Grid</Text>
                <Text style={style.styles}>Grid</Text>
                <Text style={style.styles}>Grid</Text>
                <Text style={style.styles}>Grid</Text>
                <Text style={style.styles}>Grid</Text>
                <Text style={style.styles}>Grid</Text>
                <Text style={style.styles}>Grid</Text>
                <Text style={style.styles}>Grid</Text>
                <Text style={style.styles}>Grid</Text>
                <Text style={style.styles}>Grid</Text>
                <Text style={style.styles}>Grid</Text>
                <Text style={style.styles}>Grid</Text>
            </View>

        </View>
    )

}
const style = StyleSheet.create({
    styles: {
        fontSize: 40,
        fontWeight: "bold",
        color: 'white',
        backgroundColor: "black",
        padding: 5,
        margin: 4,
        width: 120,
        height: 120,
        textAlignVertical: 'center',
        textAlign: "center"

    }
})
export default Grid