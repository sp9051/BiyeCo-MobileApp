import React from 'react';
import { View, StyleSheet } from 'react-native';
import SuccessCard from './SuccessCard';

const SuccessConfirmation = ({ onBackToHome }) => {
    const handleBackToHome = () => {
        if (onBackToHome) {
            onBackToHome();
        } else {
            // Default behavior - could navigate back or perform other action
            console.log('Back to Home pressed');
        }
    };

    return (
        <View style={styles.container}>
            <SuccessCard onBackToHome={handleBackToHome} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9FAFB',
    },
});

export default SuccessConfirmation;
