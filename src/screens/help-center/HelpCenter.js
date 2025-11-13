import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import HelpCenterHeader from './HelpCenterHeader';
import SearchBar from './SearchBar';
import QuickActions from './QuickActions';
import FAQSection from './FAQSection';
import { UserIcon, CreditCardIcon, ShieldIcon } from './Icons';

const HelpCenter = () => {
    const [searchText, setSearchText] = useState('');

    const accountQuestions = [
        "How do I verify my profile?",
        "How to change my profile photo?",
        "Can I delete my account?"
    ];

    const paymentQuestions = [
        "How to upgrade to Premium?",
        "Refund policy",
        "Payment failed - what to do?"
    ];

    const privacyQuestions = [
        "How to report a profile?",
        "Privacy settings explained",
        "How to block someone?"
    ];

    const handleBackPress = () => {
        // Handle back navigation
        console.log('Back pressed');
    };

    const handleLiveChatPress = () => {
        console.log('Live Chat pressed');
    };

    const handleEmailPress = () => {
        console.log('Email Support pressed');
    };

    const handleCallPress = () => {
        console.log('Call Support pressed');
    };

    const handleVideoPress = () => {
        console.log('Video Call pressed');
    };

    const handleQuestionPress = (question, index) => {
        console.log('Question pressed:', question);
    };

    return (
        <View style={styles.container}>
            <HelpCenterHeader onBackPress={handleBackPress} />

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <SearchBar
                    placeholder="Type your issue..."
                    value={searchText}
                    onChangeText={setSearchText}
                />

                <QuickActions
                    onLiveChatPress={handleLiveChatPress}
                    onEmailPress={handleEmailPress}
                    onCallPress={handleCallPress}
                    onVideoPress={handleVideoPress}
                />

                <View style={styles.faqContainer}>
                    <FAQSection
                        icon={<UserIcon />}
                        title="Account & Profile"
                        questions={accountQuestions}
                        onQuestionPress={handleQuestionPress}
                    />

                    <FAQSection
                        icon={<CreditCardIcon />}
                        title="Payment & Subscriptions"
                        questions={paymentQuestions}
                        onQuestionPress={handleQuestionPress}
                    />

                    <FAQSection
                        icon={<ShieldIcon />}
                        title="Privacy & Safety"
                        questions={privacyQuestions}
                        onQuestionPress={handleQuestionPress}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    scrollView: {
        flex: 1,
    },
    faqContainer: {
        padding: 24,
        gap: 24,
    },
});

export default HelpCenter;
