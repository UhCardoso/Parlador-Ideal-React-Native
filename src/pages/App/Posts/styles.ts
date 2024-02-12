import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginBottom: 55
    },
    boxPostLine: {
        flexDirection: 'row',
        marginBottom: 10,
        padding: 10,
        borderBottomWidth: 0.5,
        borderColor: '#7B72DF'
    },
    areaLineLeft: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 60
    },
    logoUser: {
        width: 24,
        height: 24
    },
    line: {
        top: 35,
        position: 'absolute',
        height: `${75}%`,
        width: 1.5,
        backgroundColor: '#7B72DF'
    },
    hour: {
        marginTop: 85,
        color: '#7B72DF',
        backgroundColor: "#f2f2f2",
        padding: 5.5,
        width: 50
    },
    boxPost: {
        width: 310,
        justifyContent: 'center'
    },
    areaName: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textName: {
        color:  '#7B72DF',
        fontWeight: '700'
    },
    moreBox: {
        width: 70,
        height: 40,
        alignItems: 'flex-end'
    },
    description: {
        minHeight: 80,
        padding: 5
    },
    boxDate: {
        alignItems: 'flex-end',
    },
    textDate: {
        color: '#7B72DF',
    },
    boxNavBottom: {
        flexDirection: 'row',
        height: 55,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-around',
        width: `${100}%`,
    },
    boxButtonNav: {
        alignItems: 'center'
    },
    textNav: {
        color: '#7B72DF',
        fontSize: 9
    },
    loading: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    modalDetails: {
        height: `${100}%`,
        width: `${100}%`,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxDetails: {
        borderRadius: 10,
        backgroundColor: "#fff",
        width: 250,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30
    },
    textEdit: {
        fontWeight: '700',
        width: 200,
        textAlign: 'center',
        color: '#7B72DF',
    },
    textDelete: {
        color: 'red',
        fontWeight: '700',
        width: 200,
        textAlign: 'center'
    }
});

export default styles;