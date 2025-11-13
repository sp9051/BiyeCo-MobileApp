import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const PermissionToggle = ({ label, value, onToggle, disabled = false }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Pressable
                role="switch"
                accessibilityRole="switch"
                accessibilityState={{ checked: value }}
                onPress={onToggle}
                disabled={disabled}
                style={[
                    styles.toggle,
                    { backgroundColor: value ? '#53377A' : '#E5E7EB' }
                ]}
            >
                <View
                    style={[
                        styles.toggleThumb,
                        { transform: [{ translateX: value ? 26 : 2 }] }
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
    },
    toggle: {
        width: 48,
        height: 24,
        borderRadius: 9999,
        position: 'relative',
        justifyContent: 'center',
    },
    toggleThumb: {
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        top: 2,
    },
});

export default PermissionToggle;
