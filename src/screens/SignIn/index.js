import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import { DynamicStyleSheet, DynamicValue, useDynamicStyleSheet } from 'react-native-dark-mode';

export default class SignIn extends Component {
    render() {
        return (
            <DarkTheme navigation={this.props.navigation}/>
        )
    }
}

function DarkTheme({ navigation }) {
    const styles = useDynamicStyleSheet(dynamicStyles)

    return (
        <View style={styles.container}>
            <View style={styles.logoView}>
                <Text style={styles.title}>D-2020</Text>
            </View>
            <View style={styles.textView}>
                <TextInput placeholder='Email Address' style={styles.textInput}/>
                <TextInput placeholder='Password' style={[styles.textInput, {marginTop: 16}]}/>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={{color: 'white'}}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const dynamicStyles = new DynamicStyleSheet({
    container: {
        flex: 1,
        backgroundColor: new DynamicValue('white', 'black'),
    },
    title: {
        fontSize: 40,
        color: new DynamicValue('black', 'white'),
    },
    logoView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        width: '80%',
        height: 50,
        borderColor: new DynamicValue('black', 'white'),
        borderWidth: 1,
        borderRadius: 25,
        paddingLeft: 15,
        fontSize: 16,
    },
    buttonView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: new DynamicValue('#6f5a7e', '#ff677d'),
        width: '60%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    }
})

