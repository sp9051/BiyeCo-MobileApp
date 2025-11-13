import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FAQItem from './FAQItem';

const FAQSection = ({ icon, title, questions, onQuestionPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {icon}
                <Text style={styles.title}>{title}</Text>
            </View>
            {questions.map((question, index) => (
                <FAQItem
                    key={index}
                    question={question}
                    isFirst={index === 0}
                    onPress={() => onQuestionPress && onQuestionPress(question, index)}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#F3F4F6',
    },
    header: {
        padding: 21,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    title: {
        color: '#111827',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
});

export default FAQSection;
