import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuickActionButton = ({ icon, title, onPress, backgroundColor = '#F8F9FA' }) => {
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor }]} onPress={onPress}>
            <View style={styles.iconContainer}>
                {icon}
            </View>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
        gap: 8,
        flex: 1,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#53377A',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Inter',
    },
});

export default QuickActionButton;
