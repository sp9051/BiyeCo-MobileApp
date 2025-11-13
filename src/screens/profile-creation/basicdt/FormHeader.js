import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BackIcon from './BackIcon';

const FormHeader = ({ onBackPress }) => {
    return (
        <View className="mb-6">
            <View className="flex-row items-center justify-between mb-4">
                <TouchableOpacity onPress={onBackPress} className="p-2">
                    <BackIcon />
                </TouchableOpacity>
                <View className="flex-1 items-center">
                    <Text className="text-lg font-semibold text-gray-900">Basic Details</Text>
                </View>
                <View className="w-10" />
            </View>

            <View className="flex-row items-center justify-between mb-4">
                <View>
                    <Text className="text-sm text-gray-600">Step 2 of 8</Text>
                </View>
                <View>
                    <Text className="text-sm text-gray-600">25% Complete</Text>
                </View>
            </View>

            <View className="w-full bg-gray-200 rounded-full h-2">
                <View className="bg-purple-600 h-2 rounded-full" style={{ width: '25%' }} />
            </View>
        </View>
    );
};

export default FormHeader;
