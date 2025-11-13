import React from 'react';
import { View } from 'react-native';

const BackIcon = ({ size = 14, color = "#4B5563" }) => {
    return (
        <View style={{
            width: size,
            height: size + 2,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{
                width: size * 0.7,
                height: size * 0.7,
                borderLeftWidth: 2,
                borderTopWidth: 2,
                borderColor: color,
                transform: [{ rotate: '-45deg' }]
            }} />
        </View>
    );
};

export default BackIcon;
