import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Svg, Circle, Path } from 'react-native-svg';

const GlobeIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Circle cx="12" cy="12" r="10" stroke="#5e4a7e" strokeWidth="2" />
        <Path
            d="M7 12h10M12 7l5 5-5 5"
            stroke="#5e4a7e"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </Svg>
);

const ChevronDownIcon = () => (
    <Svg width="12" height="8" viewBox="0 0 12 8" fill="none">
        <Path d="M1 1l5 5 5-5" stroke="#4a4a4a" strokeWidth="2" />
    </Svg>
);

const LanguageSelector = () => {
    return (
        <View className="mb-8">
            <Pressable className="flex-row items-center justify-center bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm">
                <GlobeIcon />
                <View className="mx-3">
                    <Text className="text-gray-800 font-medium">EN</Text>
                </View>
                <ChevronDownIcon />
            </Pressable>
        </View>
    );
};

export default LanguageSelector;
