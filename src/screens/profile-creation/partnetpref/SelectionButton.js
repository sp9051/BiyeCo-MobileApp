import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const SelectionButton = ({ title, isSelected, onPress, style }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        isSelected ? styles.selectedButton : styles.unselectedButton,
        style,
      ]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedButton: {
    borderColor: '#53377A',
    backgroundColor: 'rgba(83, 55, 122, 0.05)',
  },
  unselectedButton: {
    borderColor: '#E5E7EB',
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#000',
  },
});

export default SelectionButton;
