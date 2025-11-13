import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

const IconButton = ({ children, onPress, style, accessibilityLabel, ...props }) => {
    return (
        <TouchableOpacity
            style={[styles.button, style]}
            onPress={onPress}
            accessibilityLabel={accessibilityLabel}
            accessibilityRole="button"
            {...props}
        >
            {children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default IconButton;
