import React, { useState} from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', backgroundColor: "#7B72DF"},
    boxLogo:{
        alignItems: 'center'
    },
    logo: {
        height: 105,
        width: 105
    },
    boxButtons: {
        marginTop: 100,
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#405e9b',
        borderRadius: 55,
        height: 60,
        width: 333,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
    },
    textButton: {
        fontSize: 24,
        color: "#fff",
    },
    buttonCreate: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 55,
        width: 333,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;