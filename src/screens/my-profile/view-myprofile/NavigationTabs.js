import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NavigationTabs = () => {
    const tabs = [
        { label: 'Overview', active: true },
        { label: 'Details', active: false },
        { label: 'Preferences', active: false },
        { label: 'Gallery', active: false },
    ];

    return (
        <View style={styles.container}>
            {tabs.map((tab, index) => (
                <TouchableOpacity
                    key={index}
                    style={[styles.tab, tab.active && styles.activeTab]}
                >
                    <Text style={[styles.tabText, tab.active && styles.activeTabText]}>
                        {tab.label}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    tab: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
    },
    activeTab: {
        borderBottomWidth: 3,
        borderBottomColor: '#7C4DFF',
    },
    tabText: {
        fontSize: 16,
        color: '#757575',
    },
    activeTabText: {
        color: '#7C4DFF',
        fontWeight: '600',
    },
});

export default NavigationTabs;
