import React from 'react';
import { View, StyleSheet } from 'react-native';
import CheckmarkIcon from './CheckmarkIcon';
import SuccessMessage from './SuccessMessage';
import ActionButton from './ActionButton';

const SuccessCard = ({ onBackToHome }) => {
    return (
        <View style={styles.card}>
            <View style={styles.iconContainer}>
                <CheckmarkIcon />
            </View>
            <SuccessMessage />
            <ActionButton
                title="Back to Home"
                onPress={onBackToHome}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '100%',
        maxWidth: 338,
        paddingTop: 32,
        paddingRight: 32,
        paddingBottom: 28,
        paddingLeft: 32,
        alignItems: 'center',
        borderRadius: 16,
        backgroundColor: 'white',
    },
    iconContainer: {
        marginBottom: 24,
    },
});

export default SuccessCard;
