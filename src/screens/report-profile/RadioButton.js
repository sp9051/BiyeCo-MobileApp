import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const RadioButton = ({ selected, onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
            <View style={[styles.radioButton, selected && styles.selected]}>
                {selected && <View style={styles.innerCircle} />}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 13,
        height: 13,
    },
    radioButton: {
        width: 13,
        height: 13,
        borderRadius: 6.5,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    selected: {
        borderColor: '#53377A',
    },
    innerCircle: {
        width: 7,
        height: 7,
        borderRadius: 3.5,
        backgroundColor: '#53377A',
    },
});

export default RadioButton;
