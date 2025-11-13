import React from 'react';
import { View } from 'react-native';

const GreenCheckIcon = ({ size = 13 }) => {
    return (
        <View style={{
            width: size,
            height: size + 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{
                width: size * 0.4,
                height: size * 0.2,
                borderLeftWidth: 2,
                borderBottomWidth: 2,
                borderColor: '#10B981',
                transform: [{ rotate: '-45deg' }],
                marginTop: -size * 0.1
            }} />
        </View>
    );
};

export default GreenCheckIcon;
