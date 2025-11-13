import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FormSection = ({ title, children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        marginHorizontal: 20,
        padding: 24,
        backgroundColor: '#ffffff',
        borderRadius: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1f2937',
        marginBottom: 20,
    },
});

export default FormSection;
