import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const QuickFilters = ({ filters, onFilterPress }) => {
    if (!filters || filters.length === 0) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Quick Filters</Text>
            <View style={styles.filtersContainer}>
                {filters.map((filter, index) => (
                    <TouchableOpacity
                        key={`${filter}-${index}`}
                        style={styles.filterButton}
                        onPress={() => onFilterPress(filter)}
                    >
                        <Text style={styles.filterText}>{filter}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // Container for quick filters section
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: 20,
    },
    filtersContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    filterButton: {
        backgroundColor: '#f0eff4',
        borderRadius: 24,
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    filterText: {
        fontSize: 15,
        color: '#5a5766',
        fontWeight: '500',
    },
});

export default QuickFilters;
