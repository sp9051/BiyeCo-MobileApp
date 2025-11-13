import React from 'react';
import { View } from 'react-native';

const HeartIcon = ({ size = 16, color = "#53377A" }) => {
    return (
        <View style={{
            width: size,
            height: size,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{
                width: size * 0.8,
                height: size * 0.7,
                backgroundColor: color,
                borderTopLeftRadius: size * 0.4,
                borderTopRightRadius: size * 0.4,
                transform: [{ rotate: '45deg' }]
            }} />
            <View style={{
                position: 'absolute',
                width: size * 0.5,
                height: size * 0.5,
                backgroundColor: color,
                borderTopLeftRadius: size * 0.25,
                borderTopRightRadius: size * 0.25,
                top: size * 0.15,
                left: size * 0.1,
                transform: [{ rotate: '-45deg' }]
            }} />
        </View>
    );
};

export default HeartIcon;
