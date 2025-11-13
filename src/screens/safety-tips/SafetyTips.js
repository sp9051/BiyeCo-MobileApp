import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SafetyTipHeader from './SafetyTipHeader';
import SafetyTipCard from './SafetyTipCard';
import ReportSection from './ReportSection';
import {
    LayersIcon,
    UsersIcon,
    InfoIcon,
    EyeIcon,
    SmartphoneIcon,
} from './SafetyIcons';

const SafetyTips = () => {
    const handleBackPress = () => {
        // Handle back navigation
        console.log('Back pressed');
    };

    const handleReportPress = () => {
        // Handle report profile action
        console.log('Report profile pressed');
    };

    const safetyTips = [
        {
            id: 1,
            icon: <LayersIcon size={28} color="#8b5cf6" />,
            title: 'Protect Your Financial Information',
            description: 'Genuine connections never ask for money. Keep your bank details, passwords, and OTPs private at all times.',
        },
        {
            id: 2,
            icon: <UsersIcon size={28} color="#8b5cf6" />,
            title: 'Meet with Intention, and Caution',
            description: 'When meeting someone new, choose elegant, public settings. Share your plans with someone you trust.',
        },
        {
            id: 3,
            icon: <InfoIcon size={28} color="#8b5cf6" />,
            title: 'Verify Before You Trust',
            description: "Use Biye Co.'s built-in verification tools and arrange a brief video chat before any in-person meeting. Authenticity is mutual.",
        },
        {
            id: 4,
            icon: <EyeIcon size={28} color="#8b5cf6" />,
            title: 'Listen to Your Instincts',
            description: 'If a conversation feels uneasy, step back. You have the right to block or report without explanation.',
        },
        {
            id: 5,
            icon: <SmartphoneIcon size={28} color="#8b5cf6" />,
            title: 'Guard Your Personal Details',
            description: 'Hold back on sharing your address, workplace, or family details until trust has been built over time.',
        },
    ];

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <SafetyTipHeader onBackPress={handleBackPress} />

                    <View style={styles.tipsContainer}>
                        {safetyTips.map((tip) => (
                            <SafetyTipCard
                                key={tip.id}
                                icon={tip.icon}
                                title={tip.title}
                                description={tip.description}
                            />
                        ))}

                        <ReportSection onReportPress={handleReportPress} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    scrollView: {
        flex: 1,
    },
    content: {
        paddingTop: 20,
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    tipsContainer: {
        gap: 16,
    },
});

export default SafetyTips;
