import React from 'react';
import { View, Text } from 'react-native';

const ProgressBar = ({ currentStep, totalSteps, percentage }) => {
    return (
        <View className="mb-8">
            <View className="flex-row justify-between items-center mb-3">
                <View>
                    <Text className="text-sm text-gray-600">
                        Step {currentStep} of {totalSteps}
                    </Text>
                </View>
                <View>
                    <Text className="text-sm text-gray-600">
                        {percentage}% Complete
                    </Text>
                </View>
            </View>
            <View className="w-full bg-gray-200 rounded-full h-2">
                <View
                    className="h-2 rounded-full"
                    style={{ width: `${percentage}%`, backgroundColor: '#53377A' }}
                />
            </View>
        </View>
    );
};

export default ProgressBar;
