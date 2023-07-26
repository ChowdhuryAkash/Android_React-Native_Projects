import React from 'react';
import { View, Text, StyleSheet, Image, TextInput,TouchableHighlight } from "react-native"
export default function Login() {
    return (
        <View style={styles.main}>
            <View>
                <Text style={styles.enter_mobile_text}>Enter your mobile number</Text>
            </View>
            <View style={styles.div1}>
                <View style={styles.region}>
                    <Image
                        style={styles.flag}
                        source={require('../Images/flag.png')}
                    />

                </View>
                <View style={styles.number}>
                    <Text style={styles.country_code_num}>+91</Text>
                    <TextInput style={styles.inputbox} placeholder='Mobile Number' placeholderTextColor="#111"></TextInput>

                </View>
                <TouchableHighlight style={styles.continue_btn}  onPress={()=>{console.warn("clicked")}}>
                    <Text style={styles.continue_text}>Continue</Text>

                </TouchableHighlight>
            </View>


            <View style={styles.division_box}>
                <View style={styles.line}></View>
                <Text style={styles.or}>or</Text>
                <View style={styles.line}></View>

            </View>


            <View style={styles.third_parties}>

                <View style={styles.third_party}>
                    <Image
                        style={styles.third_party_image}
                        source={require('../Images/google.png')}
                    />
                    <Text style={styles.third_party_text}>Continue with Google</Text>

                </View>

                <View style={styles.third_party}>
                    <Image
                        style={styles.third_party_image}
                        source={require('../Images/apple.png')}
                    />
                    <Text style={styles.third_party_text}>Continue with Apple</Text>

                </View>

                <View style={styles.third_party}>
                    <Image
                        style={styles.third_party_image}
                        source={require('../Images/fb.png')}
                    />
                    <Text style={styles.third_party_text}>Continue with Facebook</Text>

                </View>

                <View style={styles.third_party}>
                    <Image
                        style={styles.third_party_image}
                        source={require('../Images/email.png')}
                    />
                    <Text style={styles.third_party_text}>Continue with Email</Text>

                </View>

            </View>

            <View style={styles.division_box}>
                <View style={styles.line}></View>
                <Text style={styles.or}>or</Text>
                <View style={styles.line}></View>

            </View>

            <View style={styles.find}>
                <Image
                    style={styles.find_image}
                    source={require('../Images/mfglass.png')}
                />
                <Text style={styles.find_text}>Find my account</Text>

            </View>


            <Text style={styles.bottom_text1}>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy t book.</Text>

            <Text style={styles.bottom_text1}>simply dummy textpsum has been the industry's standard dummy t book.</Text>



        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#FFF",
        flex: 1,
        padding: 15,
        height: "100%",
    },
    enter_mobile_text: {
        color: "#333",
        textAlign: "left",
        fontSize: 20,
        marginTop: 15,
        marginBottom: 20

    },
    div1: {
        width: "100%",
        height: 122,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    region: {
        width: "32%",
        height: "auto",
        backgroundColor: "#EEE",
        borderRadius: 10,
        alignItems: "center",
        alignItems: "center",
        textAlignVertical: "center",

    },
    number: {
        width: "66%",
        height: 50,
        backgroundColor: "green",
        backgroundColor: "#EEE",
        borderRadius: 10,
        borderColor: "#000",
        borderWidth: 2,
        flexDirection: "row",
    },
    continue_btn: {
        width: "100%",
        height: 50,
        backgroundColor: "black",
        marginTop: 10,
        borderRadius: 8,
        marginTop: 20
    },
    flag: {
        width: 30,
        height: 20,
        marginTop: 15,

    },
    country_code_num: {
        color: "#111",
        lineHeight: 45,
        marginLeft: 10,
        fontSize: 17,
    },
    inputbox: {
        flex: 1,
        height: "100%",
        color: "#111",
        fontSize: 17

    },
    continue_text: {
        color: "#FFF",
        textAlign: "center",
        lineHeight: 50,
        fontSize: 20

    },
    division_box: {
        width: "100%",
        height: 30,
        marginTop: 0,
        marginBottom: 0,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    line: {
        height: 1,
        width: "44%",
        backgroundColor: "#aaa",
        marginTop: 11,
    },
    or: {
        color: "#aaa",
        height: 30,
        fontSize: 15,
    },
    third_parties: {
        flexDirection: "column"

    },
    third_party: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        width: "100%",
        height: 50,
        backgroundColor: "#ddd",
        padding: 10,
        borderRadius: 10,
        justifyContent: "space-around",
        paddingLeft: "20%",
        paddingRight: "20%",
        marginBottom: 10

    },
    third_party_image: {
        width: 30,
        height: 30,

    },
    third_party_text: {
        textAlign: "center",
        color: "#000",
        fontWeight: 500
    },

    find: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        width: "100%",
        height: 50,
        backgroundColor: "transparent",
        padding: 10,
        borderRadius: 10,
        justifyContent: "space-around",
        paddingLeft: "28%",
        paddingRight: "28%",
        marginBottom: 10

    },
    find_image: {
        width: 20,
        height: 20,

    },
    find_text: {
        textAlign: "center",
        color: "#000",
        fontWeight: 500
    },
    bottom_text1:{
        color:"#666",
        marginTop:40,
        textAlign:"justify",
    }

})
