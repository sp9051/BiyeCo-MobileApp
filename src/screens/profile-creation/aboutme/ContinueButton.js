import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { RightArrowIcon } from './ArrowIcon';

export const ContinueButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>Continue</Text>
    <RightArrowIcon />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    width: '100%',
    paddingTop: 18,
    paddingRight: 24,
    paddingBottom: 19,
    paddingLeft: 24,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    borderRadius: 16,
    marginTop: 62,
    backgroundColor: '#53377A',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '600',
    fontFamily: 'Inter',
  },
});
