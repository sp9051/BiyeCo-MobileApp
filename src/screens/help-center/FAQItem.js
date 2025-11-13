import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronRightIcon } from './Icons';

const FAQItem = ({ question, onPress, isFirst = false }) => {
    return (
        <TouchableOpacity
            style={[styles.container, isFirst && styles.firstItem]}
            onPress={onPress}
        >
            <Text style={styles.question}>{question}</Text>
            <ChevronRightIcon />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 12,
        paddingRight: 21,
        paddingBottom: 12,
        paddingLeft: 21,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    firstItem: {
        paddingTop: 0,
    },
    question: {
        color: '#374151',
        fontSize: 14,
        fontFamily: 'Inter',
        flex: 1,
    },
});

export default FAQItem;
