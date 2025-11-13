import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import ArrowIcon from './ArrowIcon';

const ContinueButton = ({ onPress, title = 'Continue' }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <View style={styles.content}>
                <Text style={styles.text}>{title}</Text>
                <ArrowIcon direction="right" color="#FFFFFF" width={16} height={18} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 40,
        marginHorizontal: 16,
        paddingVertical: 19,
        borderRadius: 16,
        backgroundColor: '#53377A',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    text: {
        color: '#FFFFFF',
        fontFamily: 'Inter',
        fontSize: 18,
        lineHeight: 28,
        fontWeight: '600',
    },
});

export default ContinueButton;
