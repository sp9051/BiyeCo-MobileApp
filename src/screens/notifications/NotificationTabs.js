import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NotificationTabs = ({ tabs, activeTab, onTabPress }) => {
    return (
        <View style={styles.container}>
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab}
                    onPress={() => onTabPress(tab)}
                    style={[
                        styles.tab,
                        activeTab === tab && styles.activeTab,
                    ]}
                >
                    <Text style={styles.tabText}>{tab}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 24,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderBottomWidth: 0.667,
        borderBottomColor: '#F3F4F6',
    },
    tab: {
        paddingTop: 4,
        paddingBottom: 13.33,
        position: 'relative',
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#53377A',
    },
    tabText: {
        fontSize: 14,
    },
});

export default NotificationTabs;
