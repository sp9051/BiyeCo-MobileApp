import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChildrenStatusDisplay = ({ childrenStatus }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Children status *</Text>
            <View style={styles.displayContainer}>
                <Text style={styles.displayText}>{childrenStatus}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 40,
    },
    label: {
        color: '#374151',
        marginBottom: 8,
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '500',
        fontFamily: 'Inter',
    },
    displayContainer: {
        width: '100%',
        height: 46,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        justifyContent: 'center',
    },
    displayText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Inter',
    },
});

export default ChildrenStatusDisplay;
