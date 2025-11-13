import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BackArrowIcon from './BackArrowIcon';

const ReportHeader = ({ onBack, onSubmit }) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftSection}>
                <TouchableOpacity onPress={onBack}>
                    <BackArrowIcon />
                </TouchableOpacity>
                <Text style={styles.title}>Report Profile</Text>
            </View>
            <TouchableOpacity onPress={onSubmit}>
                <Text style={styles.submitButton}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 61,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    title: {
        color: '#111827',
        fontSize: 18,
        lineHeight: 28,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
    submitButton: {
        color: '#53377A',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
});

export default ReportHeader;
