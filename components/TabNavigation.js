import React from "react";
import { View, Text, Button, StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
    return (
       
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Login" component={Login} />
                    <Tab.Screen name="SignUP" component={SignUp} />
                    <Tab.Screen name="Info" component={Info} />


                </Tab.Navigator>
            </NavigationContainer>
        
    )
}
const Login = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.text}>Login</Text>
        </View>
    )
}
const SignUp = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.text}>SignUp</Text>
        </View>
    )
}
const Info = (props) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.text}>Info</Text>

            <Button title="Go to Login" onPress={() => props.navigation.navigate("Login")} />
        </View>
    )
}
const styles = StyleSheet.create({
    text:{
        fontSize:40,
        color:'black'
    }
})

export default TabNavigation