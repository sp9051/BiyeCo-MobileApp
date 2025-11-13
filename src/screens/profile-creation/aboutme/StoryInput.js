import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export const StoryInput = ({ value, onChangeText, maxLength = 500 }) => (
    <View style={styles.container}>
        <View style={styles.labelContainer}>
            <Text style={styles.label}>The Story I Carry *</Text>
        </View>
        <TextInput
            placeholder="Share the paths of your journey that shaped you - your personality, your interest, and the qualities that make you who you are today. What you value in love, family & partnership...."
            value={value}
            maxLength={maxLength}
            onChangeText={onChangeText}
            style={styles.textInput}
            multiline={true}
            textAlignVertical="top"
        />
        <View style={styles.counterContainer}>
            <View style={styles.counter}>
                <Text style={styles.counterText}>{value.length}</Text>
                <Text style={styles.counterText}>/{maxLength}</Text>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 22,
        marginRight: 0,
        marginBottom: 10,
        marginLeft: 0,
    },
    labelContainer: {},
    label: {
        color: '#111827',
        marginBottom: 12,
        fontSize: 18,
        lineHeight: 28,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
    textInput: {
        width: '100%',
        height: 177,
        paddingTop: 19,
        paddingRight: 18,
        paddingBottom: 19,
        paddingLeft: 18,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        color: '#111827',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        fontFamily: 'Inter',
    },
    counterContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: 10,
        flexDirection: 'row',
    },
    counter: {
        flexDirection: 'row',
    },
    counterText: {
        color: '#9CA3AF',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        fontFamily: 'Inter',
    },
});
