import React, { useState, useEffect } from "react";
import { Text, View, Button, Alert } from 'react-native';
const UseEffect = ()=>{
    const [std, setStd] = useState(true)
    return(
        <View>
            <Text style={{fontSize:30, color: 'black'}}>UseEffect as ComponentDidMount</Text>
            <Button title="Toogle" onPress={()=>setStd(!std)}/>
            {
                std ? <Student />: null
            }
        </View>
    )
}
const Student = ()=>{
    let timer= setInterval(()=>{
        console.warn("timer called")
    },5000)
    useEffect(()=>{
        return()=>clearInterval(timer)
    })
    return(
        <View>
            <Text style={{fontSize:40, fontWeight:'bold', color:'red'}}>Students Info</Text>
            <Button  title="hiii"/>
        </View>
    )
}

export default UseEffect