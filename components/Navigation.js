import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Radio from "./Radio";
const Stack = createNativeStackNavigator();
const Stacks = () => {
    const btnAction =()=>{
        console.warn("btn pressed")
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'red'
                    },
                    headerTitleStyle: {
                        fontSize: 40,
                        fontFamily: 'Bold'
                    },
                    headerTintColor: 'white'
                }}>

        
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Info" component={Info} />

                <Stack.Screen name="Login" component={Login}
                    options={{
                        headerTitle:()=><Button title="Login" onPress={btnAction}/>,
                        
                    
                        headerRight:()=><Header />,
                        headerStyle: {
                            backgroundColor: 'black'
                        },
                        headerTitleStyle: {
                            fontSize: 70,
                            fontFamily: 'cursive'
                        },
                        headerTintColor: 'white'
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
const Header = ()=>{
    return(<TextInput placeholder="Name" ></TextInput>)
}
const Home = (props) => {
    return (
        <View style={{ flex: 1, alignContent: 'flex-end' }}>
            <Text style={{ fontSize: 20, color: 'white', fontWeight: '900', backgroundColor: 'black' }}>Welcome to 5 Short Hadees App. This app is designed by Meer Momin</Text>
            <View style={styles.view1}>
                <Text style={styles.text}> <Text style={{ fontSize: 30, color: 'black' }}>Hadees No. 1::-</Text>

                    Narrated 'Umar bin Al-Khattab:

                    I heard Allah's Apostle saying, "The reward of deeds depends upon the intentions and every person will get the reward according to what he has intended. So whoever emigrated for worldly benefits or for a woman to marry, his emigration was for what he emigrated for."</Text>
            </View>



            <View style={styles.view2}>
                <View style={styles.sview1}>
                    <Text style={styles.text1}><Text style={{ fontSize: 30, color: 'blue' }}>Hadees No 2:::-</Text>
                        There are two words which are light on the tongue, heavy on the scale, and loved by the Most Merciful: SubhanAllahi wa bihamdi, SubhanAllahi al-azeem (Glorified is Allah and praised is He, Glorified is Allah the Most Great).

                        (Bukhari and Muslim)
                    </Text>
                </View>
                <View style={styles.sview2}>
                    <Text style={styles.text1}><Text style={{ fontSize: 20, color: 'white' }}>Hadees No. 3:::-</Text>A man came to the Messenger of Allah (ﷺ) and said, “O Messenger of Allah! Who among the people has the most right to my good company?” He replied, “Your mother.” The man said, “Then who?” He replied, “Your mother.” The man said, “Then who?” He replied, “Your mother.” The man said, “Then who?” He replied, “Then your father.”

                        (Bukhari and Muslim)

                    </Text>
                </View>
                <View style={styles.sview3}>
                    <Text style={{ color: 'white', fontSize: 25 }}><Text style={{ fontSize: 30, color: 'khaki' }}>Hadees No. 4:::-</Text>A slave [of Allah] may utter a word without giving it much thought by which he slips into the fire a distance further than that between east and west.

                        (Bukhari and Muslim)</Text>
                </View>
            </View>



            <View style={styles.view3}>
                <Text style={styles.text}><Text style={{ fontSize: 30, color: 'black' }}>Hadees No. 5:::-</Text>
                    Allah becomes jealous [of His honor] and that is when the believer does something He has forbidden.

                    (Bukhari and Muslim)</Text>
            </View>
            <Button title="Know More about hadees" onPress={() => props.navigation.navigate("Login")} />
        </View>
    )
}
const Info = (props) => {
    const [radio, setRadio] = useState(true)
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>

                <View style={styles.main}>
                    <Text style={{ fontSize: 30, color: 'black' }}>Select Your Gender</Text>
                    <TouchableOpacity onPress={() => setRadio(!radio)}>
                        <View style={styles.radiowrapper}>
                            <View style={styles.radio}>
                                {
                                    radio == true ? <View style={styles.radioBg}></View> : null
                                }
                            </View>
                            <Text style={styles.radio1}>Male</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setRadio(!radio)}>
                        <View style={styles.radiowrapper}>
                            <View style={styles.radio}>
                                {
                                    radio == false ? <View style={styles.radioBg}></View> : null
                                }
                            </View>
                            <Text style={styles.radio1}>Female</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>
            <Button title="go to home" onPress={() => props.navigation.navigate("Home")} />
            <View style={{ flex: 2, backgroundColor: 'red' }}>
            </View>

        </View>
    )
}
const Login = (props) => {
    return (
        <View>
            <Text style={{ fontSize: 17, color: 'black', backgroundColor: 'orange' }}>Ḥadīth (Arabic: حديث )refers to what most Muslims and the mainstream schools of Islamic thought believe to be a record of the words, actions, and the silent approval of the Islamic prophet Muhammad as transmitted through chains of narrators. In other words, the ḥadīth are attributed reports about what Muhammad said and did.

                Hadith have been called by some as "the backbone" of Islamic civilization, and for many the authority of hadith is a source for religious and moral guidance known as Sunnah, which ranks second only to that of the Quran(which Muslims hold to be the word of God revealed to Muhammad). While the number of verses pertaining to law in the Quran is relatively few, hadith are considered by many to give direction on everything from details of religious obligations (such as Ghusl or Wudu, ablutions for salat prayer), to the correct forms of salutations and the importance of benevolence to slaves. Thus for many, the "great bulk" of the rules of Sharia (Islamic law) are derived from hadith, rather than the Quran.


                A manuscript of Ibn Hanbal's Islamic legal writings (Sharia), produced October 879
                Ḥadīth is the Arabic word for things like speech, report, account, narrative. Unlike the Quran, not all Muslims believe that hadith accounts (or at least not all hadith accounts) are divine revelation. Different collections of hadīth would come to differentiate the different branches of the Islamic faith. Some Muslims believe that Islamic guidance should be based on the Quran only, thus rejecting the authority of hadith; some further claim that most hadiths are fabrications (pseudepigrapha)created in the 8th and 9th centuries AD, and which are falsely attributed to Muhammad.Historically, Mu'tazilites also rejected the hadiths as the basis for Islamic law, while at the same time accepting the Sunnah and ijma.

                Because some hadith contain questionable and even contradictory statements, the authentication of hadith became a major field of study in Islam. In its classic form a hadith consists of two parts—the chain of narrators who have transmitted the report (the isnad), and the main text of the report (the matn).Individual hadith are classified by Muslim clerics and jurists into categories such as sahih ("authentic"), hasan ("good"), or da'if ("weak"). However, different groups and different scholars may classify a hadith differently.

                Among scholars of Sunni Islam the term hadith may include not only the words, advice, practices, etc. of Muhammad, but also those of his companions.In Shia Islam, hadith are the embodiment of the sunnah, the words and actions of Muhammad and his family, the Ahl al-Bayt (The Twelve Imams and Muhammad's daughter, Fatimah).</Text>
            <Button title="about info" onPress={() => props.navigation.navigate("Info")} />

        </View>
    )
}
const styles = StyleSheet.create({
    view1: { backgroundColor: 'red', flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 8, borderWidth: 3 },

    view2: { backgroundColor: 'black', flex: 3, flexDirection: 'row', marginBottom: 8 },

    view3: { backgroundColor: 'green', flex: 1, justifyContent: 'center', alignItems: 'center', borderWidth: 3, borderRadius: 40 },

    text: { color: 'white', fontSize: 20 },

    text1: { color: 'black', fontSize: 19, fontWeight: 'bold' },

    sview1: { backgroundColor: 'white', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 3, borderRadius: 40, borderColor: 'blue' },

    sview2: { backgroundColor: 'green', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },

    sview3: { backgroundColor: 'black', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 3, borderRadius: 40, borderColor: 'white' },

    main: { flex: 1, backgroundColor: 'khaki', alignItems: 'center', justifyContent: 'center' },
    radio1: { color: 'red', fontSize: 30 },

    radio: { height: 40, width: 40, borderColor: 'black', borderWidth: 2, margin: 10, borderRadius: 20 },
    radiowrapper: { flexDirection: 'row', alignItems: 'center' },

    radioBg: { backgroundColor: 'blue', width: 30, height: 30, borderRadius: 30, margin: 3 }


})

export default Stacks