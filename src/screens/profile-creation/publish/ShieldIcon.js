import React from 'react';
import { View, Text } from 'react-native';

const ShieldIcon = ({ size = 16, color = "#53377A" }) => {
    return (
        <View style={{
            width: size,
            height: size,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{
                width: size * 0.9,
                height: size * 0.9,
                borderWidth: 1.5,
                borderColor: color,
                borderRadius: size * 0.45,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: color,
                    fontSize: size * 0.5,
                    fontWeight: 'bold'
                }}>?</Text>
            </View>
        </View>
    );
};

export default ShieldIcon;
