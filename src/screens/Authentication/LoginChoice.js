import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { blackText, blueText, colorTheme, grayText } from '../../constant';
import Header from '../../components/Header';
import { StackActions, useNavigation } from '@react-navigation/native';

const App = () => {
    const navigation=useNavigation()
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                {/* <Header leftIconName header={'Your Profile'} titleMargin={30} /> */}
            </View>
            {/* Main Content */}
            <View style={styles.content}>
                <TouchableOpacity
                onPress={()=>navigation.navigate('DoctorRegister')} 
                style={{ backgroundColor: blueText.color, width: "90%", height: 40, borderRadius: 50, justifyContent: "center" }}>
                    <Text style={[styles.smallText, { color: "white", alignSelf: 'center' }]}>Register as a Doctor</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>navigation.navigate('SignUp')} 
                style={{ backgroundColor: blueText.color, width: "90%", height: 40, borderRadius: 50, justifyContent: "center",marginTop:20 }}>
                    <Text style={[styles.smallText, { color: "white", alignSelf: 'center' }]}>Register as a Patient</Text>
                </TouchableOpacity>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>Footer</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorTheme.appBackGroundColor,
        flex: 1,
        justifyContent: 'space-between',
    },
    header: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 5,
        // height:200
    },
    content: {
        flex: 1,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        padding: 10,
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center'
    },
    bigText: {
        fontSize: blackText.fontSize,
        color: blackText.color,
        fontWeight: blackText.fontWeight
    },
    smallText: {
        fontSize: grayText.fontSize,
        color: grayText.color,
        fontWeight: grayText.fontWeight
    },
    blueText: {
        fontSize: blueText.fontSize,
        color: blueText.color,
        fontWeight: blueText.fontWeight
    },
    textInput: {
        borderRadius: 10,
        backgroundColor: "white",
        padding: 7,
        borderWidth: 1,
        borderColor: "#d3d2d6",
        height: 200,
        textAlignVertical: 'top',
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: colorTheme.primaryColor
    },
});

export default App;
