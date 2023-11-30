import React, { useState, useEffect } from "react";
import { View, Button, Text, StyleSheet, Modal, TextInput } from "react-native";
const Thirdapi = () => {
    const [data, setData] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [selectedUser, setSelectedUser] = useState(undefined)
    const GetApiData = async () => {
        const url = "http://192.168.210.175:3000/users";
        let result = await fetch(url);
        result = await result.json();
        if (result) {
            setData(result)
        }
    }
    const Deleteapi = async (id) => {
        const url = "http://192.168.210.175:3000/users";
        // console.warn(`${url}/${id}`)
        let result = await fetch(`${url}/${id}`, {
            method: 'Delete'

        })
        result = await result.json()
        if (result) {
            console.warn("User Deleted");
        }
        GetApiData()
    }
    useEffect(() => {
        GetApiData()
    }, [])
    const Update = (data) => {
        setShowModal(true)
        setSelectedUser(data)
    }
    return (
        <View style={styles.container}>
            <View style={styles.dataWrappera}>
                <View style={{ flex: 1 }}><Text style={{ color: 'black', fontSize: 30 }} >Name</Text></View>
                <View style={{ flex: 1 }}><Text style={{ color: 'black', fontSize: 30 }} >Address</Text></View>
                <View style={{ flex: 1 }}><Text style={{ color: 'black', fontSize: 30 }}>Delete</Text></View>
                <View style={{ flex: 1 }}><Text style={{ color: 'black', fontSize: 30 }}>Update</Text></View>



            </View>

            {
                data.length ?
                    data.map((item) =>
                        <View style={styles.dataWrappera}>

                            <View style={{ flex: 1 }}><Text style={{ color: 'black', fontSize: 30 }}>{item.name}</Text></View>
                            <View style={{ flex: 1 }}><Text style={{ color: 'black', fontSize: 30 }} >{item.address}</Text></View>

                            <View style={{ flex: 0.5 }}><Button title="Delete" onPress={() => Deleteapi(item.id)} /></View>
                            <View style={{ flex: 0.5 }}><Button title="update" onPress={() => Update(item)} /></View>


                        </View>)
                    : null

            }
            <Modal visible={showModal} transparent={true}>
                <UserModal setShowModal={setShowModal} selectedUser={selectedUser} GetApiData={GetApiData} />
            </Modal>
        </View>
    )
}
const UserModal = (props) => {
    // console.warn(props.selectedUser);
    const [name, setName] = useState(undefined)
    const [address, setAddress] = useState(undefined)
    const [email, setEmail] = useState(undefined)
    useEffect(() => {
        if (props.selectedUser) {
            setName(props.selectedUser.name)
            setAddress(props.selectedUser.address)
            setEmail(props.selectedUser.email)
        }
    }, [props.selectedUser])
    const SaveData = async () => {
        const url = "http://192.168.210.175:3000/users";
        const id = props.selectedUser.id;
        let result = await fetch(`${url}/${id}`, {
            method: "Put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, address, email })
        })
        result = await result.json();
        if (result) {
            console.warn(result)
            props.GetApiData();
            props.setShowModal(false)
        }

    }
    return (
        <View style={styles.ModalView}>
            <View style={styles.TextView}>
                <Text>Update Here</Text>
                <TextInput style={styles.TextInput} onChangeText={(text) => { setName(Text) }} value={name}/>
                <TextInput style={styles.TextInput} onChangeText={(text) => { setAddress(Text) }} value={address}/>
                <TextInput style={styles.TextInput} onChangeText={(text) => { setEmail(Text) }} value={email} />
                <View style={{ marginBottom: 10 }}>
                    <Button title="save" onPress={SaveData} />
                </View>
                <Button title="close" onPress={() => props.setShowModal(false)} />
            </View>
        </View>
    )   
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    dataWrappera: {

        flexDirection: 'row',
        justifyContent: "space-around",
        backgroundColor: "khaki",
        margin: 5,
        padding: 7
    },
    ModalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextView: {
        backgroundColor: 'white',
        borderColor: 'red',
        borderRadius: 10,
        padding: 20
    },
    TextInput: {
        borderWidth: 1,
        // height: 30,
        width: 300,
        marginBottom: 10
    }
})
export default Thirdapi
