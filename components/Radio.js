import React, { useState } from "react";
import { Text, View, Button, Alert, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
const Radio = () => {
    const [radio, setRadio]=useState(true)
    return (
        <View style={styles.main}>
            <Text style={{fontSize:30, color:'black'}}>Select Your Gender</Text>
        <TouchableOpacity onPress={()=>setRadio(!radio)}>
            <View style={styles.radiowrapper}>
            <View style={styles.radio}>
                {
                    radio==true ? <View style={styles.radioBg}></View>:null
                }
            </View>
                <Text style={styles.radio1}>Male</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setRadio(!radio)}>
        <View style={styles.radiowrapper}>
            <View style={styles.radio}>
            {
                    radio== false ? <View style={styles.radioBg}></View>:null
                }
            </View>
                <Text style={styles.radio1}>Female</Text>
            </View>
        </TouchableOpacity>
        
        </View>
    )
}
const styles = StyleSheet.create({
    main:{flex:1,backgroundColor:'khaki', alignItems:'center', justifyContent:'center'},
    radio1:{ color:'red', fontSize:30 },
    radio:{height:40, width:40,borderColor:'black',borderWidth:2, margin:10,borderRadius:20},
    radiowrapper:{flexDirection:'row', alignItems:'center'},
    radioBg:{backgroundColor:'blue', width:30, height:30, borderRadius:30, margin:3}
})
export default Radio