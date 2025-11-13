import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ChatTabs = ({ activeTab, onTabChange }) => {
    const tabs = ['All', 'New', 'Unread'];

    return (
        <View style={styles.container}>
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab}
                    onPress={() => onTabChange(tab)}
                    style={[
                        styles.tab,
                        {
                            backgroundColor: activeTab === tab ? '#5B3A8F' : '#f5f5f5',
                        }
                    ]}
                >
                    <Text style={[
                        styles.tabText,
                        {
                            color: activeTab === tab ? '#ffffff' : '#6b6b6b',
                        }
                    ]}>
                        {tab}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        gap: 12,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    tab: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 24,
    },
    tabText: {
        fontSize: 16,
        fontWeight: '500',
    },
});

export default ChatTabs;
