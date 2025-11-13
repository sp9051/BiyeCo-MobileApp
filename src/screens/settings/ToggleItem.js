import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ToggleSwitch from './ToggleSwitch';

const ToggleItem = ({ title, subtitle, isOn, onToggle, style }) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <ToggleSwitch isOn={isOn} onToggle={onToggle} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 14,
        fontWeight: '500',
        color: '#374151',
        lineHeight: 20,
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 12,
        fontWeight: '400',
        color: '#6B7280',
        lineHeight: 16,
    },
});

export default ToggleItem;
