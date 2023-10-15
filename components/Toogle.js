import React, { useState, useEffect } from "react";
import { Text, View, Button, Alert } from 'react-native';
const Toogle = ()=>{
    const [show, setShow] = useState(true)
    return(
        <View>
            <Text style={{fontSize:30, color:'red', marginLeft:60}}>Show/Hide Component</Text>
            {/* <Button  title="Show component" onPress={()=> setShow(true)}/> */}
            {/* <Button  title="Hide component" onPress={()=> setShow(false)}/> */}
            <Button  title="Show/Hide  (toogle) component" onPress={()=> setShow(!show)}/>


            {
                show ? <User /> : <Users />
            }
        </View>
    )
}
const User= ()=>{
    const [data, setData]= useState('Momin')
    return(
        <View>
            <Text style={{fontSize:30, color:'black', marginLeft:60}}>UserComponent</Text>
            <Button title="Click here" onPress={()=>setData('Shahzaib')}/>
            <Text style={{fontSize:20, color:'red'}}>This project belongs to {data}</Text>

        </View>
    )
}

const Users= ()=>{
    const [data, setData]= useState('Momin')
    return(
        <View>
            <Text style={{fontSize:30, color:'black', marginLeft:60}}>UserComponents of Meer Momin</Text>
            <Button title="Click here" onPress={()=>setData('Shahzaib')}/>
            <Text style={{fontSize:20, color:'red'}}>This project belongs to {data}</Text>

        </View>
    )
}
export default Toogle