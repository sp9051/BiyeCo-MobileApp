import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MatchCard from './MatchCard';

const MatchesSection = ({ title, matches, isPremium = false }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
                style={styles.scrollView}
            >
                {matches?.map((match) => (
                    <MatchCard
                        key={match.id}
                        match={match}
                        isPremium={isPremium}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginBottom: 24,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#212529',
        marginBottom: 16,
        margin: 0,
    },
    scrollView: {
        paddingBottom: 8,
    },
    scrollContent: {
        paddingRight: 8,
    },
});

export default MatchesSection;
