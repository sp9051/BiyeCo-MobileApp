import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const TabButton = ({ title, isActive, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            accessibilityRole="tab"
            accessibilityState={{ selected: isActive }}
            style={[
                styles.button,
                isActive ? styles.activeButton : styles.inactiveButton
            ]}
        >
            <Text
                style={[
                    styles.text,
                    isActive ? styles.activeText : styles.inactiveText
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
    },
    activeButton: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 15,
        elevation: 8,
    },
    inactiveButton: {
        backgroundColor: 'transparent',
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
    },
    activeText: {
        color: '#53377A',
        fontWeight: '600',
    },
    inactiveText: {
        color: '#6B7280',
        fontWeight: '500',
    },
});

export default TabButton;
