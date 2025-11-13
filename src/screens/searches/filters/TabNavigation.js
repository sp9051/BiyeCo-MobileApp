import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TabNavigation = ({ activeTab, onTabChange }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => onTabChange('basic')}
                style={[
                    styles.tab,
                    {
                        backgroundColor: activeTab === 'basic' ? '#fff' : '#f3f4f6',
                    }
                ]}
            >
                <Text style={[
                    styles.tabText,
                    { color: activeTab === 'basic' ? '#5b3a8f' : '#9ca3af' }
                ]}>
                    Basic
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onTabChange('advanced')}
                style={[
                    styles.tab,
                    {
                        backgroundColor: activeTab === 'advanced' ? '#fff' : '#f3f4f6',
                    }
                ]}
            >
                <Text style={[
                    styles.tabText,
                    { color: activeTab === 'advanced' ? '#5b3a8f' : '#9ca3af' }
                ]}>
                    Advanced
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 32,
    },
    tab: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
        alignItems: 'center',
    },
    tabText: {
        fontSize: 16,
        fontWeight: '500',
    },
});

export default TabNavigation;
