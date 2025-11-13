import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PlanHeader from './PlanHeader';
import FeatureItem from './FeatureItem';

const PlanCard = ({
    icon,
    title,
    description,
    price,
    period,
    additionalPricing,
    features,
    buttonText = 'View Details',
    isPopular = false,
    isPremium = false,
    badgeText,
}) => {
    const cardStyle = [
        styles.card,
        isPopular && styles.popularCard,
    ];

    const buttonStyle = [
        styles.button,
        isPopular ? styles.popularButton : styles.defaultButton,
    ];

    const buttonTextStyle = [
        styles.buttonText,
        isPopular ? styles.popularButtonText : styles.defaultButtonText,
    ];

    return (
        <View style={styles.container}>
            {badgeText && (
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{badgeText}</Text>
                </View>
            )}
            <View style={cardStyle}>
                <PlanHeader icon={icon} title={title} />

                <Text style={styles.description}>{description}</Text>

                <View style={styles.pricingContainer}>
                    <View style={styles.priceRow}>
                        <Text style={styles.price}>{price}</Text>
                        <Text style={styles.period}>{period}</Text>
                    </View>
                    {additionalPricing && (
                        <Text style={styles.additionalPricing}>{additionalPricing}</Text>
                    )}
                </View>

                <View style={styles.featuresContainer}>
                    {features.map((feature, index) => (
                        <FeatureItem key={index} text={feature} />
                    ))}
                </View>

                <TouchableOpacity style={buttonStyle}>
                    <Text style={buttonTextStyle}>{buttonText}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        marginBottom: 20,
    },
    badge: {
        position: 'absolute',
        top: -10,
        left: '50%',
        transform: [{ translateX: -50 }],
        backgroundColor: '#7c3aed',
        paddingVertical: 4,
        paddingHorizontal: 16,
        borderRadius: 12,
        zIndex: 1,
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: '600',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 24,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    popularCard: {
        borderWidth: 2,
        borderColor: '#7c3aed',
    },
    description: {
        fontSize: 14,
        color: '#6b7280',
        marginBottom: 16,
        lineHeight: 21,
    },
    pricingContainer: {
        marginBottom: 16,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: 4,
    },
    price: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1f2937',
    },
    period: {
        fontSize: 14,
        color: '#6b7280',
    },
    additionalPricing: {
        fontSize: 12,
        color: '#9ca3af',
    },
    featuresContainer: {
        gap: 8,
        marginBottom: 20,
    },
    button: {
        width: '100%',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    defaultButton: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#7c3aed',
    },
    popularButton: {
        backgroundColor: '#7c3aed',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
    },
    defaultButtonText: {
        color: '#7c3aed',
    },
    popularButtonText: {
        color: 'white',
    },
});

export default PlanCard;
