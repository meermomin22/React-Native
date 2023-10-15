import React, { useState } from "react";
import { Text, View, Button,StyleSheet } from 'react-native';
const Modal = () => {

    return (
        <View style={styles.main}>

            <Modal>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{ fontSize: 30 }}>Hello Modals</Text>
                    </View>
                </View>
            </Modal>
            <View style={styles.buttonView}>
                <Button title="open modal" />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 0.8,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    buttonView: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    centeredView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalView: {
        backgroundColor: 'blue',
        padding:20,
        borderRadius:20,
        borderColor:'balck'
    }
})

export default Modal