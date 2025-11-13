import React from 'react';
import { View, StyleSheet } from 'react-native';

const ShoppingBagIcon = ({ color = '#9d9d9d', size = 24 }) => {
    return (
        <View style={[styles.container, { width: size, height: size }]}>
            <View style={[
                styles.bag,
                {
                    borderColor: color,
                    borderWidth: 2,
                    width: size * 0.75,
                    height: size * 0.8,
                }
            ]}>
                <View style={[
                    styles.handle,
                    {
                        borderColor: color,
                        borderWidth: 2,
                        width: size * 0.4,
                        height: size * 0.25,
                    }
                ]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    bag: {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 4,
    },
    handle: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomWidth: 0,
        backgroundColor: 'transparent',
    },
});

export default ShoppingBagIcon;
