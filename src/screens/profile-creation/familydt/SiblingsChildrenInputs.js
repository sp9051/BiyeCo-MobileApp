import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const SiblingsChildrenInputs = ({
    siblings,
    children,
    onSiblingsChange,
    onChildrenChange
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Siblings</Text>
                <TextInput
                    value={siblings}
                    onChangeText={onSiblingsChange}
                    style={styles.textInput}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Children</Text>
                <TextInput
                    value={children}
                    onChangeText={onChildrenChange}
                    style={styles.textInput}
                    keyboardType="numeric"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 16,
        marginBottom: 24,
    },
    inputGroup: {
        flex: 1,
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
        height: 46,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        color: '#000',
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Inter',
    },
});

export default SiblingsChildrenInputs;
