import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BackButton } from './BackButton';

export const Header = ({ onBackPress }) => (
    <View style={styles.container}>
        <BackButton onPress={onBackPress} />
        <View style={styles.titleContainer}>
            <Text style={styles.title}>About Me</Text>
        </View>
        <View style={styles.spacer} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.667,
        borderBottomColor: '#F3F4F6',
        width: '100%',
        flexDirection: 'row',
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        color: '#111827',
        fontSize: 20,
        lineHeight: 28,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
    spacer: {
        width: 40,
    },
});
