import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import LanguageSelector from './LanguageSelector';
import CompanyBranding from './CompanyBranding';
import TermsCheckbox from './TermsCheckbox';
import ContinueButton from './ContinueButton';

const WelcomeScreen = () => {
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const toggleTerms = () => {
        setAgreeToTerms(!agreeToTerms);
    };

    const handleContinue = () => {
        if (agreeToTerms) {
            // Handle continue action
            console.log('Continue pressed');
        }
    };

    return (
        <ScrollView className="flex-1 bg-gray-50">
            <View className="flex-1 px-6 py-8">
                <LanguageSelector />
                <CompanyBranding />
                <View className="mt-8">
                    <TermsCheckbox
                        agreeToTerms={agreeToTerms}
                        onToggle={toggleTerms}
                    />
                    <ContinueButton
                        enabled={agreeToTerms}
                        onPress={handleContinue}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default WelcomeScreen;
