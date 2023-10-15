import React, { useState } from "react";
import { Text, View, Button, Alert, StyleSheet, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native';
const DynamicRadio = () => {
    const Games = [
        { id: 1, game: 'Cricket' }, { id: 2, game: 'Hockey' }, { id: 3, game: 'Football' }, { id: 4, game: 'VolleyBall' }, { id: 5, game: 'Kho-Kho' }
        , { id: 6, game: 'Kabbadi' }, { id: 7, game: 'Table Tennis' }
    ]

    const [radio, setRadio] = useState(1)

    return (
        <View style={styles.main}>
            <Text style={{ fontSize: 30, color: 'black' }}>Select Your Game</Text>
            {
                Games.map((item, index) =>
                    <TouchableOpacity
                        key={index}
                        onPress={() => setRadio(item.id)}>
                        <View style={styles.radiowrapper}>
                            <View style={styles.radio}>
                                {
                                    radio == item.id ? <View style={styles.radioBg}></View> : null
                                }
                            </View>
                            <Text style={styles.gameName}>{item.game}</Text>
                        </View>
                    </TouchableOpacity>)
            }
        </View>
    )

}
const styles = StyleSheet.create({
    main: {flex: 1, backgroundColor: 'khaki', alignItems: 'center', justifyContent: 'center' },
    gameName: { color: 'red', fontSize: 30 },
    radio: { height: 40, width: 40, borderColor: 'black', borderWidth: 2, margin: 10, borderRadius: 20 },
    radiowrapper: { alignItems: 'center' },
    radioBg: { backgroundColor: 'blue', width: 30, height: 30, borderRadius: 30, margin: 3 }
})
export default DynamicRadio