import React, { useState } from "react";
import { Text, View, Button, Alert, StyleSheet } from 'react-native';
const Layout = () => {
    return (
        <View style={{flex:1}}>
            <View style={Styles.box1}>
                <View style={Styles.box4}></View>
                <View style={Styles.box5}></View>
                <View style={Styles.box6}></View>               
                <View style={Styles.box7}></View>               
            </View>
            <View style={Styles.box2}></View>
            <View style={Styles.box3}></View>
        </View>
    )
}

const Styles = StyleSheet.create({
    main: {
        flex: 1
    },
    box1: {
        flex: 2, backgroundColor: 'red', flexDirection: 'row'
    },
    box2: {
        flex: 1, backgroundColor: 'green', flexDirection: 'row'
    },
    box3: {
        flex: 1, backgroundColor: 'lightgreen', flexDirection: 'row'
    },
    box4: {
        flex: 1, backgroundColor: 'blue', flexDirection: 'row', margin: 10
    },
    box5: {
        flex: 1, backgroundColor: 'green', flexDirection: 'row', margin: 10
    },
    box6: {
        flex: 1, backgroundColor: 'khaki', flexDirection: 'row', margin: 10
    },
    box7: {
        flex: 1, backgroundColor: 'white', flexDirection: 'row', margin: 10
    }
})

export default Layout