import React from 'react';
import { View } from 'react-native';

const BackIcon = () => {
    return (
        <View style={{ width: 14, height: 16 }}>
            <View
                style={{
                    position: 'absolute',
                    width: 14,
                    height: 16,
                    backgroundColor: '#4B5563',
                }}
            />
        </View>
    );
};

export default BackIcon;
