import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const DropdownSection = ({ title, value, onValueChange, options, placeholder }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{title}</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={value}
                    onValueChange={onValueChange}
                    style={[
                        styles.picker,
                        { color: value ? '#000' : '#9CA3AF' }
                    ]}
                >
                    <Picker.Item label={placeholder} value="" enabled={false} />
                    {options.map((option) => (
                        <Picker.Item
                            key={option.value}
                            label={option.label}
                            value={option.value}
                        />
                    ))}
                </Picker>
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
    pickerContainer: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        overflow: 'hidden',
    },
    picker: {
        width: '100%',
        paddingVertical: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        fontFamily: 'Inter',
        fontWeight: '400',
    },
});

export default DropdownSection;
