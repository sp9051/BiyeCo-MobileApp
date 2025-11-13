import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TabNavigation = ({ activeTab, setActiveTab }) => {
    const tabs = ['Accepted', 'Received', 'Sent'];

    return (
        <View style={styles.container}>
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab}
                    style={[
                        styles.tab,
                        {
                            backgroundColor: activeTab === tab ? '#f3f0f7' : 'transparent',
                            borderBottomWidth: activeTab === tab ? 2 : 0,
                            borderBottomColor: '#5b3a8f',
                        },
                    ]}
                    onPress={() => setActiveTab(tab)}
                >
                    <Text
                        style={[
                            styles.tabText,
                            { color: activeTab === tab ? '#5b3a8f' : '#666' },
                        ]}
                    >
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
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        backgroundColor: '#f8f9fa',
    },
    tab: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
    },
    tabText: {
        fontSize: 16,
        fontWeight: '500',
    },
});

export default TabNavigation;
