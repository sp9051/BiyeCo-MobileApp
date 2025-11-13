import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HeartIcon from './HeartIcon';

const DailyMatchesCard = ({ isEnabled, onToggle }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <HeartIcon size={16} color="#53377A" />
            </View>
            <Text style={styles.title}>Get Daily Matches</Text>
            <Text style={styles.description}>
                Get 3-5 compatible matches each day, tailored to what you are looking for. Update your preferences anytime.
            </Text>
            <View style={styles.toggleContainer}>
                <Text style={styles.toggleLabel}>Enable Daily Matches</Text>
                <TouchableOpacity
                    onPress={onToggle}
                    style={[
                        styles.toggleButton,
                        { backgroundColor: isEnabled ? '#53377A' : '#E5E7EB' }
                    ]}
                >
                    <View
                        style={[
                            styles.toggleCircle,
                            { left: isEnabled ? 26 : 2 }
                        ]}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 17,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#E9D5FF',
        backgroundColor: '#E9DFF6',
        marginTop: 16,
    },
    iconContainer: {
        width: 50,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 9999,
        marginBottom: 12,
    },
    title: {
        color: '#53377A',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '700',
        fontFamily: 'Inter',
        marginBottom: 12,
    },
    description: {
        color: '#53377A',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        fontFamily: 'Inter',
        marginBottom: 12,
    },
    toggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    toggleLabel: {
        color: '#53377A',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '500',
        fontFamily: 'Inter',
    },
    toggleButton: {
        width: 48,
        height: 24,
        borderRadius: 9999,
        position: 'relative',
        justifyContent: 'center',
    },
    toggleCircle: {
        width: 20,
        height: 20,
        borderRadius: 9999,
        backgroundColor: 'white',
        position: 'absolute',
        top: 2,
    },
});

export default DailyMatchesCard;
