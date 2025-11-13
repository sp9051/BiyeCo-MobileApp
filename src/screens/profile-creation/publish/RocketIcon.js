import React from 'react';
import { View } from 'react-native';

const RocketIcon = ({ size = 18, color = "white" }) => {
    return (
        <View style={{
            width: size,
            height: size,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{
                width: size * 0.4,
                height: size * 0.8,
                backgroundColor: color,
                borderTopLeftRadius: size * 0.2,
                borderTopRightRadius: size * 0.2
            }} />
            <View style={{
                position: 'absolute',
                bottom: 0,
                width: size * 0.6,
                height: size * 0.3,
                backgroundColor: color,
                borderBottomLeftRadius: size * 0.3,
                borderBottomRightRadius: size * 0.3
            }} />
        </View>
    );
};

export default RocketIcon;
