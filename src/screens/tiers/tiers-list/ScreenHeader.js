import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ScreenHeader = ({ onBackPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
                <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Premium Plans</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 20,
    },
    backButton: {
        padding: 4,
    },
    backIcon: {
        fontSize: 20,
        color: 'white',
    },
    title: {
        fontSize: 14,
        color: 'white',
    },
});

export default ScreenHeader;
