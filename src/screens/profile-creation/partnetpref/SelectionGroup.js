import React from 'react';
import { View, StyleSheet } from 'react-native';
import SelectionButton from './SelectionButton';

const SelectionGroup = ({ options, selectedValue, onSelect }) => {
    return (
        <View style={styles.container}>
            {options.map((option, index) => (
                <SelectionButton
                    key={option}
                    title={option}
                    isSelected={selectedValue === option}
                    onPress={() => onSelect(option)}
                    style={index === 0 ? styles.firstButton : index === options.length - 1 ? styles.lastButton : styles.middleButton}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 12,
    },
    firstButton: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    middleButton: {
        paddingLeft: 8,
        paddingRight: 8,
    },
    lastButton: {
        paddingLeft: 9,
        paddingRight: 9,
    },
});

export default SelectionGroup;
