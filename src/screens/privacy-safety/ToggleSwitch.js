import React from 'react';
import { Pressable, View, StyleSheet, Animated } from 'react-native';

const ToggleSwitch = ({ value, onValueChange, ...props }) => {
    const animatedValue = React.useRef(new Animated.Value(value ? 1 : 0)).current;

    React.useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: value ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }, [value, animatedValue]);

    const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [2, 22],
    });

    const backgroundColor = value ? '#7c3aed' : '#d1d5db';

    return (
        <Pressable
            onPress={() => onValueChange(!value)}
            style={[styles.switch, { backgroundColor }]}
            {...props}
        >
            <Animated.View
                style={[
                    styles.thumb,
                    {
                        transform: [{ translateX }],
                    },
                ]}
            />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    switch: {
        width: 52,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        position: 'relative',
    },
    thumb: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#fff',
        position: 'absolute',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
});

export default ToggleSwitch;
