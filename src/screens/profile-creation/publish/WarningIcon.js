import React from 'react';
import { View, Text } from 'react-native';

const WarningIcon = ({ size = 16, color = "#53377A" }) => {
    return (
        <View style={{
            width: size,
            height: size,
            backgroundColor: color,
            borderRadius: size / 2,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                color: 'white',
                fontSize: size * 0.7,
                fontWeight: 'bold'
            }}>!</Text>
        </View>
    );
};

export default WarningIcon;
