import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ShieldIcon from './ShieldIcon';
import GreenCheckIcon from './GreenCheckIcon';

const PrivacySafetyCard = () => {
    const safetyFeatures = [
        "Your information stay private and secure",
        "Every photo is reviewed before it goes live",
        "You choose who can reach you",
        "Report or block anyone at anytime"
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <ShieldIcon size={16} color="#53377A" />
                <Text style={styles.title}>Privacy & Safety</Text>
            </View>
            <View style={styles.featuresContainer}>
                {safetyFeatures.map((feature, index) => (
                    <View key={index} style={styles.featureItem}>
                        <View style={styles.checkIconContainer}>
                            <GreenCheckIcon size={13} />
                        </View>
                        <Text style={styles.featureText}>{feature}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 17,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#BFDBFE',
        backgroundColor: '#E9DFF6',
        marginTop: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 16,
    },
    title: {
        color: '#53377A',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
    featuresContainer: {
        gap: 10,
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 8,
    },
    checkIconContainer: {
        marginTop: 3,
        flexShrink: 0,
    },
    featureText: {
        color: '#53377A',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        fontFamily: 'Inter',
        flex: 1,
    },
});

export default PrivacySafetyCard;
