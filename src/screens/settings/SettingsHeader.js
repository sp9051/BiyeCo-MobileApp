import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import BackArrowIcon from './BackArrowIcon';

const SettingsHeader = ({ onBackPress }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={onBackPress} style={styles.backButton}>
                <BackArrowIcon />
            </Pressable>
            <Text style={styles.title}>Settings</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 16,
        paddingRight: 24,
        paddingBottom: 16,
        paddingLeft: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
        backgroundColor: '#F9FAFB',
    },
    backButton: {
        marginRight: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#111827',
        lineHeight: 28,
        margin: 0,
    },
});

export default SettingsHeader;
