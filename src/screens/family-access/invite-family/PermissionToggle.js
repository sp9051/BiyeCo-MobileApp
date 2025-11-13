import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const PermissionToggle = ({ label, value, onToggle }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Pressable
                role="switch"
                aria-checked={value}
                onPress={onToggle}
                style={[
                    styles.toggle,
                    { backgroundColor: value ? '#53377A' : '#E5E7EB' }
                ]}
            >
                <View
                    style={[
                        styles.toggleThumb,
                        { left: value ? 26 : 2 }
                    ]}
                />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        fontSize: 14,
        color: '#374151',
        lineHeight: 20,
    },
    toggle: {
        width: 48,
        height: 24,
        borderRadius: 9999,
        position: 'relative',
    },
    toggleThumb: {
        width: 20,
        height: 20,
        borderRadius: 9999,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        top: 2,
    },
});

export default PermissionToggle;
