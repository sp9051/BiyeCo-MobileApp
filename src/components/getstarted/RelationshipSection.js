import React from 'react';
import { View, Text, TextInput } from 'react-native';
import RadioOption from './RadioOption';

const RelationshipSection = ({
    relationship,
    setRelationship,
    customRelationship,
    setCustomRelationship,
    relationshipOptions
}) => {
    return (
        <View className="mb-8 mt-4">
            <View className="mb-4">
                <Text className="text-2xl font-medium text-gray-900">
                    This helps us tailor your experience :
                </Text>
            </View>
            <View>
                {relationshipOptions.map((option) => (
                    <RadioOption
                        key={option}
                        value={option}
                        selectedValue={relationship}
                        onSelect={setRelationship}
                        label={option}
                        accessibilityLabel={`Relationship: ${option}`}
                    />
                ))}
                <TextInput
                    className="border-2 border-gray-200 rounded-lg p-4 text-base text-gray-900 bg-white"
                    placeholder="Your relationship to the candidate"
                    value={customRelationship}
                    placeholderTextColor="#9CA3AF"
                    onChangeText={setCustomRelationship}
                    accessibilityLabel="Custom relationship input"
                    accessibilityHint="Enter your relationship to the candidate if not listed above"
                />
            </View>
        </View>
    );
};

export default RelationshipSection;
