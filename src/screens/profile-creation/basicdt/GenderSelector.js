import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const GenderSelector = ({ selectedGender, onGenderChange }) => {
  const genderOptions = ['Male', 'Female'];

  return (
    <View className="mb-6">
      <View className="mb-3">
        <Text className="text-base font-medium text-gray-900">Gender *</Text>
      </View>
      <View className="flex-row gap-3">
        {genderOptions.map((gender) => (
          <TouchableOpacity
            key={gender}
            onPress={() => onGenderChange(gender)}
            className={`flex-1 py-3 px-4 rounded-lg border-2 ${selectedGender === gender
                ? 'border-purple-600 bg-purple-50'
                : 'border-gray-300 bg-white'
              }`}
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: selectedGender === gender ? 0.25 : 0.25,
              shadowRadius: selectedGender === gender ? 5 : 7.5,
              elevation: selectedGender === gender ? 5 : 8,
            }}
          >
            <Text className={`text-center font-medium ${selectedGender === gender ? 'text-purple-600' : 'text-gray-700'
              }`}>
              {gender}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default GenderSelector;
