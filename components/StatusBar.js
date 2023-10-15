import React, { useState } from "react";
import { Text, View, Button, StyleSheet, StatusBar } from "react-native"
const StatusBars = () => {
    const [hide, setHide] = useState(false)
    const [barStyle, setBarStyle] = useState('default')
    return (
        <View style={styles.view}>
            <StatusBar
                backgroundColor='red'
                barStyle={barStyle}
                hidden={hide}
            />
            <Button title="Toogle Status-Bar" onPress={() => setHide(!hide)} />
            <Button title="Update Status-Bar" onPress={() => setBarStyle('dark-content')} />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {

    }
})
export default StatusBars