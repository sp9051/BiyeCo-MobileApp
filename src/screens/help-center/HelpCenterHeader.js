import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BackArrowIcon } from './Icons';

const HelpCenterHeader = ({ onBackPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
                <BackArrowIcon />
            </TouchableOpacity>
            <Text style={styles.title}>Help Center</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
        paddingTop: 16,
        paddingRight: 24,
        paddingBottom: 16,
        paddingLeft: 24,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    backButton: {
        flexShrink: 0,
    },
    title: {
        color: '#111827',
        fontSize: 18,
        lineHeight: 28,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
});

export default HelpCenterHeader;
