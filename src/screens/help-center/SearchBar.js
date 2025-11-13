import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { SearchIcon } from './Icons';

const SearchBar = ({ placeholder = "Type your issue...", onChangeText, value }) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                    <SearchIcon />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor="#9CA3AF"
                    onChangeText={onChangeText}
                    value={value}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
        paddingTop: 16,
        paddingRight: 24,
        paddingBottom: 16,
        paddingLeft: 24,
    },
    inputContainer: {
        position: 'relative',
    },
    iconContainer: {
        position: 'absolute',
        left: 16,
        top: '50%',
        transform: [{ translateY: -8 }],
        zIndex: 1,
    },
    input: {
        width: '100%',
        paddingTop: 14,
        paddingRight: 16,
        paddingBottom: 14,
        paddingLeft: 48,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        backgroundColor: '#FFFFFF',
        color: '#111827',
        fontSize: 16,
        fontFamily: 'Inter',
    },
});

export default SearchBar;
