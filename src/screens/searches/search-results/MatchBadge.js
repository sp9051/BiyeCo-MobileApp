import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MatchBadge = ({ percentage = 94 }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{percentage}% Match</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: '#ffffff',
        paddingTop: 8,
        paddingRight: 20,
        paddingBottom: 8,
        paddingLeft: 20,
        borderRadius: 20,
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
        color: '#5e4a8b',
    },
});

export default MatchBadge;
