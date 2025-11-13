import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CloseIcon } from './CloseIcon';

export const LanguageSelector = ({
    selectedLanguages,
    availableLanguages,
    onToggleLanguage
}) => (
    <View style={styles.container}>
        <View style={styles.labelContainer}>
            <Text style={styles.label}>Languages You Speak *</Text>
        </View>
        <View style={styles.selectedContainer}>
            {selectedLanguages?.map((language) => (
                <TouchableOpacity
                    key={language}
                    onPress={() => onToggleLanguage(language)}
                    style={styles.selectedButton}
                >
                    <Text style={styles.selectedButtonText}>{language}</Text>
                    <CloseIcon />
                </TouchableOpacity>
            ))}
        </View>
        <View style={styles.availableContainer}>
            {availableLanguages?.map((language) => (
                <TouchableOpacity
                    key={language}
                    onPress={() => onToggleLanguage(language)}
                    style={styles.availableButton}
                >
                    <Text style={styles.availableButtonText}>{language}</Text>
                </TouchableOpacity>
            ))}
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
    },
    labelContainer: {},
    label: {
        color: '#111827',
        marginBottom: 12,
        fontSize: 18,
        lineHeight: 28,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
    selectedContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 6,
        paddingTop: 17,
        paddingRight: 16,
        paddingBottom: 17,
        paddingLeft: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        marginBottom: 12,
        minHeight: 69,
        flexDirection: 'row',
    },
    selectedButton: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        paddingTop: 9,
        paddingRight: 12,
        paddingBottom: 10,
        paddingLeft: 12,
        borderRadius: 9999,
        backgroundColor: '#53377A',
        flexDirection: 'row',
    },
    selectedButtonText: {
        color: '#FFF',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '500',
        fontFamily: 'Inter',
    },
    availableContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        flexDirection: 'row',
    },
    availableButton: {
        display: 'flex',
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    availableButtonText: {
        color: '#374151',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '500',
        fontFamily: 'Inter',
    },
});
