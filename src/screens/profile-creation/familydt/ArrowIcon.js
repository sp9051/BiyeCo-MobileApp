import React from 'react';
import { View } from 'react-native';

const ArrowIcon = () => {
  return (
    <View style={{ width: 16, height: 18 }}>
      <View
        style={{
          position: 'absolute',
          width: 16,
          height: 18,
          backgroundColor: 'white',
        }}
      />
    </View>
  );
};

export default ArrowIcon;
