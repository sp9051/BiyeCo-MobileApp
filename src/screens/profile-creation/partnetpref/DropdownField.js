import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DropdownField = ({ value, style }) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 13,
        paddingRight: 12,
        paddingBottom: 13,
        paddingLeft: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 12,
        color: '#000',
    },
});

export default DropdownField;
