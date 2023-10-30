import React, { useState, useEffect } from "react";
import { View, Button, Text, StyleSheet, Modal } from "react-native";
const Newlist = () => {
    const [data, setData] = useState([])
    const [modal, setModal] = useState(false)
    const [selectedUser, setSelectedUser] = useState(undefined)
    const GetApiData = async () => {
        const url = "http://192.168.15.175:3000/users";
        let result = await fetch(url);
        result = await result.json();
        if (result) {
            setData(result)
        }
    }
    const DeleteApi = async (id) => {
        const url = "http://192.168.15.175:3000/users/5";

        const result = await fetch(`${url}/${id}`, {
            method: "Delete"
        });
        GetApiData();
    }
    useEffect(() => {
        GetApiData()
    }, [])
    const UpdateUser = (data) => {
        setModal(true)
        setSelectedUser(data)
    }
    return (
        <View style={styles.container}>
            <View style={styles.dataWrappera}>
                {/* <View style={{flex:0.8}}><Text>Id</Text></View> */}
                <View style={{ flex: 1 }}><Text style={{ color: 'black', fontSize: 20 }} >Name</Text></View>
                <View style={{ flex: 1 }}><Text style={{ color: 'black', fontSize: 20 }} >Address</Text></View>
                <View style={{ flex: 1 }}><Text style={{ color: 'black', fontSize: 20 }}>Delete</Text></View>
                <View style={{ flex: 1 }}><Text style={{ color: 'black', fontSize: 20 }}>Update</Text></View>



            </View>
            {
                data.length ?
                    data.map((item) =>
                        <View style={styles.dataWrappera}>
                            {/* <View style={{flex:1}}><Text>{item.id}</Text></View> */}
                            <View style={{ flex: 1 }}><Text style={{ color: 'blue' }}>{item.name}</Text></View>
                            <View style={{ flex: 1 }}><Text style={{ color: 'blue' }} >{item.address}</Text></View>
                            {/* <View style={{flex:1}}><Text >{item.email}</Text></View> */}
                            <View style={{ flex: 1 }}><Button title="Delete" onPress={() => DeleteApi(item.id)} /></View>
                            <View style={{ flex: 1 }}><Button title="update" onPress={() => UpdateUser(item)} /></View>


                        </View>)
                    : null

            }
            <Modal visible={modal} transparent={true}>
                <UserModal setModal={setModal} selectedser={setSelectedUser} />
            </Modal>
        </View>
    )
}
const UserModal = (props) => {
    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text>Dummy Text</Text>
                <Button title="close" onPress={() => props.setModal(false)} />
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
        backgroundColor: "orange",
        margin: 5,
        padding: 7
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        backgroundColor: 'khaki',
        padding: 80,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOpacity: 8,
        elevation: 20,
    }
})
export default Newlist
