import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import RadioButton from './RadioButton';

const ReportReasonSelector = ({ selectedReason, onReasonChange }) => {
    const reasons = [
        { value: 'fake-profile', label: 'Fake profile' },
        { value: 'inappropriate-content', label: 'Inappropriate content' },
        { value: 'harassment-abuse', label: 'Harassment or Abuse' },
        { value: 'spam-scam', label: 'Spam or scam' },
        { value: 'other', label: 'Other' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reason for Report</Text>
            <View style={styles.reasonsList}>
                {reasons.map((reason) => (
                    <TouchableOpacity
                        key={reason.value}
                        style={styles.reasonItem}
                        onPress={() => onReasonChange(reason.value)}
                    >
                        <RadioButton
                            selected={selectedReason === reason.value}
                            onPress={() => onReasonChange(reason.value)}
                        />
                        <Text style={styles.reasonLabel}>{reason.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        maxWidth: 338,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#F3F4F6',
        padding: 21,
    },
    title: {
        color: '#111827',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
        fontFamily: 'Inter',
        marginBottom: 16,
    },
    reasonsList: {
        gap: 16,
    },
    reasonItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    reasonLabel: {
        color: '#374151',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        fontFamily: 'Inter',
    },
});

export default ReportReasonSelector;
