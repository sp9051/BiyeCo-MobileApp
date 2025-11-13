import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BackIcon } from './Icons';

const FormHeader = ({ title, onBackPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
                <BackIcon />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
        position: 'relative',
        marginBottom: 16,
    },
    backButton: {
        position: 'absolute',
        left: 0,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#F3F4F6',
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 28,
        color: '#111827',
        fontFamily: 'Inter',
    },
});

export default FormHeader;
