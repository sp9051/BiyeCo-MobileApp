import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';

const ToggleSwitch = ({ isOn, onToggle }) => {
    return (
        <Pressable
            onPress={onToggle}
            style={[
                styles.switch,
                { backgroundColor: isOn ? '#53377A' : '#E5E7EB' }
            ]}
        >
            <View
                style={[
                    styles.thumb,
                    { left: isOn ? 26 : 2 }
                ]}
            />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    switch: {
        width: 48,
        height: 24,
        borderRadius: 12,
        position: 'relative',
        flexShrink: 0,
        marginLeft: 12,
    },
    thumb: {
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        top: 2,
    },
});

export default ToggleSwitch;
