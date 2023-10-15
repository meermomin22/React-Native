import React, { cloneElement, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native"
const Custom = () => {
    const [show, setShow] = useState(false)
    return (
        <View style={styles.Container}>
            {
                show ? <View style={styles.modal}>
                <View style={styles.body}>
                    <Text style={styles.text}>Dialog box</Text>
                    <Button title="close" />
                </View>
            </View> : null
            }
            <Button title="Open dialog box" onPress={()=>setShow(!show)} />
        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
    flex:1,
        justifyContent: 'flex-end'
    },
    body: {
        backgroundColor:'#fff',
        height:300,
        width:300,
        padding:20,
        justifyContent:'flex-end',
        borderRadius:20       
    },
    modal: {
        flex: 1,
        padding:50,
        backgroundColor: 'red',
        justifyContent:'center'
    },
    text:{
        height:150,
        width:150,
        borderWidth:2,
        padding:30
    }
})
export default Custom