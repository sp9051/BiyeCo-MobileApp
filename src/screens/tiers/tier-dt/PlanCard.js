import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PlanCard = ({
    price,
    duration,
    savings,
    isSelected,
    onPress
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.container,
                {
                    borderColor: isSelected ? '#9333EA' : '#e5e5e5',
                    backgroundColor: isSelected ? '#F3E8FF' : 'white',
                }
            ]}
            onPress={onPress}
        >
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.duration}>{duration}</Text>
            {savings && (
                <Text style={styles.savings}>{savings}</Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 24,
        paddingHorizontal: 16,
        borderRadius: 16,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 140,
    },
    price: {
        fontSize: 24,
        fontWeight: '700',
        color: '#6B46C1',
        marginBottom: 8,
    },
    duration: {
        fontSize: 16,
        color: '#9ca3af',
        fontWeight: '500',
        marginBottom: 8,
    },
    savings: {
        fontSize: 14,
        color: '#A855F7',
        fontWeight: '600',
    },
});

export default PlanCard;
