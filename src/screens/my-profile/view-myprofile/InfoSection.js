import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfoSection = ({ title, items }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.itemsContainer}>
                {items.map((item, index) => (
                    <View key={index} style={styles.item}>
                        <Text style={styles.label}>{item.label}</Text>
                        <Text style={styles.value}>{item.value}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 20,
        marginBottom: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#212121',
        marginBottom: 16,
    },
    itemsContainer: {
        gap: 12,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        fontSize: 15,
        color: '#757575',
    },
    value: {
        fontSize: 15,
        color: '#212121',
        fontWeight: '600',
    },
});

export default InfoSection;
