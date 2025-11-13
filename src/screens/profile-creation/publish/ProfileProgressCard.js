import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileProgressCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Profile Progress</Text>
                <Text style={styles.percentage}>85%</Text>
            </View>
            <View style={styles.progressBarContainer}>
                <View style={styles.progressBar} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 22,
        paddingRight: 24,
        paddingBottom: 22,
        paddingLeft: 24,
        gap: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#BBF7D0',
        backgroundColor: '#F6F5F8',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: '#111827',
        fontSize: 18,
        lineHeight: 28,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
    percentage: {
        color: '#53377A',
        fontSize: 24,
        lineHeight: 32,
        fontWeight: '700',
        fontFamily: 'Inter',
    },
    progressBarContainer: {
        width: '100%',
        height: 12,
        borderRadius: 9999,
        backgroundColor: '#E5E7EB',
        overflow: 'hidden',
    },
    progressBar: {
        width: '85%',
        height: '100%',
        borderRadius: 9999,
        backgroundColor: '#53377A',
    },
});

export default ProfileProgressCard;
