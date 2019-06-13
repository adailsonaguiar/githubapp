import React, { Component } from 'react'

import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'

// import { Container } from './styles'

export default class welcome extends Component {

    proximaTela = () => {
        const { navigation } = this.props
        navigation.navigate('repositories')
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content' backgroundColor='#212121' />
                <Text style={styles.text}>O GitHub é uma plataforma de desenvolvimento inspirada na maneira como você trabalha!</Text>
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoCompleteType="name"
                        underlineColorAndroid="transparent"
                        placeholder="Entre com o seu username"
                    />
                    <TouchableOpacity onPress={this.proximaTela} style={styles.button}>
                        <Text style={styles.textBtn}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        color: '#EDEDED',
        lineHeight: 24,
        textAlign: 'center'
    },
    form: {
        marginTop: 66,
        justifyContent: 'center',
        marginHorizontal: 20
    },
    input: {
        height: 44,
        backgroundColor: 'white',
        borderRadius: 3,
        fontSize: 16,
        color: '#909090',
        paddingHorizontal: 15
    },
    button: {
        backgroundColor: '#32CC56',
        height: 44,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})