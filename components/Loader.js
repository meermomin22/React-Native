import React, { useState } from "react";
import { Text, View, Button, Alert, StyleSheet, TouchableHighlight, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
const Loader = () => {
    const [loader, setLoader] = useState(false)
    const displayLoader =()=>{
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 2000);
    }
    return (
        <View styl={styles.main}>
            <ActivityIndicator size={200} color={"blue"} animating={loader} />

            <Button title="Loader" onPress={displayLoader} />
           
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    }
})
export default Loader