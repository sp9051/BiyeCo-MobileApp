import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HamburgerIcon } from './Icons';

const Header = () => {
    return (
        <View style={styles.container}>
            <HamburgerIcon />
            <Text style={styles.title}>Inbox</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#e9ecef',
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#212529',
        marginLeft: 16,
    },
});

export default Header;
