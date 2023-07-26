import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'

export default function App() {
    return (

        <View style={styles.main}>
            <Text style={styles.uberText}>Uber</Text>
            <Image
                style={styles.drive}
                source={require('../Images/Driver_Rider_Mask.png')}
            />


            <Text style={styles.boldText}>Move with Safety</Text>
            <TouchableHighlight  onPress={()=>{console.warn("clicked")}}>
                <View style={styles.button}>
                <Text style={styles.buttonText}>Get Started</Text>
                <Image
                    style={styles.arrow}
                    source={require('../Images/right-arrow.png')}
                />
                </View>

            </TouchableHighlight>
        </View>



    );
}
const styles = StyleSheet.create({
    main: {
        backgroundColor: "#286FF0",
        width:"100%",
        padding: 10,
        alignItems: "center",
        height:"100%"

    },
    uberText: {
        textAlign: "center",
        marginTop: 35,
        fontSize: 35,
        fontWeight: 600,
        color: "#fff"

    },
    drive: {
        height: 250,
        width: 300,
        alignItems: "center",
    },
    boldText: {
        marginTop: 30,
        fontSize: 40,
        fontWeight: 700,
        textAlign: "center",
        color: "#FFF",

    },
    button: {
        width: "90%",
        height: 50,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 200,
        marginLeft: "5%",
        borderRadius: 3,
        flexDirection: "row",
        padding: 5
    },
    buttonText: {
        color: "#fff",
        fontSize: 17,
        textAlign: "center",
        width: "75%"

    },
    arrow: {
        width: 30,
        height: 10,


    }
});
