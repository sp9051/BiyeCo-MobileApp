import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronLeftIcon } from './SafetyIcons';

const SafetyTipHeader = ({ onBackPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
                <ChevronLeftIcon size={24} color="#1a1a1a" />
            </TouchableOpacity>
            <Text style={styles.title}>Safety Tips</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1a1a1a',
        marginLeft: 8,
    },
});

export default SafetyTipHeader;
