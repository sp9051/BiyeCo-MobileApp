import React from 'react';
import { View, Text, TextInput } from 'react-native';

const LocationInput = ({ city, state, country, onCityChange, onStateChange, onCountryChange }) => {
    return (
        <View className="mb-8">
            <View className="mb-3">
                <Text className="text-base font-medium text-gray-900">Current Location *</Text>
            </View>
            <View className="mb-3">
                <TextInput
                    placeholder="City"
                    value={city}
                    onChangeText={onCityChange}
                    className="border border-gray-300 rounded-lg px-3 py-3 text-base bg-white"
                    placeholderTextColor="#9CA3AF"
                />
            </View>
            <View className="flex-row gap-3">
                <View className="flex-1">
                    <TextInput
                        placeholder="State"
                        value={state}
                        onChangeText={onStateChange}
                        className="border border-gray-300 rounded-lg px-3 py-3 text-base bg-white"
                        placeholderTextColor="#9CA3AF"
                    />
                </View>
                <View className="flex-1">
                    <TextInput
                        placeholder="Country"
                        value={country}
                        onChangeText={onCountryChange}
                        className="border border-gray-300 rounded-lg px-3 py-3 text-base bg-white"
                        placeholderTextColor="#9CA3AF"
                    />
                </View>
            </View>
        </View>
    );
};

export default LocationInput;
