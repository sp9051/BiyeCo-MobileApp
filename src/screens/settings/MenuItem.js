import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import ChevronIcon from './ChevronIcon';

const MenuItem = ({ icon, title, subtitle, onPress, titleColor = '#8A5EBC' }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.content}>
                {icon && <View style={styles.iconContainer}>{icon}</View>}
                <View style={styles.textContainer}>
                    <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
            </View>
            <ChevronIcon />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        gap: 12,
    },
    iconContainer: {
        // Icon styling handled by parent
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 20,
    },
    subtitle: {
        fontSize: 10,
        color: '#6B7280',
        lineHeight: 20,
    },
});

export default MenuItem;
