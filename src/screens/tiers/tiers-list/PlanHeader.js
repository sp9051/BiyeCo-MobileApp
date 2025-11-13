import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlanHeader = ({ icon, title, backgroundColor = '#7c3aed' }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.iconContainer, { backgroundColor }]}>
                <Text style={styles.icon}>{icon}</Text>
            </View>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 12,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        color: 'white',
        fontSize: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1f2937',
    },
});

export default PlanHeader;
