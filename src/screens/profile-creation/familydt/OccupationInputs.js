import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const OccupationInputs = ({
    fatherOccupation,
    motherOccupation,
    onFatherOccupationChange,
    onMotherOccupationChange
}) => {
    return (
        <View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Father's Occupation</Text>
                <TextInput
                    placeholder="e.g., Computer Science, Business Administration"
                    value={fatherOccupation}
                    onChangeText={onFatherOccupationChange}
                    style={styles.textInput}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Mother's Occupation</Text>
                <TextInput
                    placeholder="e.g., Homemaker, Teacher, Doctor"
                    value={motherOccupation}
                    onChangeText={onMotherOccupationChange}
                    style={styles.textInput}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 24,
    },
    label: {
        color: '#374151',
        marginBottom: 8,
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '500',
        fontFamily: 'Inter',
    },
    textInput: {
        width: '100%',
        height: 49,
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        color: '#000',
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Inter',
    },
});

export default OccupationInputs;
