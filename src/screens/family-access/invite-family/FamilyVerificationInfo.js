import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfoIcon = () => (
    <View style={styles.infoIcon} />
);

const FamilyVerificationInfo = () => {
    return (
        <View style={styles.container}>
            <InfoIcon />
            <View style={styles.content}>
                <Text style={styles.title}>Family Verification</Text>
                <Text style={styles.description}>
                    Family verified profiles get 5x more responses and build trust with potential matches.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F3E8FF',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#DBEAFE',
        padding: 21,
        flexDirection: 'row',
        gap: 12,
    },
    infoIcon: {
        width: 18,
        height: 18,
        backgroundColor: '#53377A',
        borderRadius: 9,
        flexShrink: 0,
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 14,
        fontWeight: '500',
        color: '#53377A',
        lineHeight: 20,
        marginBottom: 4,
    },
    description: {
        fontSize: 12,
        color: '#53377A',
        lineHeight: 16,
    },
});

export default FamilyVerificationInfo;
