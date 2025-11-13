import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TabNavigation = ({ activeTab, onTabChange }) => {
    const tabs = [
        { key: 'accepted', label: 'Accepted' },
        { key: 'received', label: 'Received' },
        { key: 'sent', label: 'Sent' },
    ];

    return (
        <View style={styles.container}>
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab.key}
                    style={[
                        styles.tab,
                        {
                            borderBottomWidth: 2,
                            borderBottomColor: activeTab === tab.key ? '#6c3fb5' : 'transparent',
                        },
                    ]}
                    onPress={() => onTabChange(tab.key)}
                >
                    <Text
                        style={[
                            styles.tabText,
                            { color: activeTab === tab.key ? '#6c3fb5' : '#6c757d' },
                        ]}
                    >
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
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#e9ecef',
    },
    tab: {
        flex: 1,
        paddingVertical: 16,
        alignItems: 'center',
    },
    tabText: {
        fontSize: 16,
        fontWeight: '500',
    },
});

export default TabNavigation;
