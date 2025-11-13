import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CircleCheckIcon from './CircleCheckIcon';

const PrivacyOptionsSection = ({ selectedOption, onOptionSelect }) => {
  const options = [
    {
      id: 'public',
      title: 'Public',
      description: 'Your photos are visible to everyone',
    },
    {
      id: 'matches',
      title: 'Matches Only',
      description: 'Only people you match can view your photos',
    },
    {
      id: 'request',
      title: 'On Request',
      description: 'Photos stay private unless you approve each view',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose who can view your profile photo.</Text>
      <View style={styles.optionsList}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.optionButton,
              {
                borderColor: selectedOption === option.id ? '#53377A' : '#E5E7EB',
                backgroundColor: selectedOption === option.id ? 'rgba(83, 55, 122, 0.05)' : '#FFF',
              },
            ]}
            onPress={() => onOptionSelect(option.id)}
          >
            <View style={styles.optionContent}>
              <Text style={styles.optionTitle}>{option.title}</Text>
              <Text style={styles.optionDescription}>{option.description}</Text>
            </View>
            <CircleCheckIcon
              color={selectedOption === option.id ? '#53377A' : '#D1D5DB'}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingRight: 16,
    paddingBottom: 24,
    paddingLeft: 16,
  },
  title: {
    color: '#111827',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
    fontFamily: 'Inter',
    marginBottom: 16,
  },
  optionsList: {
    gap: 16,
  },
  optionButton: {
    borderRadius: 16,
    borderWidth: 2,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionContent: {
    flex: 1,
  },
  optionTitle: {
    color: '#111827',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    fontFamily: 'Inter',
    marginBottom: 4,
  },
  optionDescription: {
    color: '#4B5563',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    fontFamily: 'Inter',
  },
});

export default PrivacyOptionsSection;
