import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FormSection = ({ title, icon, children, backgroundColor = 'transparent' }) => {
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <View style={styles.header}>
                {icon}
                <Text style={styles.title}>{title}</Text>
            </View>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderRadius: 16,
        marginBottom: 24,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 28,
        color: '#111827',
        fontFamily: 'Inter',
    },
});

export default FormSection;
