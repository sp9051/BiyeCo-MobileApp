import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SettingsSection = ({ title, children, style }) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.title}>{title}</Text>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#F3F4F6',
        padding: 21,
        marginBottom: 24,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111827',
        lineHeight: 24,
        marginBottom: 21,
        margin: 0,
    },
});

export default SettingsSection;
