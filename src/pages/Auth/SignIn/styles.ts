import React, { useState} from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: "#7B72DF"
    },
    boxTitles: {
        alignItems: 'center',
        marginBottom: 55
    },
    title: {
        fontSize: 64,
        color: "#fff",
    },
    colorWhite: {
        color: "#fff",
    },
    boxInputs: {
        alignItems: 'center'
    },
    inputs: {
        padding: 10,
        backgroundColor: "#a2a5c1",
        width: 333,
        height: 60,
        marginBottom: 25,
        borderRadius: 13,
        fontSize: 13,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10        
    },
    textInput: {
        color: "#fff",
        width: 290,
        height: 60
    },
    boxButton: {
        alignItems: "center",
    },
    buttonLogin: {
        backgroundColor: '#405e9b',
        borderRadius: 55,
        height: 60,
        width: 333,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 24,
        color: "#fff",
    },
    boxRegister: {
        flexDirection: 'row',
        gap: 5,
        marginTop: 10
    },
    linkRegister: {
        color: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#fff'
    },
    loading: {flex: 1, justifyContent: 'center', alignItems: 'center'}

});

export default styles;