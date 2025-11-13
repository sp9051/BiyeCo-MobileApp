import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import ChevronIcon from './ChevronIcon';

const LanguageSelector = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Language</Text>
                <Text style={styles.subtitle}>Select your preferred language.</Text>
            </View>
            <Pressable onPress={onPress} style={styles.selector}>
                <Text style={styles.selectedLanguage}>English</Text>
                <ChevronIcon />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 14,
        fontWeight: '500',
        color: '#374151',
        lineHeight: 20,
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 12,
        fontWeight: '400',
        color: '#6B7280',
        lineHeight: 16,
    },
    selector: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    selectedLanguage: {
        fontSize: 14,
        color: '#6B7280',
    },
});

export default LanguageSelector;
