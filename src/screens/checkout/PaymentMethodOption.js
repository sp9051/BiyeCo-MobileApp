import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const PaymentMethodOption = ({
    method,
    isSelected,
    onSelect,
    icon,
    label,
    hasSpecialStyling = false
}) => {
    const dynamicStyles = hasSpecialStyling && isSelected ? {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 25,
        elevation: 8,
    } : {};

    return (
        <Pressable
            onPress={() => onSelect(method)}
            style={[styles.container, dynamicStyles]}
        >
            <View style={styles.radioButton}>
                {isSelected && <View style={styles.radioButtonSelected} />}
            </View>

            {icon}

            <Text style={styles.label}>{label}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 14,
        paddingRight: 12,
        paddingBottom: 14,
        paddingLeft: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        gap: 12,
    },
    radioButton: {
        width: 13,
        height: 13,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#767676',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioButtonSelected: {
        width: 7,
        height: 7,
        borderRadius: 50,
        backgroundColor: '#7735B9',
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: '#374151',
    },
});

export default PaymentMethodOption;
