import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ToggleButton from './ToggleButton';

const DietFilter = ({ selectedDiet, onToggleDiet }) => {
    const dietOptions = ['Vegetarian', 'Non-Vegetarian', 'Vegan', 'Any'];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Diet Preference</Text>
            <View style={styles.buttonsContainer}>
                {dietOptions.map((option) => (
                    <ToggleButton
                        key={option}
                        label={option}
                        selected={selectedDiet.includes(option)}
                        onPress={() => onToggleDiet(option)}
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
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
});

export default DietFilter;
