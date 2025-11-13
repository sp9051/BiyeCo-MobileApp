import React from 'react';
import { View, Text, TextInput } from 'react-native';

const DateOfBirthInput = ({ day, month, year, onDayChange, onMonthChange, onYearChange }) => {
    return (
        <View className="mb-6">
            <View className="mb-3">
                <Text className="text-base font-medium text-gray-900">Date of Birth *</Text>
            </View>
            <View className="flex-row gap-3">
                <View className="flex-1">
                    <TextInput
                        placeholder="Day"
                        value={day}
                        onChangeText={onDayChange}
                        keyboardType="numeric"
                        maxLength={2}
                        className="border border-gray-300 rounded-lg px-3 py-3 text-base bg-white"
                        placeholderTextColor="#9CA3AF"
                    />
                </View>
                <View className="flex-1">
                    <TextInput
                        placeholder="Month"
                        value={month}
                        onChangeText={onMonthChange}
                        keyboardType="numeric"
                        maxLength={2}
                        className="border border-gray-300 rounded-lg px-3 py-3 text-base bg-white"
                        placeholderTextColor="#9CA3AF"
                    />
                </View>
                <View className="flex-1">
                    <TextInput
                        placeholder="Year"
                        value={year}
                        onChangeText={onYearChange}
                        keyboardType="numeric"
                        maxLength={4}
                        className="border border-gray-300 rounded-lg px-3 py-3 text-base bg-white"
                        placeholderTextColor="#9CA3AF"
                    />
                </View>
            </View>
        </View>
    );
};

export default DateOfBirthInput;
