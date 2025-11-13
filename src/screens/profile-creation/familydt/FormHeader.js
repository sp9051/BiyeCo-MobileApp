import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import BackIcon from './BackIcon';

const FormHeader = ({ onBackPress }) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.backButton} onPress={onBackPress}>
                <BackIcon />
            </Pressable>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Family Details</Text>
            </View>
            <View style={styles.spacer} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 9999,
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
    spacer: {
        width: 40,
    },
});

export default FormHeader;
