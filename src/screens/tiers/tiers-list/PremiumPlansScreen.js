import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ScreenHeader from './ScreenHeader';
import HeroSection from './HeroSection';
import PlanCard from './PlanCard';

const PremiumPlansScreen = () => {
    const handleBackPress = () => {
        // Handle back navigation
        console.log('Back pressed');
    };

    const plansData = [
        {
            icon: '⚡',
            title: 'Alaap',
            description: 'A simple beginning — the first step toward real connection.',
            price: '₹799',
            period: '/month',
            additionalPricing: '₹2,089/3mo • ₹6,999/12mo',
            features: [
                '30 likes per day',
                '3 new chats daily',
                'Basic filters',
                'Who liked me (3/day)',
            ],
            isPopular: false,
        },
        {
            icon: '⚡',
            title: 'Jatra',
            description: 'An onward journey — moving with clarity, purpose, and growing intent.',
            price: '₹1,499',
            period: '/month',
            additionalPricing: '₹3,999/3mo • ₹13,999/12mo',
            features: [
                'Unlimited likes',
                '10 new chats daily',
                'Advanced filters',
                'Full who liked me list',
                '1 boost & 10 super likes/month',
            ],
            isPopular: true,
            badgeText: 'Most Popular',
        },
        {
            icon: '👑',
            title: 'Aalok',
            description: 'A distinguished presence — refined, confident, and guided by light that sets you apart.',
            price: '₹3,499',
            period: '/month',
            additionalPricing: '₹9,999/3mo • ₹29,999/12mo',
            features: [
                'Unlimited everything',
                'Priority visibility',
                'Incognito mode',
                '3 boosts & 40 super likes/month',
                'AI profile polish',
            ],
            isPremium: true,
            badgeText: 'Premium Elite',
        },
        {
            icon: '👑',
            title: 'Obhijaat',
            description: 'A rare belonging — the signature circle of invitation-only access, reserved for those who embody timeless prestige, quiet distinction, and enduring trust.',
            price: '₹3,499',
            period: '/month',
            additionalPricing: '₹9,999/3mo • ₹29,999/12mo',
            features: [
                'Unlimited everything',
                'Priority visibility',
                'Incognito mode',
                '3 boosts & 40 super likes/month',
                'AI profile polish',
            ],
            isPremium: true,
            badgeText: 'Premium Elite',
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <ScreenHeader onBackPress={handleBackPress} />
                <HeroSection />
            </View>

            <ScrollView style={styles.plansSection} showsVerticalScrollIndicator={false}>
                <View style={styles.plansContainer}>
                    {plansData.map((plan, index) => (
                        <PlanCard
                            key={index}
                            icon={plan.icon}
                            title={plan.title}
                            description={plan.description}
                            price={plan.price}
                            period={plan.period}
                            additionalPricing={plan.additionalPricing}
                            features={plan.features}
                            isPopular={plan.isPopular}
                            isPremium={plan.isPremium}
                            badgeText={plan.badgeText}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    headerSection: {
        backgroundColor: '#7c3aed',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    plansSection: {
        flex: 1,
    },
    plansContainer: {
        padding: 20,
    },
});

export default PremiumPlansScreen;
