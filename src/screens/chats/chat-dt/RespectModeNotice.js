import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const RespectModeNotice = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"
            fill="#6b4ba1"
          />
        </Svg>
      </View>
      <Text style={styles.text}>
        Respect Mode is on — this space is for genuine, courteous conversation only.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e8d9f5',
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  text: {
    fontSize: 14,
    lineHeight: 19.6,
    color: '#4a4a4a',
    flex: 1,
  },
});

export default RespectModeNotice;
