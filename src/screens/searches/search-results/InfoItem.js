import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfoItem = ({ icon, text }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                {icon}
            </View>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 12,
    },
    iconContainer: {
        flexShrink: 0,
        marginTop: 2,
    },
    text: {
        fontSize: 16,
        color: '#5a5a5a',
        margin: 0,
        flex: 1,
    },
});

export default InfoItem;
