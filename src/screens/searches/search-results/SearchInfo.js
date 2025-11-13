import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchInfo = ({ matchCount = 24 }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Showing {matchCount} matches for your search
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        paddingRight: 20,
        paddingBottom: 16,
        paddingLeft: 20,
        backgroundColor: '#e8e8e8',
    },
    text: {
        fontSize: 16,
        color: '#787878',
        margin: 0,
    },
});

export default SearchInfo;
