import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInputField from './TextInputField';

const WeightInput = ({ value, onChangeText }) => {
    return (
        <View style={styles.container}>
            <TextInputField
                value={value}
                onChangeText={onChangeText}
                style={styles.input}
            />
            <View style={styles.unitContainer}>
                <Text style={styles.unitText}>kg</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
    },
    input: {
        width: 80,
        color: '#9CA3AF',
    },
    unitContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 63,
        paddingVertical: 15,
        paddingHorizontal: 19,
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
    },
    unitText: {
        color: '#000000',
        fontFamily: 'Inter',
        fontSize: 16,
        lineHeight: 19,
        fontWeight: '400',
    },
});

export default WeightInput;
