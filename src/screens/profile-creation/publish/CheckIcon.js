import React from 'react';
import { View } from 'react-native';

const CheckIcon = ({ size = 16, color = "#53377A" }) => {
    return (
        <View style={{
            width: size,
            height: size,
            backgroundColor: color,
            borderRadius: size / 2,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{
                width: size * 0.6,
                height: size * 0.3,
                borderLeftWidth: 2,
                borderBottomWidth: 2,
                borderColor: 'white',
                transform: [{ rotate: '-45deg' }],
                marginTop: -size * 0.1
            }} />
        </View>
    );
};

export default CheckIcon;
