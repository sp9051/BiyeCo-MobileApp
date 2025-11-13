import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    SafeAreaView
} from 'react-native';
import Header from './Header';
import PlanCard from './PlanCard';
import FeatureItem from './FeatureItem';

const PricingScreen = () => {
    const [selectedPlan, setSelectedPlan] = useState(1);

    const plans = [
        {
            id: 0,
            price: 'BDT3,499',
            duration: '1 month',
            savings: null,
        },
        {
            id: 1,
            price: 'BDT8,999',
            duration: '3 months',
            savings: 'Save 14%',
        },
        {
            id: 2,
            price: 'BDT29,999',
            duration: '12 months',
            savings: 'Save 29%',
        },
    ];

    const features = [
        {
            title: 'Unlimited Likes & Chats',
            description: 'No daily limits on connections',
        },
        {
            title: 'Priority Visibility',
            description: 'Your profile appears first in searches',
        },
        {
            title: 'Incognito Mode',
            description: 'Browse profiles privately',
        },
        {
            title: '3 Boosts & 40 Super Likes',
            description: 'Enhance your profile visibility',
        },
        {
            title: 'AI Profile Polish',
            description: 'Get personalized profile optimization',
        },
    ];

    const handleBackPress = () => {
        // Handle back navigation
        console.log('Back pressed');
    };

    const handleSelectPlan = (planId) => {
        setSelectedPlan(planId);
    };

    const handleSelectPayment = () => {
        // Handle payment method selection
        console.log('Select payment method');
    };

    const handleCompare = () => {
        // Handle compare action
        console.log('Compare plans');
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Header onBackPress={handleBackPress} />

                <View style={styles.content}>
                    <Text style={styles.sectionTitle}>Choose Duration</Text>

                    <View style={styles.plansContainer}>
                        {plans.map((plan) => (
                            <PlanCard
                                key={plan.id}
                                price={plan.price}
                                duration={plan.duration}
                                savings={plan.savings}
                                isSelected={selectedPlan === plan.id}
                                onPress={() => handleSelectPlan(plan.id)}
                            />
                        ))}
                    </View>

                    <Text style={styles.featuresTitle}>What's Included</Text>

                    <View style={styles.featuresContainer}>
                        {features.map((feature, index) => (
                            <FeatureItem
                                key={index}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </View>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={styles.primaryButton}
                            onPress={handleSelectPayment}
                        >
                            <Text style={styles.primaryButtonText}>
                                Select Payment Method
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.secondaryButton}
                            onPress={handleCompare}
                        >
                            <Text style={styles.secondaryButtonText}>
                                Compare
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollView: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 24,
        paddingVertical: 32,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: 24,
    },
    plansContainer: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 40,
    },
    featuresTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: 32,
    },
    featuresContainer: {
        marginBottom: 48,
    },
    buttonsContainer: {
        flexDirection: 'row',
        gap: 12,
    },
    primaryButton: {
        flex: 1,
        paddingVertical: 18,
        paddingHorizontal: 32,
        borderRadius: 12,
        backgroundColor: '#7C3AED',
        alignItems: 'center',
        justifyContent: 'center',
    },
    primaryButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    secondaryButton: {
        paddingVertical: 18,
        paddingHorizontal: 32,
        borderRadius: 12,
        backgroundColor: '#7C3AED',
        alignItems: 'center',
        justifyContent: 'center',
    },
    secondaryButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default PricingScreen;
