import React from 'react';
import { View, Text } from 'react-native';
import { Svg, Path, Circle } from 'react-native-svg';

const LogoIcon = () => (
    <Svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        <Path
            d="M40 45c0-5 4-9 9-9h6c3 0 6 2 7 5l8 15c1 2 3 3 5 3s4-1 5-3l8-15c1-3 4-5 7-5h6c5 0 9 4 9 9v35c0 8-7 15-15 15H55c-8 0-15-7-15-15V45z"
            fill="white"
            opacity="0.9"
        />
        <Circle cx="55" cy="38" r="8" fill="white" opacity="0.9" />
        <Circle cx="85" cy="38" r="8" fill="white" opacity="0.9" />
        <Path
            d="M65 70v15M75 70v10"
            stroke="white"
            strokeWidth="3"
            opacity="0.9"
        />
    </Svg>
);

const CompanyBranding = () => {
    return (
        <View className="items-center mb-12">
            <View className="mb-6 bg-purple-600 rounded-full p-8">
                <LogoIcon />
            </View>
            <View className="items-center">
                <Text className="text-3xl font-bold text-gray-800 mb-2">Biye Co.</Text>
            </View>
            <View className="items-center mb-2">
                <Text className="text-lg text-gray-600 italic">~Tradition Reimagined</Text>
            </View>
            <View className="items-center">
                <Text className="text-base text-gray-500">Built for us, by one of us!</Text>
            </View>
        </View>
    );
};

export default CompanyBranding;
