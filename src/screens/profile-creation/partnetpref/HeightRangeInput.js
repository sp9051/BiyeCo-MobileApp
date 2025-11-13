import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputField from './InputField';

const HeightRangeInput = ({ heightMin, heightMax }) => {
  return (
    <View style={styles.container}>
      <InputField value={heightMin} style={styles.input} />
      <Text style={styles.separator}>-</Text>
      <InputField value={heightMax} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  separator: {
    fontSize: 14,
    color: '#000',
  },
});

export default HeightRangeInput;
