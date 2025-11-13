import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronLeftIcon, MenuDotsIcon } from './Icons';

const Header = ({ onBackPress, onMenuPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftSection}>
                <TouchableOpacity onPress={onBackPress} style={styles.iconButton}>
                    <ChevronLeftIcon />
                </TouchableOpacity>
                <Text style={styles.title}>Search Results</Text>
            </View>
            <TouchableOpacity onPress={onMenuPress} style={styles.iconButton}>
                <MenuDotsIcon />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 16,
        paddingRight: 20,
        paddingBottom: 16,
        paddingLeft: 20,
        backgroundColor: '#ffffff',
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    iconButton: {
        padding: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#2d2d2d',
        margin: 0,
    },
});

export default Header;
