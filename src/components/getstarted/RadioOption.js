import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RadioOption = ({
  value,
  selectedValue,
  onSelect,
  label,
  accessibilityLabel
}) => {
  const isSelected = selectedValue === value;

  return (
    <TouchableOpacity
      className={`flex-row items-center p-4 border-2 rounded-lg mb-3`}
      style={[
        styles.base,
        isSelected ? styles.selected : styles.unselected
      ]}
      onPress={() => onSelect(value)}
      accessibilityRole="radio"
      accessibilityState={{ checked: isSelected }}
      accessibilityLabel={accessibilityLabel || label}
    >
      <View
        className={`w-5 h-5 rounded-full border-2 mr-3 items-center justify-center`}
        style={[

          isSelected ? styles.rdselected : styles.rdunselected
        ]}
      >
        {isSelected && (
          <View className="w-2 h-2 rounded-full bg-white" />
        )}
      </View>
      <Text className={`text-base ${isSelected ? 'text-purple-900' : 'text-gray-900'}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default RadioOption;

const styles = StyleSheet.create({
  base: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  selected: {
    borderColor: '#53377A', // border-purple-600
    backgroundColor: 'rgba(83,55,122,0.05)', // bg-purple-50
  },
  unselected: {
    borderColor: '#e5e7eb', // border-gray-200
    backgroundColor: '#ffffff', // bg-white
  },
  rdselected: {
    borderColor: '#53377A', // border-purple-600
    backgroundColor: '#53377A', // bg-purple-600
  },
  rdunselected: {
    borderColor: '#d1d5db', // border-gray-300
    backgroundColor: '#ffffff', // bg-white
  },
});