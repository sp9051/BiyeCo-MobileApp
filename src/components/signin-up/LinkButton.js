import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const LinkButton = ({ onPress, title }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
            className="forgot-password-link rn-forgot-password-container"
        >
            <Text style={styles.text} className="forgot-password-text">
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 0,
        marginBottom: 16,
    },
    text: {
        color: '#53377A',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'right',
    },
});

export default LinkButton;
