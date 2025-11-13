import React from 'react';
import { View, Text, TextInput } from 'react-native';

const NameInput = ({ firstName, lastName, onFirstNameChange, onLastNameChange }) => {
    return (
        <View className="mb-6">
            <View className="flex-row gap-3">
                <View className="flex-1">
                    <View className="mb-2">
                        <Text className="text-base font-medium text-gray-900">First Name *</Text>
                    </View>
                    <TextInput
                        placeholder="First name"
                        value={firstName}
                        onChangeText={onFirstNameChange}
                        className="border border-gray-300 rounded-lg px-3 py-3 text-base bg-white"
                        placeholderTextColor="#9CA3AF"
                    />
                </View>
                <View className="flex-1">
                    <View className="mb-2">
                        <Text className="text-base font-medium text-gray-900">Last Name *</Text>
                    </View>
                    <TextInput
                        placeholder="Last name"
                        value={lastName}
                        onChangeText={onLastNameChange}
                        className="border border-gray-300 rounded-lg px-3 py-3 text-base bg-white"
                        placeholderTextColor="#9CA3AF"
                    />
                </View>
            </View>
        </View>
    );
};

export default NameInput;
