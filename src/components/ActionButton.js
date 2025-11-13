import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ActionButton = ({
    title,
    onPress,
    variant = 'primary',
    accessibilityHint
}) => {
    const isPrimary = variant === 'primary';

    return (
        <TouchableOpacity
            onPress={onPress}
            accessibilityRole="button"
            accessibilityHint={accessibilityHint}
            style={[
                styles.button,
                isPrimary ? styles.primaryButton : styles.secondaryButton
            ]}
        >
            <Text
                style={[
                    styles.text,
                    isPrimary ? styles.primaryText : styles.secondaryText
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        paddingVertical: 16,
        borderRadius: 8,
    },
    primaryButton: {
        backgroundColor: '#53377A',
    },
    secondaryButton: {
        backgroundColor: 'transparent',
    },
    text: {
        textAlign: 'center',
        fontWeight: '600',
    },
    primaryText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    secondaryText: {
        color: '#53377A',
        fontSize: 14,
    },
});

export default ActionButton;
