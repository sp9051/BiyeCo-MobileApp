import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputField = ({
  label,
  placeholder,
  value,
  onChangeText,
  icon,
  inputId,
  keyboardType = 'default',
  autoCapitalize = 'none',
  autoCorrect = false
}) => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.label}
        accessibilityLabel={label}
      >
        {label}
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          accessibilityLabel={label}
          accessibilityHint={`Enter your ${label.toLowerCase()}`}
          style={styles.input}
          placeholderTextColor="#9CA3AF"
        />
        <View style={styles.iconContainer}>
          {icon}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 8,
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingRight: 48,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    color: '#111827',
    fontSize: 16,
  },
  iconContainer: {
    position: 'absolute',
    right: 12,
    top: 12,
  },
});

export default InputField;
