import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackButton from './BackButton';

const FormHeader = ({ title, onBackPress }) => {
    return (
        <View style={styles.container}>
            <BackButton onPress={onBackPress} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 16,
        backgroundColor: '#FFFFFF',
    },
    titleContainer: {
        position: 'absolute',
        left: '50%',
        transform: [{ translateX: -50 }],
    },
    title: {
        color: '#111827',
        fontFamily: 'Inter',
        fontSize: 20,
        lineHeight: 28,
        fontWeight: '600',
    },
});

export default FormHeader;
