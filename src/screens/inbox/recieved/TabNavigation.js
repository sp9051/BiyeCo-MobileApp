import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TabNavigation = ({ selectedTab, onTabChange, tabs }) => {
    return (
        <View style={styles.container}>
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab}
                    onPress={() => onTabChange(tab)}
                    style={[
                        styles.tab,
                        {
                            backgroundColor: selectedTab === tab ? '#f3f0f7' : 'transparent',
                        }
                    ]}
                >
                    <Text style={[
                        styles.tabText,
                        {
                            color: selectedTab === tab ? '#5a3e8f' : '#6c757d',
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
        backgroundColor: '#ffffff',
        paddingVertical: 8,
        paddingHorizontal: 16,
        gap: 8,
    },
    tab: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    tabText: {
        fontSize: 16,
        fontWeight: '500',
    },
});

export default TabNavigation;
