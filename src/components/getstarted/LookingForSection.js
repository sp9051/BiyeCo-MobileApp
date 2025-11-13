import React from 'react';
import { View, Text } from 'react-native';
import RadioOption from './RadioOption';

const LookingForSection = ({ lookingFor, setLookingFor }) => {
    const options = [
        { value: 'Bride', label: 'Bride' },
        { value: 'Groom', label: 'Groom' }
    ];

    return (
        <View className="mb-4 mt-4">
            <View className="mb-4">
                <Text className="text-2xl font-medium text-gray-900">
                    I am looking for a :
                </Text>
            </View>
            <View>
                {options.map((option) => (
                    <RadioOption
                        key={option.value}
                        value={option.value}
                        selectedValue={lookingFor}
                        onSelect={setLookingFor}
                        label={option.label}
                        accessibilityLabel={`Looking for ${option.label}`}
                    />
                ))}
            </View>
        </View>
    );
};

export default LookingForSection;
