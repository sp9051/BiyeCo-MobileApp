import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ForwardIcon from './ForwardIcon';

const ContinueButton = ({ onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="bg-purple-600 rounded-lg py-4 px-6 flex-row items-center justify-center"
            style={{
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.25,
                shadowRadius: 5,
                elevation: 5,
            }}
        >
            <View className="flex-row items-center">
                <Text className="text-white font-semibold text-base mr-2">Continue</Text>
                <ForwardIcon />
            </View>
        </TouchableOpacity>
    );
};

export default ContinueButton;
