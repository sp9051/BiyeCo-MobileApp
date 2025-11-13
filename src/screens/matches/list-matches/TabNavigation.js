import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TabNavigation = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { key: 'recommended', label: 'Recommended' },
        { key: 'city', label: 'Matches in City' },
        { key: 'recent', label: 'Recently Viewed' }
    ];

    return (
        <View style={styles.container}>
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab.key}
                    style={[
                        styles.tab,
                        activeTab === tab.key && styles.activeTab
                    ]}
                    onPress={() => setActiveTab(tab.key)}
                >
                    <Text style={[
                        styles.tabText,
                        activeTab === tab.key && styles.activeTabText
                    ]}>
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
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        paddingHorizontal: 20,
        backgroundColor: '#ffffff'
    },
    tab: {
        flex: 1,
        paddingVertical: 16,
        alignItems: 'center',
        borderBottomWidth: 3,
        borderBottomColor: 'transparent'
    },
    activeTab: {
        borderBottomColor: '#5a3d7a'
    },
    tabText: {
        fontSize: 15,
        fontWeight: '400',
        color: '#9ca3af'
    },
    activeTabText: {
        fontWeight: '600',
        color: '#5a3d7a'
    }
});

export default TabNavigation;
