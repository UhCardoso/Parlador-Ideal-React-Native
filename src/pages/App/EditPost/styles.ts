import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: `${100}%`
    },
    boxPostLine: {
        flexDirection: 'row',
        marginBottom: 10,
        padding: 10
    },
    areaLineLeft: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 130
    },
    logoUser: {
        width: 24,
        height: 24
    },
    line: {
        position: 'absolute',
        height: `${50}%`,
        width: 1.5,
        backgroundColor: '#7B72DF'
    },
    hour: {
        marginTop: 85,
        color: '#7B72DF'
    },
    boxPost: {
        width: 310
    },
    areaName: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textName: {
        color:  '#7B72DF',
        fontWeight: '700'
    },
    input: {
        height: 90
    },
    boxNavBottom: {
        width: `${100}%`,
        alignItems: 'flex-end',
        position: 'absolute',
        bottom: 0,
        right: 30
    },
    boxButtonNav: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20
    },
    textNav: {
        color: '#c3c3c3',
        fontSize: 14
    }
})

export default styles;