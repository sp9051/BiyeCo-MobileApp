import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckIcon from './CheckIcon';

const FeatureItem = ({ title, description }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <CheckIcon />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 32,
    },
    iconContainer: {
        marginRight: 16,
        flexShrink: 0,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#6B46C1',
        marginBottom: 4,
    },
    description: {
        fontSize: 15,
        color: '#6b7280',
    },
});

export default FeatureItem;
