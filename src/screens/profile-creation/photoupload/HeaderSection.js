import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BackIcon from './BackIcon';

const HeaderSection = ({ onBackPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
                <BackIcon />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Photos & Privacy</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.667,
        borderBottomColor: '#F3F4F6',
        position: 'relative',
    },
    backButton: {
        width: 40,
        height: 40,
        paddingTop: 11,
        paddingRight: 13,
        paddingBottom: 11,
        paddingLeft: 13,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 9999,
        position: 'absolute',
        left: 16,
        backgroundColor: '#F3F4F6',
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        color: '#111827',
        fontSize: 20,
        lineHeight: 28,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
});

export default HeaderSection;
