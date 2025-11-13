import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.hamburgerMenu}>
                <View style={styles.line} />
                <View style={styles.line} />
                <View style={styles.line} />
            </View>
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
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        backgroundColor: '#f8f9fa',
    },
    hamburgerMenu: {
        flexDirection: 'column',
        gap: 4,
    },
    line: {
        width: 24,
        height: 2,
        backgroundColor: '#5b3a8f',
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#1a1a1a',
        marginLeft: 16,
    },
});

export default Header;
