import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const CheckIcon = () => (
    <Svg width="14" height="10" viewBox="0 0 14 10" fill="none">
        <Path
            d="M1 5l4 4 8-8"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

const TermsCheckbox = ({ agreeToTerms, onToggle }) => {
    return (
        <View className="mb-6">
            <Pressable onPress={onToggle} className="flex-row items-start">
                <View
                    className={`w-6 h-6 rounded border-2 mr-3 mt-0.5 items-center justify-center ${agreeToTerms
                            ? 'bg-purple-600 border-purple-600'
                            : 'bg-transparent border-gray-300'
                        }`}
                >
                    {agreeToTerms && <CheckIcon />}
                </View>
                <View className="flex-1">
                    <View className="flex-row flex-wrap">
                        <Text className="text-gray-700 text-base">By continuing, I agree to Biye Co.'s</Text>
                        <View className="border-b border-purple-600">
                            <Text className="text-purple-600 text-base font-medium"> Terms & Conditions </Text>
                        </View>
                        <Text className="text-gray-700 text-base"> and</Text>
                        <View className="border-b border-purple-600">
                            <Text className="text-purple-600 text-base font-medium"> Privacy Policy </Text>
                        </View>
                        <Text className="text-gray-700 text-base"> . I confirm I'm 18 years or older.</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
};

export default TermsCheckbox;
