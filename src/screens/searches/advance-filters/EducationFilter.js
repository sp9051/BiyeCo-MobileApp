import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckboxItem from './CheckboxItem';

const EducationFilter = ({ selectedEducation, onToggleEducation }) => {
    const educationOptions = ['Graduate', 'Post Graduate', 'Doctorate'];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Minimum Education</Text>
            <View style={styles.optionsContainer}>
                {educationOptions.map((option) => (
                    <CheckboxItem
                        key={option}
                        label={option}
                        checked={selectedEducation.includes(option)}
                        onToggle={() => onToggleEducation(option)}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#2D2640',
        marginBottom: 16,
    },
    optionsContainer: {
        gap: 12,
    },
});

export default EducationFilter;
