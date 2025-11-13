import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ToggleSwitch from './ToggleSwitch';

const NotificationToggleItem = ({ title, subtitle, isOn, onToggle, style }) => {
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
        color: '#374151',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 10,
        color: '#6B7280',
        lineHeight: 20,
    },
});

export default NotificationToggleItem;
