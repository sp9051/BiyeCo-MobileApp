import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const ArrowRightIcon = () => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Path
      d="M7 3l7 7-7 7"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ContinueButton = ({ enabled, onPress }) => {
  return (
    <Pressable
      onPress={enabled ? onPress : undefined}
      className={`flex-row items-center justify-center bg-purple-600 rounded-lg px-6 py-4 ${enabled ? 'opacity-100' : 'opacity-50'
        }`}
      disabled={!enabled}
    >
      <View className="mr-3">
        <Text className="text-white text-lg font-semibold">Continue</Text>
      </View>
      <ArrowRightIcon />
    </Pressable>
  );
};

export default ContinueButton;
