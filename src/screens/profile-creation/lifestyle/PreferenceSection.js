import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PreferenceSection = ({ title, options, selectedValue, onSelect }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{title}</Text>
            <View style={styles.optionsContainer}>
                {options?.map((option) => (
                    <TouchableOpacity
                        key={option}
                        onPress={() => onSelect(option)}
                        style={[
                            styles.optionButton,
                            {
                                borderColor: selectedValue === option ? '#53377A' : '#E5E7EB',
                                backgroundColor: selectedValue === option ? 'rgba(83, 55, 122, 0.05)' : '#FFF',
                            }
                        ]}
                    >
                        <Text style={styles.optionText}>
                            {option === "Non-Vegetarian" ? "Non- Vegetarian" : option}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
    },
    label: {
        color: '#000',
        marginBottom: 8,
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        fontFamily: 'Inter',
    },
    optionsContainer: {
        flexDirection: 'row',
        gap: 12,
    },
    optionButton: {
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 7,
        borderRadius: 12,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    optionText: {
        color: '#000',
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        fontFamily: 'Inter',
    },
});

export default PreferenceSection;
